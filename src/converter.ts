#!/usr/bin/env ts-node -T

import fs from 'fs';
import path from 'path';
import * as gen from 'io-ts-codegen';

const [_tsNode, _script, inputFile, outputDir] = process.argv;

const schema: JSONSchemaFile = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

const outputFile = path.join(outputDir, inputFile.split('.json').join('.ts'));

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
const fd = fs.openSync(outputFile, 'w');
fs.writeFileSync(fd, '');

const log = (a: string) => fs.appendFileSync(fd, `${a}\n`);


export interface StringSchema {
  description?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  type: 'string';
}

export interface NumberSchema {
  description?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  type: 'number' | 'integer';
}

export interface BooleanSchema {
  description?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  type: 'boolean';
}

export interface ObjectSchema {
  description?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
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

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
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

function generateChecks(x: string, schema: JSONSchema): string {
  const checks = [
    `${x} === ${x}`,
    ...(schema.pattern ? [checkPattern(x, schema.pattern)] : []),
    ...(schema.minLength ? [checkMinLength(x, schema.minLength)] : []),
    ...(schema.maxLength ? [checkMaxLength(x, schema.maxLength)] : []),
    ...(schema.minimum ? [checkMinimum(x, schema.minimum)] : []),
    ...(schema.maximum ? [checkMaximum(x, schema.maximum)] : []),
    ...(schema.type === 'integer' ? [checkInteger(x)] : []),
  ];
  return checks.join(' && ');
}

export function fromFile(
  schema: JSONSchemaFile,
): Array<[string | undefined, gen.TypeDeclaration]> {
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
      log(`import * as ${iname} from 'src/${bobobo3}';`);
      return [
        ref.description,
        gen.typeDeclaration(
          capitalize(k),
          gen.customCombinator(omg, omg, ['foo', 'bar']),
          true,
        ),
      ];
    }
    return [
      scem.description,
      gen.typeDeclaration(
        capitalize(k),
        gen.brandCombinator(
          fromSchema(scem),
          (x) => generateChecks(x, scem),
          `${capitalize(k)}`,
        ),
        true,
      ),
    ];
  });
}

log('/*');
log('');
log(schema.description);
log('');
log('!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!');
log('');
log('*/');
log('');
log("import * as t from 'io-ts';");

const declarations = fromFile(schema as JSONSchemaFile);
log('');
log(`export const schemaId = '${schema.$id}';`);

//const sorted = gen.sort(declarations)
// eslint-disable-next-line
for (const [c, d] of declarations) {
  log('');
  if (typeof c !== 'undefined') {
    log(`// ${c}`);
  }
  log(gen.printStatic(d));
  log(gen.printRuntime(d));
}

fs.closeSync(fd);
