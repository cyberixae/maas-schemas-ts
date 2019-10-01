/*

undefined
Product in core which encapsulates at least an id, name and a tspProductId

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';

export const schemaId = 'http://maasglobal.com/core/product.json';
// Id
// The purpose of this remains a mystery
export type Id = t.Branded<string, IdBrand>;
export const Id = t.brand(
  t.string,
  (x): x is t.Branded<string, IdBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 255),
  'Id',
);
export interface IdBrand {
  readonly Id: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: Id;
    name?: string;
    description?: string;
    icon?: string;
    priority?: number;
    agencyId?: Common_.AgencyId;
    tspProductId?: string;
  } & {
    id: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    tspProductId:
      | Record<string, unknown>
      | Array<unknown>
      | string
      | boolean
      | number
      | null;
    name: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      id: Id,
      name: t.string,
      description: t.string,
      icon: t.string,
      priority: t.number,
      agencyId: Common_.AgencyId,
      tspProductId: t.string,
    }),
    t.type({
      id: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      tspProductId: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      name: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Id;
      name?: string;
      description?: string;
      icon?: string;
      priority?: number;
      agencyId?: Common_.AgencyId;
      tspProductId?: string;
    } & {
      id: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      tspProductId:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
      name: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
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
