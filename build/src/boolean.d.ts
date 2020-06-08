import { ObjectKey } from "./util/object-key";
export declare function propIsBoolean<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: boolean;
};
export declare const propIsBooleanOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: boolean | null; };
export declare const propIsBooleanOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: boolean | undefined; };
export declare function propIsTrue<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: true;
};
export declare const propIsTrueOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: true | null; };
export declare const propIsTrueOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: true | undefined; };
export declare function propIsFalse<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: false;
};
export declare const propIsFalseOrNull: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: false | null; };
export declare const propIsFalseOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: false | undefined; };
//# sourceMappingURL=boolean.d.ts.map