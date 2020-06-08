import { ObjectKey } from './object-key';
export declare function orNull<K extends ObjectKey, T>(checker: (x: unknown, prop: K) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K) => x is {
    [key in K]: T | null;
});
export declare function orNull<K extends ObjectKey, T, U>(checker: (x: unknown, prop: K, literals: readonly U[]) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K, literals: readonly U[]) => x is {
    [key in K]: T | null;
});
export declare function orNull<K extends ObjectKey, T, U>(checker: (x: unknown, prop: K, check: (x: unknown) => U | null) => x is {
    [key in K]: T;
}): ((x: unknown, prop: K, check: (x: unknown) => U | null) => x is {
    [key in K]: T | null;
});
//# sourceMappingURL=or-null.d.ts.map