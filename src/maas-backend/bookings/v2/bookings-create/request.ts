/*

undefined
Request schema for bookings-create v2

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Response_ from 'maas-schemas-ts/maas-backend/bookings/bookings-agency-options/response';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/v2/bookings-create/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      paymentSourceId?: Common_.PaymentSourceId;
      booking?: Response_.Option;
      customerSelection?: CustomerSelection_.Default;
    } & {
      paymentSourceId:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId:
      | Record<string, unknown>
      | Array<unknown>
      | string
      | boolean
      | number
      | null;
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
          paymentSourceId: Common_.PaymentSourceId,
          booking: Response_.Option,
          customerSelection: CustomerSelection_.Default,
        }),
        t.type({
          paymentSourceId: t.union([
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
      identityId: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
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
        paymentSourceId?: Common_.PaymentSourceId;
        booking?: Response_.Option;
        customerSelection?: CustomerSelection_.Default;
      } & {
        paymentSourceId:
          | Record<string, unknown>
          | Array<unknown>
          | string
          | boolean
          | number
          | null;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
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
