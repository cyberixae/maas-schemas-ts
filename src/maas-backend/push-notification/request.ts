/*

undefined
MaaS push notification request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';

export const schemaId =
  'http://maasglobal.com/maas-backend/push-notification/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    title?: string;
    message?: string;
    badge?: number;
    sound?: string;
    severity?: 'Alert' | 'Warning' | 'Information';
    type?: 'ObjectChange' | 'TripActivate' | 'InfoMessage';
    data?:
      | ({
          objectType?: 'Itinerary' | 'Booking';
          ids?: Array<Units_.Uuid>;
        } & {
          objectType: unknown;
          ids: unknown;
        })
      | null
      | ({
          objectType?: 'Profile' | 'Subscription';
          ids?: Array<Units_.IdentityId>;
        } & {
          objectType: unknown;
          ids: unknown;
        });
  } & {
    identityId: unknown;
    severity: unknown;
    badge: unknown;
    type: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      title: t.string,
      message: t.string,
      badge: t.number,
      sound: t.string,
      severity: t.union([
        t.literal('Alert'),
        t.literal('Warning'),
        t.literal('Information'),
      ]),
      type: t.union([
        t.literal('ObjectChange'),
        t.literal('TripActivate'),
        t.literal('InfoMessage'),
      ]),
      data: t.union([
        t.intersection([
          t.partial({
            objectType: t.union([t.literal('Itinerary'), t.literal('Booking')]),
            ids: t.array(Units_.Uuid),
          }),
          t.type({
            objectType: t.unknown,
            ids: t.unknown,
          }),
        ]),
        t.null,
        t.intersection([
          t.partial({
            objectType: t.union([t.literal('Profile'), t.literal('Subscription')]),
            ids: t.array(Units_.IdentityId),
          }),
          t.type({
            objectType: t.unknown,
            ids: t.unknown,
          }),
        ]),
      ]),
    }),
    t.type({
      identityId: t.unknown,
      severity: t.unknown,
      badge: t.unknown,
      type: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      title?: string;
      message?: string;
      badge?: number;
      sound?: string;
      severity?: 'Alert' | 'Warning' | 'Information';
      type?: 'ObjectChange' | 'TripActivate' | 'InfoMessage';
      data?:
        | ({
            objectType?: 'Itinerary' | 'Booking';
            ids?: Array<Units_.Uuid>;
          } & {
            objectType: unknown;
            ids: unknown;
          })
        | null
        | ({
            objectType?: 'Profile' | 'Subscription';
            ids?: Array<Units_.IdentityId>;
          } & {
            objectType: unknown;
            ids: unknown;
          });
    } & {
      identityId: unknown;
      severity: unknown;
      badge: unknown;
      type: unknown;
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
