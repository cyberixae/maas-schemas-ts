/*

undefined
Request schema for bookings-list

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-list/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId: Units_.IdentityId;
    payload?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      states?: string;
      modes?: string;
    };
    headers?: ApiCommon_.Headers;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      identityId: Units_.IdentityId,
    }),
    t.partial({
      payload: t.partial({
        startTime: Units_.Time,
        endTime: Units_.Time,
        states: t.string,
        modes: t.string,
      }),
      headers: ApiCommon_.Headers,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId: Units_.IdentityId;
      payload?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
        states?: string;
        modes?: string;
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
