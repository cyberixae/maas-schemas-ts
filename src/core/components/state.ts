/*

undefined
MaaS state schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/state.json';

// The life-cycle state of a booking
export type BookingState = t.Branded<string, BookingStateBrand>;
export const BookingState = t.brand(
  t.string,
  (x): x is t.Branded<string, BookingStateBrand> =>
    JSON.stringify(x) === JSON.stringify('START') ||
    JSON.stringify(x) === JSON.stringify('PENDING') ||
    JSON.stringify(x) === JSON.stringify('PAID') ||
    JSON.stringify(x) === JSON.stringify('RESERVED') ||
    JSON.stringify(x) === JSON.stringify('CONFIRMED') ||
    JSON.stringify(x) === JSON.stringify('ACTIVATED') ||
    JSON.stringify(x) === JSON.stringify('ON_HOLD') ||
    JSON.stringify(x) === JSON.stringify('CANCELLED') ||
    JSON.stringify(x) === JSON.stringify('EXPIRED') ||
    JSON.stringify(x) === JSON.stringify('REJECTED') ||
    JSON.stringify(x) === JSON.stringify('FINISHED') ||
    JSON.stringify(x) === JSON.stringify('UNKNOWN'),
  'BookingState',
);
export interface BookingStateBrand {
  readonly BookingState: unique symbol;
}

// The life-cycle state of a leg
export type LegState = t.Branded<string, LegStateBrand>;
export const LegState = t.brand(
  t.string,
  (x): x is t.Branded<string, LegStateBrand> =>
    JSON.stringify(x) === JSON.stringify('START') ||
    JSON.stringify(x) === JSON.stringify('PLANNED') ||
    JSON.stringify(x) === JSON.stringify('PAID') ||
    JSON.stringify(x) === JSON.stringify('ACTIVATED') ||
    JSON.stringify(x) === JSON.stringify('CANCELLED') ||
    JSON.stringify(x) === JSON.stringify('FINISHED'),
  'LegState',
);
export interface LegStateBrand {
  readonly LegState: unique symbol;
}

// The life-cycle state of an itinerary
export type ItineraryState = t.Branded<string, ItineraryStateBrand>;
export const ItineraryState = t.brand(
  t.string,
  (x): x is t.Branded<string, ItineraryStateBrand> =>
    JSON.stringify(x) === JSON.stringify('START') ||
    JSON.stringify(x) === JSON.stringify('PLANNED') ||
    JSON.stringify(x) === JSON.stringify('PAID') ||
    JSON.stringify(x) === JSON.stringify('ACTIVATED') ||
    JSON.stringify(x) === JSON.stringify('CANCELLED') ||
    JSON.stringify(x) === JSON.stringify('CANCELLED_WITH_ERRORS') ||
    JSON.stringify(x) === JSON.stringify('FINISHED'),
  'ItineraryState',
);
export interface ItineraryStateBrand {
  readonly ItineraryState: unique symbol;
}

// Success
