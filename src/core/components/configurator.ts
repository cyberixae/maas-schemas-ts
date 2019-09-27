/*

undefined
Configurator schema to customize a booking option

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Cost_ from 'src/core/components/cost';
import * as Fare_ from 'src/core/components/fare';
import * as Terms_ from 'src/core/components/terms';

export const schemaId = 'http://maasglobal.com/core/components/configurator.json';
// Choice
// A choice for one customization
export type Choice = t.Branded<
  {
    id?: string;
    name?: string;
    description?: string;
    default?: true;
    cost?: Cost_.Default;
    fares?: Array<Fare_.Default>;
    terms?: Terms_.Default;
    meta?: {};
  } & {
    id: unknown;
    name: unknown;
    default: unknown;
  },
  ChoiceBrand
>;
export const Choice = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      description: t.string,
      default: t.literal(true),
      cost: Cost_.Default,
      fares: t.array(Fare_.Default),
      terms: Terms_.Default,
      meta: t.type({}),
    }),
    t.type({
      id: t.unknown,
      name: t.unknown,
      default: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      description?: string;
      default?: true;
      cost?: Cost_.Default;
      fares?: Array<Fare_.Default>;
      terms?: Terms_.Default;
      meta?: {};
    } & {
      id: unknown;
      name: unknown;
      default: unknown;
    },
    ChoiceBrand
  > => true,
  'Choice',
);
export interface ChoiceBrand {
  readonly Choice: unique symbol;
}
// Config
// A customization to the booking option
export type Config = t.Branded<
  {
    type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
    name?: string;
    description?: string;
    choices?: Array<Choice>;
  } & {
    type: unknown;
    name: unknown;
    choices: unknown;
  },
  ConfigBrand
>;
export const Config = t.brand(
  t.intersection([
    t.partial({
      type: t.union([
        t.literal('oneOf'),
        t.literal('someOf'),
        t.literal('allOf'),
        t.literal('oneOrNoneOf'),
        t.literal('someOrNoneOf'),
      ]),
      name: t.string,
      description: t.string,
      choices: t.array(Choice),
    }),
    t.type({
      type: t.unknown,
      name: t.unknown,
      choices: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
      name?: string;
      description?: string;
      choices?: Array<Choice>;
    } & {
      type: unknown;
      name: unknown;
      choices: unknown;
    },
    ConfigBrand
  > => true,
  'Config',
);
export interface ConfigBrand {
  readonly Config: unique symbol;
}
// Text
// Generic text field to pass information from user
export type Text = t.Branded<
  {
    type?: 'text';
    name?: string;
    description?: string;
    input?: string;
  } & {
    type: unknown;
    name: unknown;
  },
  TextBrand
>;
export const Text = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('text'),
      name: t.string,
      description: t.string,
      input: t.string,
    }),
    t.type({
      type: t.unknown,
      name: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'text';
      name?: string;
      description?: string;
      input?: string;
    } & {
      type: unknown;
      name: unknown;
    },
    TextBrand
  > => true,
  'Text',
);
export interface TextBrand {
  readonly Text: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    seatDirection?: Config;
    seatPosition?: Config;
    seatType?: Config;
    seatFeatures?: Config;
    outboundSingle?: Config;
    inboundSingle?: Config;
    openReturn?: Config;
    freeReturn?: Config;
    ticketCollectionPoint?: Text;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    seatDirection: Config,
    seatPosition: Config,
    seatType: Config,
    seatFeatures: Config,
    outboundSingle: Config,
    inboundSingle: Config,
    openReturn: Config,
    freeReturn: Config,
    ticketCollectionPoint: Text,
  }),
  (
    x,
  ): x is t.Branded<
    {
      seatDirection?: Config;
      seatPosition?: Config;
      seatType?: Config;
      seatFeatures?: Config;
      outboundSingle?: Config;
      inboundSingle?: Config;
      openReturn?: Config;
      freeReturn?: Config;
      ticketCollectionPoint?: Text;
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
