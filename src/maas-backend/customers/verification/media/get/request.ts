/*

undefined
MaaS customer verification media get

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/verification/media/get/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customerId?: Units_.IdentityId;
    identityId?: Units_.IdentityId;
    payload?: {
      side?: string;
      type?: string;
    } & {
      type: Defined;
      side: Defined;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    customerId: Units_.IdentityId,
    identityId: Units_.IdentityId,
    payload: t.intersection([
      t.partial({
        side: t.string,
        type: t.string,
      }),
      t.type({
        type: Defined,
        side: Defined,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      identityId?: Units_.IdentityId;
      payload?: {
        side?: string;
        type?: string;
      } & {
        type: Defined;
        side: Defined;
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
