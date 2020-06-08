import { ObjectKey } from './object-key';
import { exists } from '../object';

// Forgive me

export function orDoesNotExist<K extends ObjectKey, T>(
  checker: (x: unknown, prop: K) => x is { [key in K]: T }
): ((x: unknown, prop: K) => x is { [key in K]: T | undefined });

export function orDoesNotExist<K extends ObjectKey, T, U>(
  checker: (x: unknown, prop: K, literals: readonly U[]) => x is { [key in K]: T }
): ((x: unknown, prop: K, literals: readonly U[]) => x is { [key in K]: T | undefined });

export function orDoesNotExist<K extends ObjectKey, T, U>(
  checker: (x: unknown, prop: K, check: (x: unknown) => U | null) => x is { [key in K]: T }
): ((x: unknown, prop: K, check: (x: unknown) => U | null) => x is { [key in K]: T | undefined });

export function orDoesNotExist<K extends ObjectKey, T, U>(checker: any): any {
  return (x: unknown, prop: K, checkOrLiterals?: U[] | ((x: unknown) => U | null)): x is { [key in K]: T | undefined } => {
    return !exists(x, prop) || checker(x, prop, checkOrLiterals);
  };
}
