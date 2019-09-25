/*

undefined
MaaS state schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'units.json';

export const schemaId =
  'http://maasglobal.com/core/components/subscriptionChangeState.json';
// Default
// The purpose of this remains a mystery
export type Default = t.Branded<
  {
    id: Units_.Uuid;
    state: string & ('IN_PROGRESS' | 'COMPLETED' | 'FAILED');
    created?: Units_.Time;
    failureKey?: string & ('UNKNOWN_ERROR' | 'NOT_ELIGIBLE' | 'EXISTING_TICKET');
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      id: Units_.Uuid,
      state: t.intersection([
        t.string,
        t.union([t.literal('IN_PROGRESS'), t.literal('COMPLETED'), t.literal('FAILED')]),
      ]),
    }),
    t.partial({
      created: Units_.Time,
      failureKey: t.intersection([
        t.string,
        t.union([
          t.literal('UNKNOWN_ERROR'),
          t.literal('NOT_ELIGIBLE'),
          t.literal('EXISTING_TICKET'),
        ]),
      ]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id: Units_.Uuid;
      state: string & ('IN_PROGRESS' | 'COMPLETED' | 'FAILED');
      created?: Units_.Time;
      failureKey?: string & ('UNKNOWN_ERROR' | 'NOT_ELIGIBLE' | 'EXISTING_TICKET');
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
