/*

undefined
MaaS customer payment sources update

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as PaymentSource_ from 'src/maas-backend/customers/payment-sources/paymentSource';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/update/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId: Units_.IdentityId;
    customerId: Units_.IdentityId;
    paymentSourceId: PaymentSource_.PaymentSourceId;
    payload: {
      paymentSource: {
        isDefault?: true;
        alias?: PaymentSource_.Alias;
      } & (unknown | unknown);
    };
    headers: ApiCommon_.Headers;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.type({
    identityId: Units_.IdentityId,
    customerId: Units_.IdentityId,
    paymentSourceId: PaymentSource_.PaymentSourceId,
    payload: t.type({
      paymentSource: t.intersection([
        t.partial({
          isDefault: t.union([t.literal(true)]),
          alias: PaymentSource_.Alias,
        }),
        t.union([t.unknown, t.unknown]),
      ]),
    }),
    headers: ApiCommon_.Headers,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId: Units_.IdentityId;
      customerId: Units_.IdentityId;
      paymentSourceId: PaymentSource_.PaymentSourceId;
      payload: {
        paymentSource: {
          isDefault?: true;
          alias?: PaymentSource_.Alias;
        } & (unknown | unknown);
      };
      headers: ApiCommon_.Headers;
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
