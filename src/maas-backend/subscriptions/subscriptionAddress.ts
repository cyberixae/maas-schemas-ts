/*

undefined
MaaS subscription address schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Address_ from 'src/core/components/address';

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptionAddress.json';
// SubscriptionAddress
// The purpose of this remains a mystery
export type SubscriptionAddress = t.Branded<
  {
    firstName?: Address_.FirstName;
    lastName?: Address_.LastName;
    city?: Address_.City;
    zipCode: Address_.ZipCode;
    country: Address_.Country;
    phone?: Address_.Phone;
    email?: Address_.Email;
  },
  SubscriptionAddressBrand
>;
export const SubscriptionAddress = t.brand(
  t.intersection([
    t.type({
      zipCode: Address_.ZipCode,
      country: Address_.Country,
    }),
    t.partial({
      firstName: Address_.FirstName,
      lastName: Address_.LastName,
      city: Address_.City,
      phone: Address_.Phone,
      email: Address_.Email,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      firstName?: Address_.FirstName;
      lastName?: Address_.LastName;
      city?: Address_.City;
      zipCode: Address_.ZipCode;
      country: Address_.Country;
      phone?: Address_.Phone;
      email?: Address_.Email;
    },
    SubscriptionAddressBrand
  > => true,
  'SubscriptionAddress',
);
export interface SubscriptionAddressBrand {
  readonly SubscriptionAddress: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
