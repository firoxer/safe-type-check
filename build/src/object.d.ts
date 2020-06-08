import { ObjectKey } from "./util/object-key";
export declare function isObject(x: unknown): x is {};
export declare function exists<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: unknown;
};
export declare function propPassesCheck<K extends ObjectKey, T>(x: unknown, prop: K, check: (x: unknown) => T | null): x is {
    [key in K]: T;
};
export declare const propPassesCheckOrIsNull: <K extends ObjectKey, T>(x: unknown, prop: K, check: (x: unknown) => T | null) => x is { [key in K]: T | null; };
export declare const propPassesCheckOrDoesNotExist: <K extends ObjectKey, T>(x: unknown, prop: K, check: (x: unknown) => T | null) => x is { [key in K]: T | undefined; };
export declare function propIsObject<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: {};
};
export declare const propIsObjectOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: {} | null; };
export declare const propIsObjectOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: {} | undefined; };
export declare function propIsNonemptyObject<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: {};
};
export declare const propIsNonemptyObjectOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: {} | null; };
export declare const propIsNonemptyObjectOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: {} | undefined; };
//# sourceMappingURL=object.d.ts.map