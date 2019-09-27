/*

undefined
Avainpay payment webhook schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/avainpay.json';
// Request
// The purpose of this remains a mystery
export type Request = t.Branded<
  {
    payload?: {
      action_str?: string;
      data_type?: string;
      log_list?: Array<unknown>;
      trans_map?: {
        system_time?: number;
        nonce?: string;
        signature?: string;
      };
      request_map?: {};
    } & {
      action_str: unknown;
      data_type: unknown;
    };
    headers?: {
      'Set-Cookie'?: string;
    };
    params?: {
      gatewayName?: string & 'avainpay';
    } & {
      gatewayName: unknown;
    };
  } & {
    params: unknown;
    payload: unknown;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          action_str: t.string,
          data_type: t.string,
          log_list: t.UnknownArray,
          trans_map: t.partial({
            system_time: t.number,
            nonce: t.string,
            signature: t.string,
          }),
          request_map: t.type({}),
        }),
        t.type({
          action_str: t.unknown,
          data_type: t.unknown,
        }),
      ]),
      headers: t.partial({
        'Set-Cookie': t.string,
      }),
      params: t.intersection([
        t.partial({
          gatewayName: t.intersection([t.string, t.literal('avainpay')]),
        }),
        t.type({
          gatewayName: t.unknown,
        }),
      ]),
    }),
    t.type({
      params: t.unknown,
      payload: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        action_str?: string;
        data_type?: string;
        log_list?: Array<unknown>;
        trans_map?: {
          system_time?: number;
          nonce?: string;
          signature?: string;
        };
        request_map?: {};
      } & {
        action_str: unknown;
        data_type: unknown;
      };
      headers?: {
        'Set-Cookie'?: string;
      };
      params?: {
        gatewayName?: string & 'avainpay';
      } & {
        gatewayName: unknown;
      };
    } & {
      params: unknown;
      payload: unknown;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
