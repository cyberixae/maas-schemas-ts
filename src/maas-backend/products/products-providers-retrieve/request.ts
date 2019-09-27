/*

undefined
Request schema for products-providers-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'src/core/components/common';
import * as Units_ from 'src/core/components/units';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/products/products-providers-retrieve/request.json';
// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    agencyId?: Common_.AgencyId;
  } & {
    agencyId: unknown;
  },
  PayloadBrand
>;
export const Payload = t.brand(
  t.intersection([
    t.partial({
      agencyId: Common_.AgencyId,
    }),
    t.type({
      agencyId: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: Common_.AgencyId;
    } & {
      agencyId: unknown;
    },
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: unknown;
    payload: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: t.unknown,
      payload: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: unknown;
      payload: unknown;
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
