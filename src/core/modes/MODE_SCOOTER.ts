/*

undefined
undefined

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_SCOOTER.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    scooter?: {
      id?: string;
    } & {
      id: unknown;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    scooter: t.intersection([
      t.partial({
        id: t.string,
      }),
      t.type({
        id: t.unknown,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      scooter?: {
        id?: string;
      } & {
        id: unknown;
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
