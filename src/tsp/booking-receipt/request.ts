/*

undefined
Request schema for getting a receipt for a specific booking

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'src/core/booking';

export const schemaId = 'http://maasglobal.com/tsp/bookings-receipt/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId: Booking_.TspId;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.type({
    tspId: Booking_.TspId,
  }),
  (
    x,
  ): x is t.Branded<
    {
      tspId: Booking_.TspId;
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
