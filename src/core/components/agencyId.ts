/*

undefined
undefined

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/agencyId.json';
// Default
// The purpose of this remains a mystery
export type Default = t.Branded<string, DefaultBrand>;
export const Default = t.brand(
  t.string,
  (x): x is t.Branded<string, DefaultBrand> =>
    (typeof x !== 'string' || x.length >= 2) && (typeof x !== 'string' || x.length <= 64),
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
