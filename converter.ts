#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import * as gen from 'io-ts-codegen';
import { JSONSchema7, JSONSchema7Definition } from 'json-schema';

const [, , inputFile, outputDir] = process.argv;
const outputFile = path.join(outputDir, inputFile.split('.json').join('.ts'));

console.info('');
console.info(`input: ${path.resolve(inputFile)}`);
console.info(`output: ${path.resolve(outputFile)}`);

const schema: JSONSchema7 = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

const imps = new Set<string>();

function notImplemented(item: string) {
  console.error(`ERROR: ${item} NOT supported by convert.ts`);
  process.exit();
}

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
}

const camelFromKebab = (kebab: string) => {
  const camel = kebab
    .split('-')
    .map(capitalize)
    .join('');
  return camel;
};

function parseRef(ref: string) {
  const parts = ref.split('#');
  if (parts.length === 1) {
    const [filePath] = parts;
    return { filePath, variableName: 'default' };
  }
  if (parts.length > 2) {
    // eslint-disable-next-line
    throw new Error('unknown ref format');
  }
  const [filePath, jsonPath] = parts;
  // eslint-disable-next-line
  const [name] = jsonPath.split('/').reverse();
  const variableName = camelFromKebab(name);
  return { filePath, variableName };
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
  const properties = schema.properties || {};
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

function fromRef(refString: string): gen.TypeReference {
  const ref = parseRef(refString);

  if (ref.filePath === '') {
    return gen.customCombinator(ref.variableName, ref.variableName);
  }

  // eslint-disable-next-line
  const [withoutPath] = ref.filePath.split('/').reverse();
  const [basefile] = withoutPath.split('.json');
  const importName = `${camelFromKebab(basefile)}_`;
  const domain = 'http://maasglobal.com/';
  if (ref.filePath.startsWith(domain) === false) {
    notImplemented('relative references');
  }
  const [, withoutDomain] = ref.filePath.split(domain);
  const [importPath] = withoutDomain.split('.json');
  imps.add(`import * as ${importName} from 'src/${importPath}';`);
  const variableRef = `${importName}.${ref.variableName}`;
  return gen.customCombinator(variableRef, variableRef);
}

export function fromSchema(schema: JSONSchema7Definition): gen.TypeReference {
  if (typeof schema === 'boolean') {
    return gen.literalCombinator(schema);
  }
  if ('$ref' in schema) {
    if (typeof schema['$ref'] === 'undefined') {
      // eslint-disable-next-line
      throw new Error('broken input');
    }
    return fromRef(schema['$ref']);
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
  if ('enum' in schema) {
    notImplemented('enum');
  }
  if (typeof schema.type !== 'undefined') {
    notImplemented(`${schema.type} type`);
  }
  // eslint-disable-next-line
  throw new Error(`unknown schema: ${JSON.stringify(schema)}`)
}

export function fromDefinitions(
  definitions2: JSONSchema7['definitions'],
): Array<[string | undefined, gen.TypeDeclaration]> {
  const definitions = definitions2 || {};
  return Object.entries(definitions).map(([k, v]: [string, JSONSchema7Definition]) => {
    const scem = v;
    const name = capitalize(k);

    if (typeof scem === 'boolean') {
      imps.add("import * as t from 'io-ts';");
      return [
        undefined,
        gen.typeDeclaration(
          name,
          gen.brandCombinator(fromSchema(scem), (x) => 'true', name),
          true,
        ),
      ];
    }
    if ('$ref' in scem) {
      if (typeof scem['$ref'] === 'undefined') {
        // eslint-disable-next-line
        throw new Error('broken input');
      }
      return [
        undefined,
        gen.typeDeclaration(capitalize(k), fromRef(scem['$ref']), true),
      ];
    }
    imps.add("import * as t from 'io-ts';");
    return [
      scem.description,
      gen.typeDeclaration(
        name,
        gen.brandCombinator(fromSchema(scem), (x) => generateChecks(x, scem), name),
        true,
      ),
    ];
  });
}

export function fromRoot(
  root: JSONSchema7,
): Array<[string | undefined, gen.TypeDeclaration]> {

  if ('$ref' in root) {
    if (typeof root['$ref'] === 'undefined') {
      // eslint-disable-next-line
      throw new Error('broken input');
    }
    return [[
      'default',
      gen.typeDeclaration('default', fromRef(root['$ref']), true),
    ]];
  }
  try {
    imps.add("import * as t from 'io-ts';");
    return [
      [
        'default',
        gen.typeDeclaration(
          'default',
          gen.brandCombinator(
            fromSchema(schema),
            (x) => generateChecks(x, schema),
            'default',
          ),
          true,
        ),
      ],
    ];

  } catch {
    return [];
  }
}

export function fromFile(
  schema: JSONSchema7,
): Array<[string | undefined, gen.TypeDeclaration]> {
  return fromRoot(schema).concat(fromDefinitions(schema.definitions));
}

const declarations = fromFile(schema as JSONSchema7);
const defs: Array<[string | undefined, string, string]> = declarations.map(([c, d]) => [
  c,
  gen.printStatic(d),
  gen.printRuntime(d).replace(/\ninterface /, '\nexport interface '),
]);

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
console.info('.');
