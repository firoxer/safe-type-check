import { ObjectKey } from './object-key';
export declare function logError(message: string): void;
export declare function flushErrorLog(): string[];
export declare function execIfErrorsPresent(callback: (logMessages: string[]) => void): void;
export declare function withErrorLogs<K extends ObjectKey, T>(checker: (x: unknown, prop: K) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K) => x is {
    [key in K]: T;
});
export declare function withErrorLogs<K extends ObjectKey, T>(checker: (x: unknown, prop: K, literals: readonly T[]) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K, literals: readonly T[]) => x is {
    [key in K]: T;
});
export declare function withErrorLogs<K extends ObjectKey, T>(checker: (x: unknown, prop: K, literals: readonly T[]) => x is {
    [key in K]: T | null;
}): ((x: unknown, prop: K, literals: readonly T[]) => x is {
    [key in K]: T | null;
});
export declare function withErrorLogs<K extends ObjectKey, T>(checker: (x: unknown, prop: K, literals: readonly T[]) => x is {
    [key in K]: T | undefined;
}): ((x: unknown, prop: K, literals: readonly T[]) => x is {
    [key in K]: T | undefined;
});
export declare function withErrorLogs<K extends ObjectKey, T, U>(checker: (x: unknown, prop: K, check: (x: unknown) => U | null) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K, check: (x: unknown) => U | null) => x is {
    [key in K]: T;
});
//# sourceMappingURL=error-log.d.ts.map