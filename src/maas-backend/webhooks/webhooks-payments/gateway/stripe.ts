/*

undefined
Stripe payment webhook schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/stripe.json';
// Request
// The purpose of this remains a mystery
export type Request = t.Branded<
  {
    payload: {
      id: string;
      type: string;
      data: {
        object?: {
          id?: string;
          amount?: number;
          amount_capturable?: number;
          amount_received?: number;
          charges?: {
            data?: Array<{
              id?: string;
              object?: string;
              amount?: number;
              amount_refunded?: number;
            }>;
          };
        };
      };
    };
    params: {
      gatewayName: string & ('stripe');
    };
  },
  RequestBrand
>;
export const Request = t.brand(
  t.type({
    payload: t.type({
      id: t.string,
      type: t.string,
      data: t.partial({
        object: t.partial({
          id: t.string,
          amount: t.number,
          amount_capturable: t.number,
          amount_received: t.number,
          charges: t.partial({
            data: t.array(
              t.partial({
                id: t.string,
                object: t.string,
                amount: t.number,
                amount_refunded: t.number,
              }),
            ),
          }),
        }),
      }),
    }),
    params: t.type({
      gatewayName: t.intersection([t.string, t.union([t.literal('stripe')])]),
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      payload: {
        id: string;
        type: string;
        data: {
          object?: {
            id?: string;
            amount?: number;
            amount_capturable?: number;
            amount_received?: number;
            charges?: {
              data?: Array<{
                id?: string;
                object?: string;
                amount?: number;
                amount_refunded?: number;
              }>;
            };
          };
        };
      };
      params: {
        gatewayName: string & ('stripe');
      };
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
