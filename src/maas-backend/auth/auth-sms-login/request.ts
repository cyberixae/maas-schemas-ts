/*

undefined
Request schema for auth-sms-login

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'src/core/components/common';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/auth/auth-sms-login/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    payload?: {
      phone?: Common_.RawPhone;
      code?: string;
    } & {
      phone: unknown;
      code: unknown;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          phone: Common_.RawPhone,
          code: t.string,
        }),
        t.type({
          phone: t.unknown,
          code: t.unknown,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        phone?: Common_.RawPhone;
        code?: string;
      } & {
        phone: unknown;
        code: unknown;
      };
      headers?: ApiCommon_.Headers;
    } & {
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
