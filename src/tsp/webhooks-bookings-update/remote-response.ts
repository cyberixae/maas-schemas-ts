/*

undefined
Remote response schema, e.g. how MaaS-backend responds back to TSP

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';

export const schemaId =
  'http://maasglobal.com/tsp/webhooks-bookings-update/remote-response.json';
// BookingDelta
// The purpose of this remains a mystery
export type BookingDelta = t.Branded<
  {
    id?: Units_.Uuid;
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    state?: 'RESERVED' | 'CONFIRMED' | 'ACTIVATED' | 'EXPIRED' | 'CANCELLED' | 'REJECTED';
    leg?: BookingOption_.Leg;
    meta?: BookingMeta_.Default;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    customer?: BookingOption_.Customer;
  } & {
    tspId: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    state: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  BookingDeltaBrand
>;
export const BookingDelta = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('CONFIRMED'),
        t.literal('ACTIVATED'),
        t.literal('EXPIRED'),
        t.literal('CANCELLED'),
        t.literal('REJECTED'),
      ]),
      leg: BookingOption_.Leg,
      meta: BookingMeta_.Default,
      terms: Booking_.Terms,
      token: Booking_.Token,
      customer: BookingOption_.Customer,
    }),
    t.type({
      tspId: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      state: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      state?:
        | 'RESERVED'
        | 'CONFIRMED'
        | 'ACTIVATED'
        | 'EXPIRED'
        | 'CANCELLED'
        | 'REJECTED';
      leg?: BookingOption_.Leg;
      meta?: BookingMeta_.Default;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      customer?: BookingOption_.Customer;
    } & {
      tspId: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      state: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    },
    BookingDeltaBrand
  > => true,
  'BookingDelta',
);
export interface BookingDeltaBrand {
  readonly BookingDelta: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    booking?: BookingDelta;
    debug?: {};
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    booking: BookingDelta,
    debug: t.type({}),
  }),
  (
    x,
  ): x is t.Branded<
    {
      booking?: BookingDelta;
      debug?: {};
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
