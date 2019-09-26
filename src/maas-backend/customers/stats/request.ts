/*

undefined
MaaS customer stats. Give lifetime stats of customer e.g total number of bookings and itineraries

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId = 'http://maasglobal.com/maas-backend/customers/stats/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId: Units_.IdentityId;
    customerId: Units_.IdentityId;
    headers: ApiCommon_.Headers;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.type({
    identityId: Units_.IdentityId,
    customerId: Units_.IdentityId,
    headers: ApiCommon_.Headers,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId: Units_.IdentityId;
      customerId: Units_.IdentityId;
      headers: ApiCommon_.Headers;
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
