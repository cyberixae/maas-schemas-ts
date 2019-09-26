/*

undefined
MaaS user profiles as returned by our API

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as PointCost_ from './components/point-cost';
import * as Units_ from './components/units';
import * as Common_ from './components/common';
import * as Address_ from './components/address';
import * as Region_ from './region';
import * as UnitsGeo_ from './components/units-geo';
import * as Fare_ from './components/fare';

export const schemaId = 'http://maasglobal.com/core/profile.json';
// SubscriptionInstance
// The purpose of this remains a mystery
export type SubscriptionInstance = t.Branded<
  {
    id?: number;
    name?: string;
    plan: {
      id: string;
    };
    addons: Array<string>;
    coupons: Array<string>;
    wmpGrant?: number;
    level?: number;
    active?: boolean;
    pointCost: PointCost_.Default;
    description?: string;
    availability?: number;
  },
  SubscriptionInstanceBrand
>;
export const SubscriptionInstance = t.brand(
  t.intersection([
    t.type({
      plan: t.type({
        id: t.string,
      }),
      addons: t.array(t.string),
      coupons: t.array(t.string),
      pointCost: PointCost_.Default,
    }),
    t.partial({
      id: t.number,
      name: t.string,
      wmpGrant: t.number,
      level: t.number,
      active: t.boolean,
      description: t.string,
      availability: t.number,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: number;
      name?: string;
      plan: {
        id: string;
      };
      addons: Array<string>;
      coupons: Array<string>;
      wmpGrant?: number;
      level?: number;
      active?: boolean;
      pointCost: PointCost_.Default;
      description?: string;
      availability?: number;
    },
    SubscriptionInstanceBrand
  > => true,
  'SubscriptionInstance',
);
export interface SubscriptionInstanceBrand {
  readonly SubscriptionInstance: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    id?: number;
    identityId: Units_.IdentityId;
    phone: Common_.Phone;
    email?: Common_.Email;
    firstName?: Common_.PersonalName;
    lastName?: Common_.PersonalName;
    city?: Address_.City;
    country?: Address_.Country;
    zipCode?: Address_.ZipCode;
    regionId?: string;
    region?: Region_.Default;
    profileImageUrl?: string;
    favoriteLocations: Array<UnitsGeo_.Place>;
    paymentMethod: {
      type: string & ('unknown' | 'card' | 'stripe');
      valid: boolean;
      maskedNumber?: string;
      issuer?: string;
      expiry?: Units_.Time;
    };
    subscription?: {};
    subscriptionInstance: SubscriptionInstance;
    balance: number;
    balances: Array<Fare_.Default>;
    created?: Units_.Time;
    modified?: Units_.Time;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.type({
      identityId: Units_.IdentityId,
      phone: Common_.Phone,
      favoriteLocations: t.array(UnitsGeo_.Place),
      paymentMethod: t.intersection([
        t.type({
          type: t.intersection([
            t.string,
            t.union([t.literal('unknown'), t.literal('card'), t.literal('stripe')]),
          ]),
          valid: t.boolean,
        }),
        t.partial({
          maskedNumber: t.string,
          issuer: t.string,
          expiry: Units_.Time,
        }),
      ]),
      subscriptionInstance: SubscriptionInstance,
      balance: t.number,
      balances: t.array(Fare_.Default),
    }),
    t.partial({
      id: t.number,
      email: Common_.Email,
      firstName: Common_.PersonalName,
      lastName: Common_.PersonalName,
      city: Address_.City,
      country: Address_.Country,
      zipCode: Address_.ZipCode,
      regionId: t.string,
      region: Region_.Default,
      profileImageUrl: t.string,
      subscription: t.type({}),
      created: Units_.Time,
      modified: Units_.Time,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: number;
      identityId: Units_.IdentityId;
      phone: Common_.Phone;
      email?: Common_.Email;
      firstName?: Common_.PersonalName;
      lastName?: Common_.PersonalName;
      city?: Address_.City;
      country?: Address_.Country;
      zipCode?: Address_.ZipCode;
      regionId?: string;
      region?: Region_.Default;
      profileImageUrl?: string;
      favoriteLocations: Array<UnitsGeo_.Place>;
      paymentMethod: {
        type: string & ('unknown' | 'card' | 'stripe');
        valid: boolean;
        maskedNumber?: string;
        issuer?: string;
        expiry?: Units_.Time;
      };
      subscription?: {};
      subscriptionInstance: SubscriptionInstance;
      balance: number;
      balances: Array<Fare_.Default>;
      created?: Units_.Time;
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
