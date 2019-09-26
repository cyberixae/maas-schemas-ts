/*

undefined
MaaS InvoiceLineItem schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Invoice_ from './invoice';
import * as Units_ from 'src/core/components/units';
import * as Fare_ from 'src/core/components/fare';

export const schemaId =
  'http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json';
// InvoiceLineItemId
// The purpose of this remains a mystery
export type InvoiceLineItemId = t.Branded<string, InvoiceLineItemIdBrand>;
export const InvoiceLineItemId = t.brand(
  t.string,
  (x): x is t.Branded<string, InvoiceLineItemIdBrand> =>
    typeof x !== 'string' || x.length >= 2,
  'InvoiceLineItemId',
);
export interface InvoiceLineItemIdBrand {
  readonly InvoiceLineItemId: unique symbol;
}
// InvoiceLineItem
// Invoice line item
export type InvoiceLineItem = t.Branded<
  {
    id: InvoiceLineItemId;
    gatewayId: string;
    invoiceId?: Invoice_.InvoiceId;
    type: string & ('authorization' | 'capture' | 'charge' | 'refund');
    paymentSourceId?: string;
    date?: Units_.Time;
    description: string;
    amount: number;
    currency: Units_.Currency;
    referenceInvoiceLineItemId?: InvoiceLineItemId;
    tokenId?: Fare_.TokenId;
    token?: {};
  },
  InvoiceLineItemBrand
>;
export const InvoiceLineItem = t.brand(
  t.intersection([
    t.type({
      id: InvoiceLineItemId,
      gatewayId: t.string,
      type: t.intersection([
        t.string,
        t.union([
          t.literal('authorization'),
          t.literal('capture'),
          t.literal('charge'),
          t.literal('refund'),
        ]),
      ]),
      description: t.string,
      amount: t.number,
      currency: Units_.Currency,
    }),
    t.partial({
      invoiceId: Invoice_.InvoiceId,
      paymentSourceId: t.string,
      date: Units_.Time,
      referenceInvoiceLineItemId: InvoiceLineItemId,
      tokenId: Fare_.TokenId,
      token: t.type({}),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id: InvoiceLineItemId;
      gatewayId: string;
      invoiceId?: Invoice_.InvoiceId;
      type: string & ('authorization' | 'capture' | 'charge' | 'refund');
      paymentSourceId?: string;
      date?: Units_.Time;
      description: string;
      amount: number;
      currency: Units_.Currency;
      referenceInvoiceLineItemId?: InvoiceLineItemId;
      tokenId?: Fare_.TokenId;
      token?: {};
    },
    InvoiceLineItemBrand
  > => true,
  'InvoiceLineItem',
);
export interface InvoiceLineItemBrand {
  readonly InvoiceLineItem: unique symbol;
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
