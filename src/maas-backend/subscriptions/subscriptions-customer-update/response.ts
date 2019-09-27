/*

undefined
Response schema for subscriptions-customer-update

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Contact_ from 'maas-schemas-ts/maas-backend/subscriptions/contact';

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-customer-update/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customer?: Contact_.ContactResponse;
    debug?: {};
  } & {
    customer: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      customer: Contact_.ContactResponse,
      debug: t.type({}),
    }),
    t.type({
      customer: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: Contact_.ContactResponse;
      debug?: {};
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
