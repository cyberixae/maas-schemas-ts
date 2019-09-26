/*

undefined
Response schema for bookings-update

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'src/core/booking';

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-update/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    booking: Booking_.Default;
    debug?: {};
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      booking: Booking_.Default,
    }),
    t.partial({
      debug: t.type({}),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      booking: Booking_.Default;
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
