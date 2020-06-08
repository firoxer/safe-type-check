import { exists } from "./object";
import { ObjectKey } from "./util/object-key";
import { orNull } from "./util/or-null";
import { orDoesNotExist } from "./util/or-does-not-exist";

export function propIsNumber<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: number } {
  return exists(x, prop) && typeof x[prop] === 'number';
}

export const propIsNumberOrNull = orNull(propIsNumber);
export const propIsNumberOrDoesNotExist = orDoesNotExist(propIsNumber);

export function propIsPositiveNumber<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: number } {
  return propIsNumber(x, prop) && x[prop] > 0;
}

export const propIsPositiveNumberOrNull = orNull(propIsPositiveNumber);
export const propIsPositiveNumberOrDoesNotExist = orDoesNotExist(propIsPositiveNumber);

export function propIsOneOfNumbers<K extends ObjectKey, T>(
  x: unknown,
  prop: K,
  numbers: readonly T[]
): x is { [key in K]: T } {
  return propIsNumber(x, prop) && numbers.includes(x[prop] as unknown as T);
}

export const propIsOneOfNumbersOrNull = orNull(propIsOneOfNumbers);
export const propIsOneOfNumbersOrDoesNotExist = orDoesNotExist(propIsOneOfNumbers);