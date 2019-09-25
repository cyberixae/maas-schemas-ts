/*

undefined
MaaS customer payment sources create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as PaymentSource_ from 'src/maas-backend/customers/payment-sources/paymentSource';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/create/request.json';
// Default
// The purpose of this remains a mystery
export type Default = t.Branded<
  {
    identityId: Units_.IdentityId;
    customerId: Units_.IdentityId;
    payload: {
      paymentSource: {
        gatewayName: PaymentSource_.GatewayName;
        type: PaymentSource_.Type;
        temporaryToken: string;
        isDefault: boolean;
        alias?: PaymentSource_.Alias;
      };
    };
    headers: ApiCommon_.Headers;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.type({
    identityId: Units_.IdentityId,
    customerId: Units_.IdentityId,
    payload: t.type({
      paymentSource: t.intersection([
        t.type({
          gatewayName: PaymentSource_.GatewayName,
          type: PaymentSource_.Type,
          temporaryToken: t.string,
          isDefault: t.boolean,
        }),
        t.partial({
          alias: PaymentSource_.Alias,
        }),
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
      payload: {
        paymentSource: {
          gatewayName: PaymentSource_.GatewayName;
          type: PaymentSource_.Type;
          temporaryToken: string;
          isDefault: boolean;
          alias?: PaymentSource_.Alias;
        };
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
