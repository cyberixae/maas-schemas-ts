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
// The purpose of this remains a mystery
export type Default = t.Branded<
  {
    agencyId: string;
    payload: RemoteRequest_.Default;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.type({
    agencyId: t.string,
    payload: RemoteRequest_.Default,
  }),
  (
    x,
  ): x is t.Branded<
    {
      agencyId: string;
      payload: RemoteRequest_.Default;
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
