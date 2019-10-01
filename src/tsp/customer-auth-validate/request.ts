/*

undefined
Request schema for completing customer authorization for TSP

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';

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

export const schemaId = 'http://maasglobal.com/tsp/customer-auth-validate/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    encodedData?: Common_.EncodedQueryParam;
    error?: Common_.ErrorKey;
  } & {
    encodedData: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      encodedData: Common_.EncodedQueryParam,
      error: Common_.ErrorKey,
    }),
    t.type({
      encodedData: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      encodedData?: Common_.EncodedQueryParam;
      error?: Common_.ErrorKey;
    } & {
      encodedData: Defined;
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
