import { exists, isObject } from './object';
import { ObjectKey } from './util/object-key';
import { orNull } from './util/or-null';
import { orDoesNotExist } from './util/or-does-not-exist';

export function propIsArray<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: unknown[] } {
  return exists(x, prop) && Array.isArray(x[prop]);
}

export const propIsArrayOrNull = orNull(propIsArray);
export const propIsArrayOrDoesNotExist = orDoesNotExist(propIsArray);

export function propIsArrayAndElementsPassCheck<K extends ObjectKey, T>(
  x: unknown,
  prop: K,
  check: (x: unknown) => T | null
): x is { [key in K]: T[] } {
  return !!(propIsArray(x, prop) && x[prop].every(check));
}

export const propIsArrayAndElementsPassCheckOrNull = orNull(propIsArrayAndElementsPassCheck);
export const propIsArrayAndElementsPassCheckOrDoesNotExist = orDoesNotExist(propIsArrayAndElementsPassCheck);

export function propIsArrayOfArrays<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: Array<unknown[]> } {
  return propIsArray(x, prop) && x[prop].every(e => Array.isArray(e));
}

export const propIsArrayOfArraysOrNull = orNull(propIsArrayOfArrays);
export const propIsArrayOfArraysOrDoesNotExist = orDoesNotExist(propIsArrayOfArrays);

export function propIsArrayOfBooleans<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: boolean[] } {
  return propIsArray(x, prop) && x[prop].every(e => typeof e === 'boolean');
}

export const propIsArrayOfBooleansOrNull = orNull(propIsArrayOfBooleans);
export const propIsArrayOfBooleansOrDoesNotExist = orDoesNotExist(propIsArrayOfBooleans);

export function propIsArrayOfNumbers<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: number[] } {
  return propIsArray(x, prop) && x[prop].every(e => typeof e === 'number');
}

export const propIsArrayOfNumbersOrNull = orNull(propIsArrayOfNumbers);
export const propIsArrayOfNumbersOrDoesNotExist = orDoesNotExist(propIsArrayOfNumbers);

export function propIsArrayOfObjects<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: object[] } {
  return propIsArray(x, prop) && x[prop].every(e => isObject(e));
}

export const propIsArrayOfObjectsOrNull = orNull(propIsArrayOfObjects);
export const propIsArrayOfObjectsOrDoesNotExist = orDoesNotExist(propIsArrayOfObjects);

export function propIsArrayOfStrings<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: string[] } {
  return propIsArray(x, prop) && x[prop].every(e => typeof e === 'string');
}

export const propIsArrayOfStringsOrNull = orNull(propIsArrayOfStrings);
export const propIsArrayOfStringsOrDoesNotExist = orDoesNotExist(propIsArrayOfStrings);