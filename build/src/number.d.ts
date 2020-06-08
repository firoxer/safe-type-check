import { ObjectKey } from "./util/object-key";
export declare function propIsNumber<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: number;
};
export declare const propIsNumberOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: number | null; };
export declare const propIsNumberOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: number | undefined; };
export declare function propIsPositiveNumber<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: number;
};
export declare const propIsPositiveNumberOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: number | null; };
export declare const propIsPositiveNumberOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: number | undefined; };
export declare function propIsOneOfNumbers<K extends ObjectKey, T>(x: unknown, prop: K, numbers: readonly T[]): x is {
    [key in K]: T;
};
export declare const propIsOneOfNumbersOrNull: <K extends ObjectKey, T>(x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | null; };
export declare const propIsOneOfNumbersOrDoesNotExist: <K extends ObjectKey, T>(x: unknown, prop: K, literals: readonly T[]) => x is { [key in K]: T | undefined; };
//# sourceMappingURL=number.d.ts.map