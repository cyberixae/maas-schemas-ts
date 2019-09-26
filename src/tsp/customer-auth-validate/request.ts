/*

undefined
Request schema for completing customer authorization for TSP

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'src/core/components/common';

export const schemaId = 'http://maasglobal.com/tsp/customer-auth-validate/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    encodedData: Common_.EncodedQueryParam;
    error?: Common_.ErrorKey;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      encodedData: Common_.EncodedQueryParam,
    }),
    t.partial({
      error: Common_.ErrorKey,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      encodedData: Common_.EncodedQueryParam;
      error?: Common_.ErrorKey;
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
