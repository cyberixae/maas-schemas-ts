/*

undefined
MaaS information about an authorization required to use a particular TSP

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from './common';
import * as Units_ from './units';

export const schemaId = 'http://maasglobal.com/core/components/authorization.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    agencyId: Common_.AgencyId;
    state: string & ('VALID' | 'INVALID');
    validTo: Units_.Time;
    created: Units_.Time;
    modified?: Units_.Time;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      agencyId: Common_.AgencyId,
      state: t.intersection([
        t.string,
        t.union([t.literal('VALID'), t.literal('INVALID')]),
      ]),
      validTo: Units_.Time,
      created: Units_.Time,
    }),
    t.partial({
      modified: Units_.Time,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId: Common_.AgencyId;
      state: string & ('VALID' | 'INVALID');
      validTo: Units_.Time;
      created: Units_.Time;
      modified?: Units_.Time;
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
