/*

undefined
Request schema for itinerary-list

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as Booking_ from 'src/core/booking';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/itineraries/itinerary-list/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      states?: string;
      bookingId?: Booking_.Id;
      originalFare?: string;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.partial({
        startTime: Units_.Time,
        endTime: Units_.Time,
        states: t.string,
        bookingId: Booking_.Id,
        originalFare: t.string,
      }),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
        states?: string;
        bookingId?: Booking_.Id;
        originalFare?: string;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: unknown;
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
