/*

undefined
Request vehicle to alert itself to users

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/tsp/vehicle-alert/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<{}, DefaultBrand>;
export const Default = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
