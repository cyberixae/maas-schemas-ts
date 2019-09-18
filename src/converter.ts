#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import * as gen from 'io-ts-codegen';

const [, , inputFile, outputDir] = process.argv;

console.error(`yarn convert ${path.resolve(inputFile)}`);

const schema: JSONSchemaFile = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

export interface StringSchema {
  description?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  type: 'string';
}

export interface NumberSchema {
  description?: string;
  minimum?: number;
  maximum?: number;
  type: 'number' | 'integer';
}

export interface BooleanSchema {
  description?: string;
  type: 'boolean';
}

export interface ObjectSchema {
  description?: string;
  type: 'object';
  properties: { [key: string]: JSONSchema };
  required?: Array<string>;
}

export type JSONSchema = StringSchema | NumberSchema | BooleanSchema | ObjectSchema;
export type Ref = { $ref: string; description?: string };
export type JSONRef = Ref | JSONSchema;

export interface JSONSchemaFile {
  $id: string;
  description?: string;
  minLength?: number;
  maxLength?: number;
  definitions: Record<string, JSONRef>;
}

function getRequiredProperties(schema: ObjectSchema): { [key: string]: true } {
  const required: { [key: string]: true } = {};
  if (schema.required) {
    schema.required.forEach(function(k) {
      // eslint-disable-next-line
      required[k] = true;
    });
  }
  return required;
}

function toInterfaceCombinator(schema: ObjectSchema): gen.InterfaceCombinator {
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
  return `(${x}.match(/${pattern}/) !== null)`;
}

function checkMinLength(x: string, minLength: number): string {
  return `(${x}.length >= ${minLength})`;
}

function checkMaxLength(x: string, maxLength: number): string {
  return `(${x}.length <= ${maxLength})`;
}

function checkMinimum(x: string, minimum: number): string {
  return `(${x} >= ${minimum})`;
}

function checkMaximum(x: string, maximum: number): string {
  return `(${x} <= ${maximum})`;
}

function checkInteger(x: string): string {
  return `(Number.isInteger(${x}))`;
}

function stringChecks(x: string, schema: StringSchema): string {
  const checks: Array<string> = [
    ...(schema.pattern ? [checkPattern(x, schema.pattern)] : []),
    ...(schema.minLength ? [checkMinLength(x, schema.minLength)] : []),
    ...(schema.maxLength ? [checkMaxLength(x, schema.maxLength)] : []),
  ];
  if (checks.length < 1) {
    return 'true';
  }
  return checks.join(' && ');
}

function numberChecks(x: string, schema: NumberSchema): string {
  const checks: Array<string> = [
    ...(schema.minimum ? [checkMinimum(x, schema.minimum)] : []),
    ...(schema.maximum ? [checkMaximum(x, schema.maximum)] : []),
  ];
  if (checks.length < 1) {
    return 'true';
  }
  return checks.join(' && ');
}

function intChecks(x: string, schema: NumberSchema): string {
  const checks: Array<string> = [
    ...(schema.minimum ? [checkMinimum(x, schema.minimum)] : []),
    ...(schema.maximum ? [checkMaximum(x, schema.maximum)] : []),
    ...(schema.type === 'integer' ? [checkInteger(x)] : []),
  ];
  if (checks.length < 1) {
    return 'true';
  }
  return checks.join(' && ');
}

function boolChecks(_x: string, _schema: BooleanSchema): string {
  const checks: Array<string> = [];
  if (checks.length < 1) {
    return 'true';
  }
  return checks.join(' && ');
}

export function fromSchema(schema: JSONSchema): gen.TypeReference {
  switch (schema.type) {
    case 'string':
      return gen.stringType;
    case 'number':
      return gen.numberType;
    case 'integer':
      return gen.numberType;
    case 'boolean':
      return gen.booleanType;
    case 'object':
      return toInterfaceCombinator(schema);
  }
}

export function branded(name: string, schema: JSONSchema): gen.TypeReference {
  switch (schema.type) {
    case 'string':
      return gen.brandCombinator(
        fromSchema(schema),
        (x) => stringChecks(x, schema),
        name,
      );
    case 'number':
      return gen.brandCombinator(
        fromSchema(schema),
        (x) => numberChecks(x, schema),
        name,
      );
    case 'integer':
      return gen.brandCombinator(fromSchema(schema), (x) => intChecks(x, schema), name);
    case 'boolean':
      return gen.brandCombinator(fromSchema(schema), (x) => boolChecks(x, schema), name);
    case 'object':
      return fromSchema(schema);
  }
}

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
}
export function fromFile(
  schema: JSONSchemaFile,
): Array<[string | undefined, gen.TypeDeclaration, Array<string>]> {
  /*
  const path = schema.$id;
  const [noSuffix] = path.split('.json');
  // eslint-disable-next-line
  const [file] = noSuffix.split('/').reverse();
  ${capitalize(file)}
  */
  return Object.entries(schema.definitions).map(([k, v]: [string, JSONRef]) => {
    const ref = v as Ref;
    const scem = v as JSONSchema;
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
        ref.description,
        gen.typeDeclaration(
          capitalize(k),
          gen.customCombinator(omg, omg, ['foo', 'bar']),
          true,
        ),
        [`import * as ${iname} from 'src/${bobobo3}';`]
      ];
    }
    const name = capitalize(k);
    return [scem.description, gen.typeDeclaration(name, branded(name, scem), true), [`import * as t from 'io-ts';`]];
  });
}

const declarations = fromFile(schema as JSONSchemaFile);
const defs: Array<[string|undefined, string, string]> = declarations.map(([c, d]) => [c, gen.printStatic(d), gen.printRuntime(d).replace(/\ninterface /, '\nexport interface ')]);

const outputFile = path.join(outputDir, inputFile.split('.json').join('.ts'));
console.log(outputFile)

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
log('* /');
log('');
const imps = new Set<string>();
for (const [,, imp] of declarations) {
  imp.forEach((i) => imps.add(i));
}
imps.forEach(log);
log('');
log(`export const schemaId = '${schema.$id}';`);

//const sorted = gen.sort(declarations)
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
