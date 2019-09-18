import * as t from 'io-ts-codegen'

export interface StringSchema {
  type: 'string'
}

export interface NumberSchema {
  type: 'number'
}

export interface BooleanSchema {
  type: 'boolean'
}

export interface ObjectSchema {
  type: 'object'
  properties: { [key: string]: JSONSchema }
  required?: Array<string>
}

export type JSONSchema = StringSchema | NumberSchema | BooleanSchema | ObjectSchema

function getRequiredProperties(schema: ObjectSchema): { [key: string]: true } {
  const required: { [key: string]: true } = {}
  if (schema.required) {
    schema.required.forEach(function(k) {
      required[k] = true
    })
  }
  return required
}

function toInterfaceCombinator(schema: ObjectSchema): t.InterfaceCombinator {
  const required = getRequiredProperties(schema)
  return t.interfaceCombinator(
    Object.keys(schema.properties).map(key =>
      t.property(key, to(schema.properties[key]), !required.hasOwnProperty(key))
    )
  )
}

export function to(schema: JSONSchema): t.TypeReference {
  switch (schema.type) {
    case 'string':
      return t.stringType
    case 'number':
      return t.numberType
    case 'boolean':
      return t.booleanType
    case 'object':
      return toInterfaceCombinator(schema)
  }
}

const schema: JSONSchema = {
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    }
  },
  required: ['foo']
}

t.printStatic(to(schema))
/*
Output:

{
  foo: string
}
*/

t.printRuntime(to(schema))
/*
Output:

t.interface({
  foo: t.string
})
*/
