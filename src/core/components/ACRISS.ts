/*

undefined
ACRISS classification of the car, see https://en.wikipedia.org/wiki/ACRISS_Car_Classification_Code

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/ACRISS.json';

export type Default = t.Branded<string, DefaultBrand>;
export const Default = t.brand(
  t.string,
  (x): x is t.Branded<string, DefaultBrand> =>
    typeof x !== 'string' ||
    x.match(
      '[MNEHCDIJSRFGPULWOX][BCDWVLSTFJXPQZEMRHYNGK][MNCABD][RNDQHIECLSABMFVZUX]',
    ) !== null,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
