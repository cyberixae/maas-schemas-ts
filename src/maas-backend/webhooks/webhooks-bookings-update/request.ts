/*

undefined
MaaS webhook to update bookings for tsp adapter callback request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as RemoteRequest_ from 'src/tsp/webhooks-bookings-update/remote-request';

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-bookings-update/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    agencyId?: string;
    payload?: RemoteRequest_.Default;
  } & {
    agencyId: unknown;
    payload: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      agencyId: t.string,
      payload: RemoteRequest_.Default,
    }),
    t.type({
      agencyId: t.unknown,
      payload: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: string;
      payload?: RemoteRequest_.Default;
    } & {
      agencyId: unknown;
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
