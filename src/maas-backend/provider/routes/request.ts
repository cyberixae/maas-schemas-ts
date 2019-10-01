/*

undefined
Request schema for routes providers

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Address_ from 'maas-schemas-ts/core/components/address';
import * as Station_ from 'maas-schemas-ts/core/components/station';
import * as TravelMode_ from 'maas-schemas-ts/core/components/travel-mode';

export const schemaId = 'http://maasglobal.com/maas-backend/provider/routes/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  ({
    identityId?: Units_.IdentityId;
    from?: UnitsGeo_.ShortLocation;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromStationId?: Station_.Id;
    to?: UnitsGeo_.ShortLocation;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toStationId?: Station_.Id;
    leaveAt?: Units_.Time;
    arriveBy?: Units_.Time;
    modes?: TravelMode_.Default;
  } & Record<
    string,
    | Units_.IdentityId
    | UnitsGeo_.ShortLocation
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | UnitsGeo_.ShortLocation
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | Units_.Time
    | Units_.Time
    | TravelMode_.Default
    | (string | number | boolean)
  >) & {
    from: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    to: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        identityId: Units_.IdentityId,
        from: UnitsGeo_.ShortLocation,
        fromName: Address_.PlaceName,
        fromAddress: Address_.ComponentAddress,
        fromStationId: Station_.Id,
        to: UnitsGeo_.ShortLocation,
        toName: Address_.PlaceName,
        toAddress: Address_.ComponentAddress,
        toStationId: Station_.Id,
        leaveAt: Units_.Time,
        arriveBy: Units_.Time,
        modes: TravelMode_.Default,
      }),
      t.record(
        t.string,
        t.union([
          Units_.IdentityId,
          UnitsGeo_.ShortLocation,
          Address_.PlaceName,
          Address_.ComponentAddress,
          Station_.Id,
          UnitsGeo_.ShortLocation,
          Address_.PlaceName,
          Address_.ComponentAddress,
          Station_.Id,
          Units_.Time,
          Units_.Time,
          TravelMode_.Default,
          t.union([t.string, t.number, t.boolean]),
        ]),
      ),
    ]),
    t.type({
      from: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      to: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      identityId?: Units_.IdentityId;
      from?: UnitsGeo_.ShortLocation;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromStationId?: Station_.Id;
      to?: UnitsGeo_.ShortLocation;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toStationId?: Station_.Id;
      leaveAt?: Units_.Time;
      arriveBy?: Units_.Time;
      modes?: TravelMode_.Default;
    } & Record<
      string,
      | Units_.IdentityId
      | UnitsGeo_.ShortLocation
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | UnitsGeo_.ShortLocation
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | Units_.Time
      | Units_.Time
      | TravelMode_.Default
      | (string | number | boolean)
    >) & {
      from: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      to: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
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
