/*

undefined
Response schema for routes providers, subset of routes-query response schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'src/core/components/units-geo';
import * as Itinerary_ from 'src/core/itinerary';

export const schemaId =
  'http://maasglobal.com/maas-backend/provider/routes/response.json';
// Itineraries
// The purpose of this remains a mystery
export type Itineraries = t.Branded<Array<Itinerary_.Default>, ItinerariesBrand>;
export const Itineraries = t.brand(
  t.array(Itinerary_.Default),
  (x): x is t.Branded<Array<Itinerary_.Default>, ItinerariesBrand> => true,
  'Itineraries',
);
export interface ItinerariesBrand {
  readonly Itineraries: unique symbol;
}
// Plan1
// The purpose of this remains a mystery
export type Plan1 = t.Branded<
  {
    from?: UnitsGeo_.Place;
    outwards?: Itineraries;
    returns?: Itineraries;
  } & {
    from: unknown;
    outwards: unknown;
    returns: unknown;
  },
  Plan1Brand
>;
export const Plan1 = t.brand(
  t.intersection([
    t.partial({
      from: UnitsGeo_.Place,
      outwards: Itineraries,
      returns: Itineraries,
    }),
    t.type({
      from: t.unknown,
      outwards: t.unknown,
      returns: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      from?: UnitsGeo_.Place;
      outwards?: Itineraries;
      returns?: Itineraries;
    } & {
      from: unknown;
      outwards: unknown;
      returns: unknown;
    },
    Plan1Brand
  > => true,
  'Plan1',
);
export interface Plan1Brand {
  readonly Plan1: unique symbol;
}
// Plan2
// The purpose of this remains a mystery
export type Plan2 = t.Branded<
  {
    from?: UnitsGeo_.Place;
    itineraries?: Itineraries;
  } & {
    from: unknown;
    itineraries: unknown;
  },
  Plan2Brand
>;
export const Plan2 = t.brand(
  t.intersection([
    t.partial({
      from: UnitsGeo_.Place,
      itineraries: Itineraries,
    }),
    t.type({
      from: t.unknown,
      itineraries: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      from?: UnitsGeo_.Place;
      itineraries?: Itineraries;
    } & {
      from: unknown;
      itineraries: unknown;
    },
    Plan2Brand
  > => true,
  'Plan2',
);
export interface Plan2Brand {
  readonly Plan2: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    plan?: Plan1 | Plan2;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    plan: t.union([Plan1, Plan2]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      plan?: Plan1 | Plan2;
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
