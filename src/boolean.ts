import { exists } from "./object";
import { ObjectKey } from "./util/object-key";
import { orNull } from "./util/or-null";
import { orDoesNotExist } from "./util/or-does-not-exist";

export function propIsBoolean<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: boolean } {
  return exists(x, prop) && typeof x[prop] === 'boolean';
}

export const propIsBooleanOrNull = orNull(propIsBoolean);
export const propIsBooleanOrDoesNotExist = orDoesNotExist(propIsBoolean);

export function propIsTrue<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: true } {
  return propIsBoolean(x, prop) && x[prop] === true;
}

export const propIsTrueOrNull = orNull(propIsTrue);
export const propIsTrueOrDoesNotExist = orDoesNotExist(propIsTrue);

export function propIsFalse<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: false } {
  return propIsBoolean(x, prop) && x[prop] === false;
}

export const propIsFalseOrNull = orNull(propIsFalse);
export const propIsFalseOrDoesNotExist = orDoesNotExist(propIsFalse);