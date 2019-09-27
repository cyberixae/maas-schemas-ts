/*

undefined
Request schema for creating a booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as BookingOption_ from 'src/core/booking-option';
import * as Booking_ from 'src/core/booking';
import * as Customer_ from 'src/core/customer';
import * as Configurator_ from 'src/core/components/configurator';
import * as CustomerSelection_ from 'src/core/components/customerSelection';

export const schemaId = 'http://maasglobal.com/tsp/bookings-create/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    leg?: BookingOption_.Leg;
    meta?: Booking_.Meta;
    terms?: Booking_.Terms;
    customer?: Customer_.Default;
    tspProduct?: BookingOption_.TspProduct;
    configurator?: Configurator_.Default;
    customerSelection?: CustomerSelection_.Default;
  } & {
    leg: unknown;
    meta: unknown;
    terms: unknown;
    customer: unknown;
    tspProduct: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      leg: BookingOption_.Leg,
      meta: Booking_.Meta,
      terms: Booking_.Terms,
      customer: Customer_.Default,
      tspProduct: BookingOption_.TspProduct,
      configurator: Configurator_.Default,
      customerSelection: CustomerSelection_.Default,
    }),
    t.type({
      leg: t.unknown,
      meta: t.unknown,
      terms: t.unknown,
      customer: t.unknown,
      tspProduct: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      leg?: BookingOption_.Leg;
      meta?: Booking_.Meta;
      terms?: Booking_.Terms;
      customer?: Customer_.Default;
      tspProduct?: BookingOption_.TspProduct;
      configurator?: Configurator_.Default;
      customerSelection?: CustomerSelection_.Default;
    } & {
      leg: unknown;
      meta: unknown;
      terms: unknown;
      customer: unknown;
      tspProduct: unknown;
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
