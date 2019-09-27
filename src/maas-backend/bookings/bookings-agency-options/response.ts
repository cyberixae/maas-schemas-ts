/*

undefined
Response schema for bookings-agency-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as BikeStation_ from 'maas-schemas-ts/core/components/bike-station';

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-agency-options/response.json';
// Option
// The purpose of this remains a mystery
export type Option = t.Branded<
  {
    fares?: Booking_.Fares;
    cost?: Booking_.Cost;
    leg?: Booking_.Leg;
    meta?: Booking_.Meta;
    terms?: Booking_.Terms;
    tspProduct?: {
      id?: string;
    };
    configurator?: Booking_.Configurator;
  } & (
    | {
        leg: unknown;
        terms: unknown;
        product: unknown;
        fares: unknown;
      }
    | {
        leg: unknown;
        terms: unknown;
        product: unknown;
        configurator: unknown;
      }),
  OptionBrand
>;
export const Option = t.brand(
  t.intersection([
    t.partial({
      fares: Booking_.Fares,
      cost: Booking_.Cost,
      leg: Booking_.Leg,
      meta: Booking_.Meta,
      terms: Booking_.Terms,
      tspProduct: t.partial({
        id: t.string,
      }),
      configurator: Booking_.Configurator,
    }),
    t.union([
      t.type({
        leg: t.unknown,
        terms: t.unknown,
        product: t.unknown,
        fares: t.unknown,
      }),
      t.type({
        leg: t.unknown,
        terms: t.unknown,
        product: t.unknown,
        configurator: t.unknown,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      fares?: Booking_.Fares;
      cost?: Booking_.Cost;
      leg?: Booking_.Leg;
      meta?: Booking_.Meta;
      terms?: Booking_.Terms;
      tspProduct?: {
        id?: string;
      };
      configurator?: Booking_.Configurator;
    } & (
      | {
          leg: unknown;
          terms: unknown;
          product: unknown;
          fares: unknown;
        }
      | {
          leg: unknown;
          terms: unknown;
          product: unknown;
          configurator: unknown;
        }),
    OptionBrand
  > => true,
  'Option',
);
export interface OptionBrand {
  readonly Option: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    options?: Array<Option>;
    additional?: {
      bikeStations?: Array<BikeStation_.Default>;
    };
    debug?: {};
  } & {
    options: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      options: t.array(Option),
      additional: t.partial({
        bikeStations: t.array(BikeStation_.Default),
      }),
      debug: t.type({}),
    }),
    t.type({
      options: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<Option>;
      additional?: {
        bikeStations?: Array<BikeStation_.Default>;
      };
      debug?: {};
    } & {
      options: unknown;
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
