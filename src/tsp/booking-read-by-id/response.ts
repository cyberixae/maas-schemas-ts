/*

undefined
Response schema for getting a specific booking with a TSP ID from a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/tsp/bookings-read-by-id/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId: unknown;
    state: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.type({
    tspId: t.unknown,
    state: t.unknown,
  }),
  (
    x,
  ): x is t.Branded<
    {
      tspId: unknown;
      state: unknown;
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
