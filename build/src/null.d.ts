import { ObjectKey } from "./util/object-key";
export declare function propIsNull<K extends ObjectKey>(x: unknown, prop: K): x is {
    [key in K]: null;
};
export declare const propIsNullOrDoesNotExist: <K extends ObjectKey>(x: unknown, prop: K) => x is { [key in K]: null | undefined; };
//# sourceMappingURL=null.d.ts.map