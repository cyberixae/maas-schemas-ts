/*

undefined
Response schema for subscriptions-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Subscription_ from 'maas-schemas-ts/maas-backend/subscriptions/subscription';

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-retrieve/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    subscription?: Subscription_.Subscription;
    debug?: {};
  } & {
    subscription: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      subscription: Subscription_.Subscription,
      debug: t.type({}),
    }),
    t.type({
      subscription: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      subscription?: Subscription_.Subscription;
      debug?: {};
    } & {
      subscription: unknown;
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
