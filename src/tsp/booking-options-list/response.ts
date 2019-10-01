/*

undefined
Response schema for getting options from a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BikeStation_ from 'maas-schemas-ts/core/components/bike-station';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/tsp/bookings-options-list/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    options?: Array<BookingOption_.Default>;
    additional?: {
      bikeStations?: Array<BikeStation_.Default>;
    };
  } & {
    options: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      options: t.array(BookingOption_.Default),
      additional: t.partial({
        bikeStations: t.array(BikeStation_.Default),
      }),
    }),
    t.type({
      options: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<BookingOption_.Default>;
      additional?: {
        bikeStations?: Array<BikeStation_.Default>;
      };
    } & {
      options: Defined;
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
