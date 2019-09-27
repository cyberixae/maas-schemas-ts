/*

undefined
Response schema for products-providers-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Provider_ from 'maas-schemas-ts/maas-backend/products/provider';

export const schemaId =
  'http://maasglobal.com/maas-backend/products/products-providers-options/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    providers?: Array<Provider_.Default>;
  } & {
    providers: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      providers: t.array(Provider_.Default),
    }),
    t.type({
      providers: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      providers?: Array<Provider_.Default>;
    } & {
      providers: unknown;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
