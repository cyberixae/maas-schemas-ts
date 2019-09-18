/*

Product in core which encapsulates at least an id, name and a tspProductId

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/product.json';

export type Id = t.Branded<string, IdBrand>
export const Id = t.brand(t.string, (x): x is t.Branded<string, IdBrand> => x === x && (x.length >= 1) && (x.length <= 255), 'Id')
interface IdBrand {
  readonly Id: unique symbol
}
