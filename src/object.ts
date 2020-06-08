import { ObjectKey } from "./util/object-key";
import { orDoesNotExist } from "./util/or-does-not-exist";
import { orNull } from "./util/or-null";

export function isObject(x: unknown): x is {} {
  return x !== null && typeof x === 'object';
}

export function exists<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: unknown } {
  return isObject(x) && prop in x;
}

export function propPassesCheck<K extends ObjectKey, T>(
  x: unknown,
  prop: K,
  check: (x: unknown) => T | null
): x is { [key in K]: T } {
  return !!(exists(x, prop) && check(x[prop]));
}

export const propPassesCheckOrIsNull = orNull(propPassesCheck);
export const propPassesCheckOrDoesNotExist = orDoesNotExist(propPassesCheck);

export function propIsObject<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: {} } {
  return exists(x, prop) && x[prop] !== null && typeof x[prop] === 'object';
}

export const propIsObjectOrNull = orNull(propIsObject);
export const propIsObjectOrDoesNotExist = orDoesNotExist(propIsObject);

export function propIsNonemptyObject<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: {} } {
  return propIsObject(x, prop) && Object.keys(x[prop]).length >= 1;
}


export const propIsNonemptyObjectOrNull = orNull(propIsNonemptyObject);
export const propIsNonemptyObjectOrDoesNotExist = orDoesNotExist(propIsNonemptyObject);