/*

undefined
undefined

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_SHARED_BICYCLE.json';

export type Default = t.Branded<
  {
    bike?: {
      id: string;
      type?: string;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    bike: t.intersection([
      t.type({
        id: t.string,
      }),
      t.partial({
        type: t.string,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      bike?: {
        id: string;
        type?: string;
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
