import { exists } from "./object";
import { ObjectKey } from "./util/object-key";
import { orNull } from './util/or-null';
import { orDoesNotExist } from "./util/or-does-not-exist";

export function propIsString<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: string } {
  return exists(x, prop) && typeof x[prop] === 'string';
}

export const propIsStringOrNull = orNull(propIsString);
export const propIsStringOrDoesNotExist = orDoesNotExist(propIsString);

export function propIsNonemptyString<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: string } {
  return propIsString(x, prop) && x[prop].length >= 1;
}

export const propIsNonemptyStringOrNull = orNull(propIsNonemptyString);
export const propIsNonemptyStringOrDoesNotExist = orDoesNotExist(propIsNonemptyString);

export function propIsOneOfStrings<K extends ObjectKey, T>(
  x: unknown,
  prop: K,
  strings: readonly T[]
): x is { [key in K]: T } {
  return propIsString(x, prop) && strings.includes(x[prop] as unknown as T);
}

export const propIsOneOfStringsOrNull = orNull(propIsOneOfStrings);
export const propIsOneOfStringsOrDoesNotExist = orDoesNotExist(propIsOneOfStrings);