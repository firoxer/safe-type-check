import { ObjectKey } from './object-key';
export declare function orDoesNotExist<K extends ObjectKey, T>(checker: (x: unknown, prop: K) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K) => x is {
    [key in K]: T | undefined;
});
export declare function orDoesNotExist<K extends ObjectKey, T, U>(checker: (x: unknown, prop: K, literals: readonly U[]) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K, literals: readonly U[]) => x is {
    [key in K]: T | undefined;
});
export declare function orDoesNotExist<K extends ObjectKey, T, U>(checker: (x: unknown, prop: K, check: (x: unknown) => U | null) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K, check: (x: unknown) => U | null) => x is {
    [key in K]: T | undefined;
});
//# sourceMappingURL=or-does-not-exist.d.ts.map