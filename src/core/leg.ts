/*

undefined
The base leg object with all fields, to be inherited

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';
import * as Common_ from './components/common';
import * as State_ from './components/state';
import * as UnitsGeo_ from './components/units-geo';
import * as TravelMode_ from './components/travel-mode';
import * as Stop_ from './stop';

export const schemaId = 'http://maasglobal.com/core/leg.json';
// LegExtensions
// MaaS specific leg extensions
export type LegExtensions = t.Branded<
  {
    id?: Units_.Uuid;
    signature?: Common_.Signature;
  },
  LegExtensionsBrand
>;
export const LegExtensions = t.brand(
  t.partial({
    id: Units_.Uuid,
    signature: Common_.Signature,
  }),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      signature?: Common_.Signature;
    },
    LegExtensionsBrand
  > => true,
  'LegExtensions',
);
export interface LegExtensionsBrand {
  readonly LegExtensions: unique symbol;
}
// PartialLegCore
// The purpose of this remains a mystery
export type PartialLegCore = t.Branded<
  {
    state?: State_.LegState;
    from?: UnitsGeo_.Place;
    to?: UnitsGeo_.Place;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    mode?:
      | TravelMode_.PersonalMode
      | TravelMode_.PublicTransitMode
      | TravelMode_.PrivateTransitMode;
    stops?: Array<Stop_.Default>;
    departureDelay?: Units_.Duration;
    arrivalDelay?: Units_.Duration;
    distance?: UnitsGeo_.Distance;
    route?: string;
    routeShortName?: string;
    routeLongName?: string;
    agencyId?: Common_.AgencyId;
    legGeometry?: {
      points?: UnitsGeo_.Polyline;
    };
    productOption?: number;
  },
  PartialLegCoreBrand
>;
export const PartialLegCore = t.brand(
  t.partial({
    state: State_.LegState,
    from: UnitsGeo_.Place,
    to: UnitsGeo_.Place,
    startTime: Units_.Time,
    endTime: Units_.Time,
    mode: t.union([
      TravelMode_.PersonalMode,
      TravelMode_.PublicTransitMode,
      TravelMode_.PrivateTransitMode,
    ]),
    stops: t.array(Stop_.Default),
    departureDelay: Units_.Duration,
    arrivalDelay: Units_.Duration,
    distance: UnitsGeo_.Distance,
    route: t.string,
    routeShortName: t.string,
    routeLongName: t.string,
    agencyId: Common_.AgencyId,
    legGeometry: t.partial({
      points: UnitsGeo_.Polyline,
    }),
    productOption: t.number,
  }),
  (
    x,
  ): x is t.Branded<
    {
      state?: State_.LegState;
      from?: UnitsGeo_.Place;
      to?: UnitsGeo_.Place;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      mode?:
        | TravelMode_.PersonalMode
        | TravelMode_.PublicTransitMode
        | TravelMode_.PrivateTransitMode;
      stops?: Array<Stop_.Default>;
      departureDelay?: Units_.Duration;
      arrivalDelay?: Units_.Duration;
      distance?: UnitsGeo_.Distance;
      route?: string;
      routeShortName?: string;
      routeLongName?: string;
      agencyId?: Common_.AgencyId;
      legGeometry?: {
        points?: UnitsGeo_.Polyline;
      };
      productOption?: number;
    },
    PartialLegCoreBrand
  > => true,
  'PartialLegCore',
);
export interface PartialLegCoreBrand {
  readonly PartialLegCore: unique symbol;
}
// LegCore
// The purpose of this remains a mystery
export type LegCore = t.Branded<PartialLegCore & unknown, LegCoreBrand>;
export const LegCore = t.brand(
  t.intersection([PartialLegCore, t.unknown]),
  (x): x is t.Branded<PartialLegCore & unknown, LegCoreBrand> => true,
  'LegCore',
);
export interface LegCoreBrand {
  readonly LegCore: unique symbol;
}
// WaitingLeg
// The purpose of this remains a mystery
export type WaitingLeg = t.Branded<
  {
    startTime: Units_.Time;
    endTime: Units_.Time;
    mode: TravelMode_.WaitingMode;
  },
  WaitingLegBrand
>;
export const WaitingLeg = t.brand(
  t.type({
    startTime: Units_.Time,
    endTime: Units_.Time,
    mode: TravelMode_.WaitingMode,
  }),
  (
    x,
  ): x is t.Branded<
    {
      startTime: Units_.Time;
      endTime: Units_.Time;
      mode: TravelMode_.WaitingMode;
    },
    WaitingLegBrand
  > => true,
  'WaitingLeg',
);
export interface WaitingLegBrand {
  readonly WaitingLeg: unique symbol;
}
// TransferLeg
// The purpose of this remains a mystery
export type TransferLeg = t.Branded<
  {
    startTime: Units_.Time;
    endTime: Units_.Time;
    mode: TravelMode_.TransferMode;
  },
  TransferLegBrand
>;
export const TransferLeg = t.brand(
  t.type({
    startTime: Units_.Time,
    endTime: Units_.Time,
    mode: TravelMode_.TransferMode,
  }),
  (
    x,
  ): x is t.Branded<
    {
      startTime: Units_.Time;
      endTime: Units_.Time;
      mode: TravelMode_.TransferMode;
    },
    TransferLegBrand
  > => true,
  'TransferLeg',
);
export interface TransferLegBrand {
  readonly TransferLeg: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {} & (LegExtensions & (LegCore | WaitingLeg | TransferLeg)),
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({}),
    t.intersection([LegExtensions, t.union([LegCore, WaitingLeg, TransferLeg])]),
  ]),
  (
    x,
  ): x is t.Branded<
    {} & (LegExtensions & (LegCore | WaitingLeg | TransferLeg)),
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
