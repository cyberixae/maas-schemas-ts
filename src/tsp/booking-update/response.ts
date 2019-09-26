/*

undefined
Response schema for updating state of a specific booking with a TSP ID from a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'src/core/booking';
import * as BookingOption_ from 'src/core/booking-option';

export const schemaId = 'http://maasglobal.com/tsp/bookings-update/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId: Booking_.TspId;
    cost?: Booking_.Cost;
    state: 'RESERVED' | 'CONFIRMED' | 'ACTIVATED' | 'ON_HOLD' | 'EXPIRED' | 'CANCELLED';
    leg?: BookingOption_.LegDelta;
    meta?: Booking_.Meta;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    tspProduct?: BookingOption_.TspProduct;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      tspId: Booking_.TspId,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('CONFIRMED'),
        t.literal('ACTIVATED'),
        t.literal('ON_HOLD'),
        t.literal('EXPIRED'),
        t.literal('CANCELLED'),
      ]),
    }),
    t.partial({
      cost: Booking_.Cost,
      leg: BookingOption_.LegDelta,
      meta: Booking_.Meta,
      terms: Booking_.Terms,
      token: Booking_.Token,
      tspProduct: BookingOption_.TspProduct,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId: Booking_.TspId;
      cost?: Booking_.Cost;
      state: 'RESERVED' | 'CONFIRMED' | 'ACTIVATED' | 'ON_HOLD' | 'EXPIRED' | 'CANCELLED';
      leg?: BookingOption_.LegDelta;
      meta?: Booking_.Meta;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      tspProduct?: BookingOption_.TspProduct;
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
