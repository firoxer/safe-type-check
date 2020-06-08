import { ObjectKey } from "./util/object-key";
export declare function propIsString<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: string;
};
export declare const propIsStringOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: string | null; };
export declare const propIsStringOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: string | undefined; };
export declare function propIsNonemptyString<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: string;
};
export declare const propIsNonemptyStringOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: string | null; };
export declare const propIsNonemptyStringOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: string | undefined; };
export declare function propIsOneOfStrings<K extends ObjectKey, T>(x: unknown, prop: K, strings: readonly T[]): x is {
    [key in K]: T;
};
export declare const propIsOneOfStringsOrNull: <K extends ObjectKey, T>(x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | null; };
export declare const propIsOneOfStringsOrDoesNotExist: <K extends ObjectKey, T>(x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | undefined; };
//# sourceMappingURL=string.d.ts.map