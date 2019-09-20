/*

undefined
undefined

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as BikeStation_ from 'src/core/components/bike-station';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_BICYCLE.json';

export type Default = t.Branded<
  {
    pickupStation?: BikeStation_.Default;
    returnStation?: BikeStation_.Default;
    pickupStationId?: string;
    returnStationId?: string;
    bike?: {
      id: string;
      type?: string;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    pickupStation: BikeStation_.Default,
    returnStation: BikeStation_.Default,
    pickupStationId: t.string,
    returnStationId: t.string,
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
      pickupStation?: BikeStation_.Default;
      returnStation?: BikeStation_.Default;
      pickupStationId?: string;
      returnStationId?: string;
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
