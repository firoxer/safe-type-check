import { exists } from "./object";
import { ObjectKey } from "./util/object-key";
import { orDoesNotExist } from "./util/or-does-not-exist";

export function propIsNull<K extends ObjectKey>(
  x: unknown,
  prop: K
): x is { [key in K]: null } {
  return exists(x, prop) && x[prop] === null;
}

export const propIsNullOrDoesNotExist = orDoesNotExist(propIsNull);