/*

undefined
Request schema for regions-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as Common_ from 'src/core/components/common';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/stations/stations-retrieve/request.json';
// Default
// The purpose of this remains a mystery
export type Default = t.Branded<
  {
    identityId: Units_.IdentityId;
    payload: {
      agencyId?: Common_.AgencyId;
      stationId?: string;
    };
    headers?: ApiCommon_.Headers;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      identityId: Units_.IdentityId,
      payload: t.partial({
        agencyId: Common_.AgencyId,
        stationId: t.string,
      }),
    }),
    t.partial({
      headers: ApiCommon_.Headers,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId: Units_.IdentityId;
      payload: {
        agencyId?: Common_.AgencyId;
        stationId?: string;
      };
      headers?: ApiCommon_.Headers;
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
