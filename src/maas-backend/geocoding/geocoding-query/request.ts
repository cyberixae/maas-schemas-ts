/*

undefined
MaaS geocoding query request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as I18n_ from 'maas-schemas-ts/core/components/i18n';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/geocoding/geocoding-query/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      name?: string;
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
      count?: number;
      distance?: UnitsGeo_.Distance;
      locale?: I18n_.Locale;
    } & {
      name: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      lat: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      lon: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          name: t.string,
          lat: UnitsGeo_.RelaxedLatitude,
          lon: UnitsGeo_.RelaxedLongitude,
          count: t.number,
          distance: UnitsGeo_.Distance,
          locale: I18n_.Locale,
        }),
        t.type({
          name: t.union([
            t.UnknownRecord,
            t.UnknownArray,
            t.string,
            t.boolean,
            t.number,
            t.null,
          ]),
          lat: t.union([
            t.UnknownRecord,
            t.UnknownArray,
            t.string,
            t.boolean,
            t.number,
            t.null,
          ]),
          lon: t.union([
            t.UnknownRecord,
            t.UnknownArray,
            t.string,
            t.boolean,
            t.number,
            t.null,
          ]),
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: t.union([
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
      identityId?: Units_.IdentityId;
      payload?: {
        name?: string;
        lat?: UnitsGeo_.RelaxedLatitude;
        lon?: UnitsGeo_.RelaxedLongitude;
        count?: number;
        distance?: UnitsGeo_.Distance;
        locale?: I18n_.Locale;
      } & {
        name: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
        lat: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
        lon: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      };
      headers?: ApiCommon_.Headers;
    } & {
      payload:
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
