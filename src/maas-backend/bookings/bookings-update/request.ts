/*

undefined
Request schema for bookings-update

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as Booking_ from 'src/core/booking';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-update/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    payload?: Booking_.Default;
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
      bookingId: Units_.Uuid,
      payload: Booking_.Default,
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
      bookingId?: Units_.Uuid;
      payload?: Booking_.Default;
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
