/*

undefined
Request schema for creating a booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as Customer_ from 'maas-schemas-ts/core/customer';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';

export const schemaId = 'http://maasglobal.com/tsp/bookings-create/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    leg?: BookingOption_.Leg;
    meta?: BookingMeta_.Default;
    terms?: Booking_.Terms;
    customer?: Customer_.Default;
    tspProduct?: BookingOption_.TspProduct;
    configurator?: Configurator_.Default;
    customerSelection?: CustomerSelection_.Default;
  } & {
    leg: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    meta: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    terms: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    customer: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    tspProduct:
      | Record<string, unknown>
      | Array<unknown>
      | string
      | boolean
      | number
      | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      leg: BookingOption_.Leg,
      meta: BookingMeta_.Default,
      terms: Booking_.Terms,
      customer: Customer_.Default,
      tspProduct: BookingOption_.TspProduct,
      configurator: Configurator_.Default,
      customerSelection: CustomerSelection_.Default,
    }),
    t.type({
      leg: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      meta: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      terms: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      customer: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      tspProduct: t.union([
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
    {
      leg?: BookingOption_.Leg;
      meta?: BookingMeta_.Default;
      terms?: Booking_.Terms;
      customer?: Customer_.Default;
      tspProduct?: BookingOption_.TspProduct;
      configurator?: Configurator_.Default;
      customerSelection?: CustomerSelection_.Default;
    } & {
      leg: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      meta: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      terms: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      customer:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
      tspProduct:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
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
