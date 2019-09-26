/*

undefined
Response schema for creating a booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'src/core/booking';
import * as State_ from 'src/core/components/state';
import * as BookingOption_ from 'src/core/booking-option';
import * as Configurator_ from 'src/core/components/configurator';
import * as CustomerSelection_ from 'src/core/components/customerSelection';

export const schemaId = 'http://maasglobal.com/tsp/bookings-create/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId: Booking_.TspId;
    state: State_.BookingState;
    cost?: Booking_.Cost;
    leg?: BookingOption_.Leg;
    meta: Booking_.Meta;
    terms: Booking_.Terms;
    token: Booking_.Token;
    tspProduct: BookingOption_.TspProduct;
    configurator?: Configurator_.Default;
    customerSelection?: CustomerSelection_.Default;
    customer?: BookingOption_.Customer;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      tspId: Booking_.TspId,
      state: State_.BookingState,
      meta: Booking_.Meta,
      terms: Booking_.Terms,
      token: Booking_.Token,
      tspProduct: BookingOption_.TspProduct,
    }),
    t.partial({
      cost: Booking_.Cost,
      leg: BookingOption_.Leg,
      configurator: Configurator_.Default,
      customerSelection: CustomerSelection_.Default,
      customer: BookingOption_.Customer,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId: Booking_.TspId;
      state: State_.BookingState;
      cost?: Booking_.Cost;
      leg?: BookingOption_.Leg;
      meta: Booking_.Meta;
      terms: Booking_.Terms;
      token: Booking_.Token;
      tspProduct: BookingOption_.TspProduct;
      configurator?: Configurator_.Default;
      customerSelection?: CustomerSelection_.Default;
      customer?: BookingOption_.Customer;
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
