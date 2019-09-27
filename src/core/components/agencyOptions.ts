/*

undefined
Options that can be used for available booking options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as TravelMode_ from 'src/core/components/travel-mode';
import * as Common_ from 'src/core/components/common';
import * as Units_ from 'src/core/components/units';
import * as UnitsGeo_ from 'src/core/components/units-geo';
import * as Address_ from 'src/core/components/address';

export const schemaId = 'http://maasglobal.com/core/components/agencyOptions.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    mode?: TravelMode_.Default;
    agencyId?: Common_.AgencyId;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.ShortLocationString;
    to?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromRadius?: UnitsGeo_.Distance;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toRadius?: UnitsGeo_.Distance;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    mode: TravelMode_.Default,
    agencyId: Common_.AgencyId,
    startTime: Units_.Time,
    endTime: Units_.Time,
    from: UnitsGeo_.ShortLocationString,
    to: UnitsGeo_.ShortLocationString,
    fromName: Address_.PlaceName,
    fromAddress: Address_.ComponentAddress,
    fromRadius: UnitsGeo_.Distance,
    toName: Address_.PlaceName,
    toAddress: Address_.ComponentAddress,
    toRadius: UnitsGeo_.Distance,
  }),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_.Default;
      agencyId?: Common_.AgencyId;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.ShortLocationString;
      to?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromRadius?: UnitsGeo_.Distance;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toRadius?: UnitsGeo_.Distance;
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
