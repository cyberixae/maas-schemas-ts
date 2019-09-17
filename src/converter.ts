import * as gen from 'io-ts-codegen';
import schema from 'maas-schemas/schemas/core/components/units.json';

export interface StringSchema {
  description?: string,
  type: 'string'
}

export interface NumberSchema {
  description?: string,
  type: 'number'|'integer'
}

export interface BooleanSchema {
  description?: string,
  type: 'boolean'
}

export interface ObjectSchema {
  description?: string,
  type: 'object'
  properties: { [key: string]: JSONSchema }
  required?: Array<string>
}

export type JSONSchema = StringSchema | NumberSchema | BooleanSchema | ObjectSchema

export interface JSONSchemaFile {
  $id: string,
  description?: string,
  definitions: Record<string, JSONSchema>
}

function getRequiredProperties(schema: ObjectSchema): { [key: string]: true } {
  const required: { [key: string]: true } = {}
  if (schema.required) {
    schema.required.forEach(function(k) {
      required[k] = true
    })
  }
  return required
}

function toInterfaceCombinator(schema: ObjectSchema): gen.InterfaceCombinator {
  const required = getRequiredProperties(schema)
  return gen.interfaceCombinator(
    Object.keys(schema.properties).map(key =>
      gen.property(key, fromSchema(schema.properties[key]), !required.hasOwnProperty(key))
    )
  )
}

export function fromSchema(schema: JSONSchema): gen.TypeReference {
  switch (schema.type) {
    case 'string':
      return gen.stringType
    case 'number':
      return gen.numberType
    case 'integer':
      return gen.numberType
    case 'boolean':
      return gen.booleanType
    case 'object':
      return toInterfaceCombinator(schema)
  }
}

function capitalize(word: string) {
  const empty: '' = '';
  const [c, ...cs] = word.split(empty);
  return [c.toUpperCase(), ...cs].join(empty);
}

export function fromFile(schema: JSONSchemaFile): Array<[string|undefined, gen.TypeDeclaration]> {
  const path = schema.$id;
  const [file] = path.split('/').reverse();
  return Object.entries(schema.definitions).map(([k,v]: [string, JSONSchema]) =>
    [v.description,
    gen.typeDeclaration(capitalize(k), gen.brandCombinator(fromSchema(v), (x) => x, `${file}#${k}`))]
  )


}
const declarations = fromFile(schema as JSONSchemaFile)

console.log('/*');
console.log('!!! DO NOT EDIT !!!')
console.log('The file was generated from JSON schema by convert.ts');
console.log('')
console.log(schema.description);
console.log(`export const schemaId = ${schema.$id}`);
console.log('*/');

for (const [c, d] of declarations) {
  console.log('');
  if (typeof(c) !== undefined) {
    console.log(`// ${c}`);
  }
  console.log(gen.printRuntime(d));
  console.log(gen.printStatic(d));
}
/*
const sorted = gen.sort(declarations)

console.log(sorted.map(d => gen.printRuntime(d)).join('\n'))
console.log(sorted.map(d => gen.printStatic(d)).join('\n'))
*/
