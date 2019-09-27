/*

undefined
Request schema for routes query

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'src/core/components/units-geo';
import * as Address_ from 'src/core/components/address';
import * as Station_ from 'src/core/components/station';
import * as Units_ from 'src/core/components/units';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/routes/routes-query/request.json';
// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  ({
    from?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromStationId?: Station_.Id;
    to?: UnitsGeo_.ShortLocationString;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toStationId?: Station_.Id;
    leaveAt?: Units_.Time;
    arriveBy?: Units_.Time;
    leaveAtReturn?: Units_.Time;
    arriveByReturn?: Units_.Time;
    modes?: string &
      ('PUBLIC_TRANSIT' | 'TAXI' | 'CAR' | 'WALK' | 'BICYCLE' | 'BICYCLE_RENT');
    transitMode?: string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL');
    options?: {};
    bookingIdToExtend?: Units_.Uuid;
  } & Record<string, string | number | boolean>) & {
    from: unknown;
    to: unknown;
  },
  PayloadBrand
>;
export const Payload = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        from: UnitsGeo_.ShortLocationString,
        fromName: Address_.PlaceName,
        fromAddress: Address_.ComponentAddress,
        fromStationId: Station_.Id,
        to: UnitsGeo_.ShortLocationString,
        toName: Address_.PlaceName,
        toAddress: Address_.ComponentAddress,
        toStationId: Station_.Id,
        leaveAt: Units_.Time,
        arriveBy: Units_.Time,
        leaveAtReturn: Units_.Time,
        arriveByReturn: Units_.Time,
        modes: t.intersection([
          t.string,
          t.union([
            t.literal('PUBLIC_TRANSIT'),
            t.literal('TAXI'),
            t.literal('CAR'),
            t.literal('WALK'),
            t.literal('BICYCLE'),
            t.literal('BICYCLE_RENT'),
          ]),
        ]),
        transitMode: t.intersection([
          t.string,
          t.union([
            t.literal('TRAIN'),
            t.literal('BUS'),
            t.literal('SUBWAY'),
            t.literal('TRAM'),
            t.literal('RAIL'),
          ]),
        ]),
        options: t.type({}),
        bookingIdToExtend: Units_.Uuid,
      }),
      t.record(t.string, t.union([t.string, t.number, t.boolean])),
    ]),
    t.type({
      from: t.unknown,
      to: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      from?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromStationId?: Station_.Id;
      to?: UnitsGeo_.ShortLocationString;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toStationId?: Station_.Id;
      leaveAt?: Units_.Time;
      arriveBy?: Units_.Time;
      leaveAtReturn?: Units_.Time;
      arriveByReturn?: Units_.Time;
      modes?: string &
        ('PUBLIC_TRANSIT' | 'TAXI' | 'CAR' | 'WALK' | 'BICYCLE' | 'BICYCLE_RENT');
      transitMode?: string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL');
      options?: {};
      bookingIdToExtend?: Units_.Uuid;
    } & Record<string, string | number | boolean>) & {
      from: unknown;
      to: unknown;
    },
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: unknown;
    payload: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: t.unknown,
      payload: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: unknown;
      payload: unknown;
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
