/*

undefined
Request schema for subscriptions-change-state

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-change-state/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customerId?: Units_.IdentityId;
    userId?: Units_.IdentityId;
    changeStateId?: Units_.Uuid;
    headers?: ApiCommon_.Headers;
  } & {
    customerId: unknown;
    userId: unknown;
    changeStateId: unknown;
    headers: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      userId: Units_.IdentityId,
      changeStateId: Units_.Uuid,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      customerId: t.unknown,
      userId: t.unknown,
      changeStateId: t.unknown,
      headers: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      userId?: Units_.IdentityId;
      changeStateId?: Units_.Uuid;
      headers?: ApiCommon_.Headers;
    } & {
      customerId: unknown;
      userId: unknown;
      changeStateId: unknown;
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
