/*

undefined
OpenTripPlanner itinerary, augmented with leg bookings per leg

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as Units_ from './components/units';
import * as t from 'io-ts';
import * as Common_ from './components/common';
import * as State_ from './components/state';
import * as Fare_ from './components/fare';
import * as Leg_ from './leg';
import * as Booking_ from 'src/core/booking';

export const schemaId = 'http://maasglobal.com/core/itinerary.json';
// Id
// The purpose of this remains a mystery
export type Id = Units_.Uuid;
export const Id = Units_.Uuid;
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: Id;
    sourcePlanId?: Units_.Uuid;
    isOvertaken?: boolean;
    identityId?: Units_.IdentityId;
    signature?: Common_.Signature;
    state?: State_.ItineraryState;
    startTime: Units_.Time;
    endTime: Units_.Time;
    co2?: number;
    fares?: Array<Fare_.Default>;
    legs: Array<Leg_.Default>;
    type?: 'outward' | 'return';
    bookings?: Array<Booking_.Default>;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      startTime: Units_.Time,
      endTime: Units_.Time,
      legs: t.array(Leg_.Default),
    }),
    t.partial({
      id: Id,
      sourcePlanId: Units_.Uuid,
      isOvertaken: t.boolean,
      identityId: Units_.IdentityId,
      signature: Common_.Signature,
      state: State_.ItineraryState,
      co2: t.number,
      fares: t.array(Fare_.Default),
      type: t.union([t.literal('outward'), t.literal('return')]),
      bookings: t.array(Booking_.Default),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Id;
      sourcePlanId?: Units_.Uuid;
      isOvertaken?: boolean;
      identityId?: Units_.IdentityId;
      signature?: Common_.Signature;
      state?: State_.ItineraryState;
      startTime: Units_.Time;
      endTime: Units_.Time;
      co2?: number;
      fares?: Array<Fare_.Default>;
      legs: Array<Leg_.Default>;
      type?: 'outward' | 'return';
      bookings?: Array<Booking_.Default>;
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
