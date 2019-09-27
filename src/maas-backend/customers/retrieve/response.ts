/*

undefined
MaaS customer retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Customer_ from 'maas-schemas-ts/maas-backend/customers/customer';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/retrieve/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customer?: Customer_.Default;
  } & {
    customer: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      customer: Customer_.Default,
    }),
    t.type({
      customer: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: Customer_.Default;
    } & {
      customer: unknown;
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
