import { ObjectKey } from './util/object-key';
export declare function propIsArray<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: unknown[];
};
export declare const propIsArrayOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: unknown[] | null; };
export declare const propIsArrayOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: unknown[] | undefined; };
export declare function propIsArrayAndElementsPassCheck<K extends ObjectKey, T>(x: unknown, prop: K, check: (x: unknown) => T | null): x is {
    [key in K]: T[];
};
export declare const propIsArrayAndElementsPassCheckOrNull: <K extends ObjectKey, T>(x: unknown, prop: K, check: (x: unknown) => T | null) => x is { [key in K]: T[] | null; };
export declare const propIsArrayAndElementsPassCheckOrDoesNotExist: <K extends ObjectKey, T>(x: unknown, prop: K, check: (x: unknown) => T | null) => x is { [key in K]: T[] | undefined; };
export declare function propIsArrayOfArrays<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: Array<unknown[]>;
};
export declare const propIsArrayOfArraysOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: unknown[][] | null; };
export declare const propIsArrayOfArraysOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: unknown[][] | undefined; };
export declare function propIsArrayOfBooleans<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: boolean[];
};
export declare const propIsArrayOfBooleansOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: boolean[] | null; };
export declare const propIsArrayOfBooleansOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: boolean[] | undefined; };
export declare function propIsArrayOfNumbers<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: number[];
};
export declare const propIsArrayOfNumbersOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: number[] | null; };
export declare const propIsArrayOfNumbersOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: number[] | undefined; };
export declare function propIsArrayOfObjects<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: object[];
};
export declare const propIsArrayOfObjectsOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: object[] | null; };
export declare const propIsArrayOfObjectsOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: object[] | undefined; };
export declare function propIsArrayOfStrings<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: string[];
};
export declare const propIsArrayOfStringsOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: string[] | null; };
export declare const propIsArrayOfStringsOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: string[] | undefined; };
//# sourceMappingURL=array.d.ts.map