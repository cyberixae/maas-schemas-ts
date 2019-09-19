#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import * as gen from 'io-ts-codegen';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';

const [, , inputFile, outputDir] = process.argv;

//console.error(`yarn convert ${path.resolve(inputFile)}`);

const schema: JSONSchema7File = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

export type Ref = { $ref: string };
export type JSONRef = Ref | JSONSchema7Definition;

export interface JSONSchema7File {
  $id: string;
  description?: string;
  minLength?: number;
  maxLength?: number;
  definitions: Record<string, JSONRef>;
}

function getRequiredProperties(schema: JSONSchema7): { [key: string]: true } {
  const required: { [key: string]: true } = {};
  if (schema.required) {
    schema.required.forEach(function(k) {
      // eslint-disable-next-line
      required[k] = true;
    });
  }
  return required;
}

function toInterfaceCombinator(schema: JSONSchema7): gen.InterfaceCombinator {
  const required = getRequiredProperties(schema);
  return gen.interfaceCombinator(
    Object.keys(schema.properties).map((key) =>
      gen.property(
        key,
        // eslint-disable-next-line
        fromSchema(schema.properties[key]),
        !required.hasOwnProperty(key),
      ),
    ),
  );
}

function checkPattern(x: string, pattern: string): string {
  return `( typeof x !== 'string' || ${x}.match(/${pattern}/) !== null)`;
}

function checkMinLength(x: string, minLength: number): string {
  return `( typeof x !== 'string' || ${x}.length >= ${minLength})`;
}

function checkMaxLength(x: string, maxLength: number): string {
  return `( typeof x !== 'string' || ${x}.length <= ${maxLength})`;
}

function checkMinimum(x: string, minimum: number): string {
  return `( typeof x !== 'number' || ${x} >= ${minimum})`;
}

function checkMaximum(x: string, maximum: number): string {
  return `( typeof x !== 'string' || ${x} <= ${maximum})`;
}

function checkInteger(x: string): string {
  return `(Number.isInteger(${x}))`;
}

function generateChecks(x: string, schema: JSONSchema7): string {
  const checks: Array<string> = [
    ...(schema.pattern ? [checkPattern(x, schema.pattern)] : []),
    ...(schema.minLength ? [checkMinLength(x, schema.minLength)] : []),
    ...(schema.maxLength ? [checkMaxLength(x, schema.maxLength)] : []),
    ...(schema.minimum ? [checkMinimum(x, schema.minimum)] : []),
    ...(schema.maximum ? [checkMaximum(x, schema.maximum)] : []),
    ...(schema.type === 'integer' ? [checkInteger(x)] : []),
  ];
  if (checks.length < 1) {
    return 'true';
  }
  return checks.join(' && ');
}

export function fromSchema(schema: JSONSchema7Definition): gen.TypeReference {
  if (typeof schema === 'boolean') {
    return gen.literalCombinator(schema);
  }
  switch (schema.type) {
    case 'string':
      return gen.stringType;
    case 'number':
    case 'integer':
      return gen.numberType;
    case 'boolean':
      return gen.booleanType;
    case 'object':
      return toInterfaceCombinator(schema);
  }
}

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
}

export function fromDefinitions(definitions: JSONSchema7['definitions']): Array<[string | undefined, gen.TypeDeclaration, Array<string>]> {
  return Object.entries(definitions).map(([k, v]: [string, JSONRef]) => {
    const ref = v as Ref;
    const scem = v as JSONSchema7Definition;
    if (ref['$ref']) {
      const URI = ref['$ref'];
      const [fpath, jpath] = URI.split('.json#');
      // eslint-disable-next-line
      const [file] = fpath.split('/').reverse();
      // eslint-disable-next-line
      const [name] = jpath.split('/').reverse();
      const iname = `${capitalize(file)}_`;
      const omg = `${iname}.${capitalize(name)}`;
      const [, bobobo] = URI.split('http://maasglobal.com/');
      const [bobobo2] = bobobo.split('#');
      const [bobobo3] = bobobo2.split('.json');
      return [
        undefined,
        gen.typeDeclaration(
          capitalize(k),
          gen.customCombinator(omg, omg, ['foo', 'bar']),
          true,
        ),
        [`import * as ${iname} from 'src/${bobobo3}';`],
      ];
    }
    const name = capitalize(k);
    return [
      (typeof scem === 'boolean' ? undefined : scem.description),
      gen.typeDeclaration(name, gen.brandCombinator(fromSchema(scem), (x) => generateChecks(x, scem), name), true),
      [`import * as t from 'io-ts';`],
    ];
  });
}


export function fromFile(
  schema: JSONSchema7File,
): Array<[string | undefined, gen.TypeDeclaration, Array<string>]> {
  return fromDefinitions(schema.definitions);
}

const declarations = fromFile(schema as JSONSchema7File);
const defs: Array<[string | undefined, string, string]> = declarations.map(([c, d]) => [
  c,
  gen.printStatic(d),
  gen.printRuntime(d).replace(/\ninterface /, '\nexport interface '),
]);

const outputFile = path.join(outputDir, inputFile.split('.json').join('.ts'));
console.log(outputFile);

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
const fd = fs.openSync(outputFile, 'w');
fs.writeFileSync(fd, '');

const log = (a: string) => fs.appendFileSync(fd, `${a}\n`);

log('/*');
log('');
log(`${schema.description}`);
log('');
log('!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!');
log('');
log('*/');
log('');
const imps = new Set<string>();
// eslint-disable-next-line
for (const [, , imp] of declarations) {
  imp.forEach((i) => imps.add(i));
}
imps.forEach(log);
log('');
log(`export const schemaId = '${schema.$id}';`);

// eslint-disable-next-line
for (const [c, s, r] of defs) {
  log('');
  if (typeof c !== 'undefined') {
    log(`// ${c}`);
  }
  log(s);
  log(r);
}

log('// Success');
fs.closeSync(fd);
