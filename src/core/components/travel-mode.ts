/*

Transfer modes used for MaaS internal services

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/travel-mode.json';

// A mode that only involves waiting in the current location
export type WaitingMode = t.Branded<string, WaitingModeBrand>
export const WaitingMode = t.brand(t.string, (x): x is t.Branded<string, WaitingModeBrand> => x === x, 'WaitingMode')
interface WaitingModeBrand {
  readonly WaitingMode: unique symbol
}

// A mode that involves changing transports
export type TransferMode = t.Branded<string, TransferModeBrand>
export const TransferMode = t.brand(t.string, (x): x is t.Branded<string, TransferModeBrand> => x === x, 'TransferMode')
interface TransferModeBrand {
  readonly TransferMode: unique symbol
}

// A mode that involves using your personal vehicle or legs
export type PersonalMode = t.Branded<string, PersonalModeBrand>
export const PersonalMode = t.brand(t.string, (x): x is t.Branded<string, PersonalModeBrand> => x === x, 'PersonalMode')
interface PersonalModeBrand {
  readonly PersonalMode: unique symbol
}

// A mode that involves transit with fixed schedules
export type PublicTransitMode = t.Branded<string, PublicTransitModeBrand>
export const PublicTransitMode = t.brand(t.string, (x): x is t.Branded<string, PublicTransitModeBrand> => x === x, 'PublicTransitMode')
interface PublicTransitModeBrand {
  readonly PublicTransitMode: unique symbol
}

// A mode that is available on-demand for your personal use
export type PrivateTransitMode = t.Branded<string, PrivateTransitModeBrand>
export const PrivateTransitMode = t.brand(t.string, (x): x is t.Branded<string, PrivateTransitModeBrand> => x === x, 'PrivateTransitMode')
interface PrivateTransitModeBrand {
  readonly PrivateTransitMode: unique symbol
}
