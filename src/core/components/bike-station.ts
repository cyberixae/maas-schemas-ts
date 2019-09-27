/*

undefined
MaaS bike station schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';

export const schemaId = 'http://maasglobal.com/core/components/bike-station.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: string;
    name?: string;
    location?: UnitsGeo_.Location;
    slots?: {
      total?: number;
      empty?: number;
      bikes?: number;
    } & {
      total: unknown;
      empty: unknown;
      bikes: unknown;
    };
  } & {
    id: unknown;
    name: unknown;
    location: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      location: UnitsGeo_.Location,
      slots: t.intersection([
        t.partial({
          total: t.number,
          empty: t.number,
          bikes: t.number,
        }),
        t.type({
          total: t.unknown,
          empty: t.unknown,
          bikes: t.unknown,
        }),
      ]),
    }),
    t.type({
      id: t.unknown,
      name: t.unknown,
      location: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      location?: UnitsGeo_.Location;
      slots?: {
        total?: number;
        empty?: number;
        bikes?: number;
      } & {
        total: unknown;
        empty: unknown;
        bikes: unknown;
      };
    } & {
      id: unknown;
      name: unknown;
      location: unknown;
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
