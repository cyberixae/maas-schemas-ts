/*

undefined
MaaS customer payment sources setup intent create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as Common_ from 'src/core/components/common';
import * as PaymentSource_ from 'src/maas-backend/customers/payment-sources/paymentSource';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/setup-intent/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    payload?: {
      setupIntent?: {
        paymentSourceId?: Common_.PaymentSourceId;
        gatewayName?: PaymentSource_.GatewayName;
        isDefault?: boolean;
        type?: PaymentSource_.Type;
        alias?: PaymentSource_.Alias;
      } & {
        paymentSourceId: unknown;
        gatewayName: unknown;
        isDefault: unknown;
        type: unknown;
      };
    } & {
      setupIntent: unknown;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: unknown;
    customerId: unknown;
    payload: unknown;
    headers: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          setupIntent: t.intersection([
            t.partial({
              paymentSourceId: Common_.PaymentSourceId,
              gatewayName: PaymentSource_.GatewayName,
              isDefault: t.boolean,
              type: PaymentSource_.Type,
              alias: PaymentSource_.Alias,
            }),
            t.type({
              paymentSourceId: t.unknown,
              gatewayName: t.unknown,
              isDefault: t.unknown,
              type: t.unknown,
            }),
          ]),
        }),
        t.type({
          setupIntent: t.unknown,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: t.unknown,
      customerId: t.unknown,
      payload: t.unknown,
      headers: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      payload?: {
        setupIntent?: {
          paymentSourceId?: Common_.PaymentSourceId;
          gatewayName?: PaymentSource_.GatewayName;
          isDefault?: boolean;
          type?: PaymentSource_.Type;
          alias?: PaymentSource_.Alias;
        } & {
          paymentSourceId: unknown;
          gatewayName: unknown;
          isDefault: unknown;
          type: unknown;
        };
      } & {
        setupIntent: unknown;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: unknown;
      customerId: unknown;
      payload: unknown;
      headers: unknown;
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
