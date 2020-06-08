import { ObjectKey } from './object-key';

const log: string[] = [];

export function logError(message: string): void {
  log.push(message);
};

export function flushErrorLog(): string[] {
  return log.splice(0, log.length);
}

export function execIfErrorsPresent(callback: (logMessages: string[]) => void): void {
  if (log.length >= 1) {
    callback(flushErrorLog());
  }
}

// Forgive me

export function withErrorLogs<K extends ObjectKey, T>(
  checker: (x: unknown, prop: K) => x is { [key in K]: T }
): ((x: unknown, prop: K) => x is { [key in K]: T });

export function withErrorLogs<K extends ObjectKey, T>(
  checker: (x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T }
): ((x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T });

export function withErrorLogs<K extends ObjectKey, T>(
  checker: (x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | null }
): ((x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | null });

export function withErrorLogs<K extends ObjectKey, T>(
  checker: (x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | undefined }
): ((x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | undefined });

export function withErrorLogs<K extends ObjectKey, T, U>(
  checker: (x: unknown, prop: K, check: (x: unknown) => U | null) => x is { [key in K]: T }
): ((x: unknown, prop: K, check: (x: unknown) => U | null) => x is { [key in K]: T });

export function withErrorLogs<K extends ObjectKey, T, U>(checker: any): any {
  const wrappedChecker = (x: unknown, prop: K, checkOrLiterals?: ((x: unknown) => U | null) | readonly U[]): x is { [key in K]: T } => {
    const ok = checker(x, prop, checkOrLiterals);

    if (!ok) {
      logError(`Check ${checker.name} failed with key ${prop} and object ${JSON.stringify(x)}`);
    }

    return ok;
  };

  return wrappedChecker;
}