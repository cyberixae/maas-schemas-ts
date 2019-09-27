/*

undefined
MaaS stations query response schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Station_ from 'src/core/components/station';

export const schemaId = 'http://maasglobal.com/tsp/stations-list/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    stations?: Array<
      {
        id?: Station_.Id;
        code?: Station_.Code;
        name?: Station_.Name;
        location?: Station_.Location;
        agencyId?: Station_.AgencyId;
        services?: Station_.Services;
        address?: Station_.Address;
        city?: Station_.City;
        country?: Station_.Country;
        zone?: Station_.Zone;
        platformCode?: Station_.PlatformCode;
      } & {
        id: unknown;
        location: unknown;
        agencyId: unknown;
        services: unknown;
      }
    >;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    stations: t.array(
      t.intersection([
        t.partial({
          id: Station_.Id,
          code: Station_.Code,
          name: Station_.Name,
          location: Station_.Location,
          agencyId: Station_.AgencyId,
          services: Station_.Services,
          address: Station_.Address,
          city: Station_.City,
          country: Station_.Country,
          zone: Station_.Zone,
          platformCode: Station_.PlatformCode,
        }),
        t.type({
          id: t.unknown,
          location: t.unknown,
          agencyId: t.unknown,
          services: t.unknown,
        }),
      ]),
    ),
  }),
  (
    x,
  ): x is t.Branded<
    {
      stations?: Array<
        {
          id?: Station_.Id;
          code?: Station_.Code;
          name?: Station_.Name;
          location?: Station_.Location;
          agencyId?: Station_.AgencyId;
          services?: Station_.Services;
          address?: Station_.Address;
          city?: Station_.City;
          country?: Station_.Country;
          zone?: Station_.Zone;
          platformCode?: Station_.PlatformCode;
        } & {
          id: unknown;
          location: unknown;
          agencyId: unknown;
          services: unknown;
        }
      >;
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
