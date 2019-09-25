/*

undefined
Request schema for profile-favoriteLocations-delete

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/profile/profile-favoriteLocations-delete/request.json';
// Default
// The purpose of this remains a mystery
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      name: string;
    };
    headers?: {
      Accept?: ApiCommon_.AcceptHeader;
      'X-Whim-User-Agent'?: ApiCommon_.UserAgentHeader;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    payload: t.type({
      name: t.string,
    }),
    headers: t.partial({
      Accept: ApiCommon_.AcceptHeader,
      'X-Whim-User-Agent': ApiCommon_.UserAgentHeader,
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        name: string;
      };
      headers?: {
        Accept?: ApiCommon_.AcceptHeader;
        'X-Whim-User-Agent'?: ApiCommon_.UserAgentHeader;
      };
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
