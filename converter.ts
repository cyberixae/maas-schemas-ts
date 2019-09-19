#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import * as gen from 'io-ts-codegen';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';

const [, , inputFile, outputDir] = process.argv;

//console.error(`yarn convert ${path.resolve(inputFile)}`);

const schema: JSONSchema7 = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

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
  const properties = schema.properties || {};
  const required = getRequiredProperties(schema);
  return gen.interfaceCombinator(
    Object.entries(properties).map(<K extends string, V>([key, value]: [K, V]) =>
      gen.property(
        key,
        // eslint-disable-next-line
        fromSchema(value),
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

function notImplemented(item: string) {
  console.error(`${item} not implemented`);
  process.exit()
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
    case 'array':
      notImplemented('array')
  }
  if ('enum' in schema) {
    notImplemented('enum')
  }
  if ('$ref' in schema) {
    notImplemented('ref')
  }
  // eslint-disable-next-line
  throw new Error(`unknown schema: ${JSON.stringify(schema)}`)
}

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
}

function fromRef(ref: string): [gen.TypeReference, Array<string>] {
  const URI = ref;
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
  return [gen.customCombinator(omg, omg, ['foo', 'bar']), [`import * as ${iname} from 'src/${bobobo3}';`]];
}

export function fromDefinitions(
  definitions2: JSONSchema7['definitions'],
): Array<[string | undefined, gen.TypeDeclaration, Array<string>]> {
  const definitions = definitions2 || {}
  return Object.entries(definitions).map(([k, v]: [string, JSONSchema7Definition]) => {
    const scem = v
    const name = capitalize(k);

    if (typeof scem === 'boolean') {
      return [
        undefined,
        gen.typeDeclaration(
          name,
          gen.brandCombinator(fromSchema(scem), (x) => 'true', name),
          true,
        ),
        [`import * as t from 'io-ts';`],
      ];
    }
    if ('$ref' in scem) {
      if (typeof scem['$ref'] === 'undefined') {
        // eslint-disable-next-line
        throw new Error('broken input');
      }
      const [comb, imports] = fromRef(scem['$ref'])
      return [
        undefined,
        gen.typeDeclaration(
          capitalize(k),
          comb,
          true,
        ),
        imports,
      ];
    }
    return [
      scem.description,
      gen.typeDeclaration(
        name,
        gen.brandCombinator(fromSchema(scem), (x) => generateChecks(x, scem), name),
        true,
      ),
      [`import * as t from 'io-ts';`],
    ];
  });
}

export function fromFile(
  schema: JSONSchema7,
): Array<[string | undefined, gen.TypeDeclaration, Array<string>]> {
  return fromDefinitions(schema.definitions).concat(['Default', gen.typeDeclaration(
        'Default',
        gen.brandCombinator(fromSchema(schema), (x) => generateChecks(x, schema), 'Default'),
        true,
      ), ["import * as t from 'io-ts';"]]);
}

const declarations = fromFile(schema as JSONSchema7);
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
