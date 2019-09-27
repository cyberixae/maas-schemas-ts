/*

undefined
Response schema for tsp-auth init

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';

export const schemaId = 'http://maasglobal.com/maas-backend/tsp-auth/init/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    authUrl?: Units_.Url;
  } & {
    authUrl: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      authUrl: Units_.Url,
    }),
    t.type({
      authUrl: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      authUrl?: Units_.Url;
    } & {
      authUrl: unknown;
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
