/*

MaaS internationalization schemas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/i18n.json';

export type Locale = t.Branded<string, LocaleBrand>
export const Locale = t.brand(t.string, (x): x is t.Branded<string, LocaleBrand> => x === x && (x.match(/^[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?$/) !== null), 'Locale')
interface LocaleBrand {
  readonly Locale: unique symbol
}
