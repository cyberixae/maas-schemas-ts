/*

undefined
Response schema for bookings-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-cancel/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    booking: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.type({
    booking: t.unknown,
  }),
  (
    x,
  ): x is t.Branded<
    {
      booking: unknown;
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
