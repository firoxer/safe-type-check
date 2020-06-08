"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const src_1 = require("../src");
src_1.log.isString({ x: 1 }, 'x');
assert_1.default.deepStrictEqual(src_1.log.flush(), ['Check propIsString failed with key x and object {"x":1}']);
assert_1.default.deepStrictEqual(src_1.log.flush(), []);
src_1.log.isString({ x: 1 }, 'x');
src_1.log.isNumber({ y: 'abc' }, 'y');
assert_1.default.deepStrictEqual(src_1.log.flush(), [
    'Check propIsString failed with key x and object {"x":1}',
    'Check propIsNumber failed with key y and object {"y":"abc"}'
]);
assert_1.default.deepStrictEqual(src_1.log.flush(), []);
src_1.log.isString({ x: 1 }, 'x');
assert_1.default.throws(() => src_1.log.execIfErrorsPresent((errors) => {
    throw new Error(errors[0]);
}));
src_1.log.isString({ x: "abc" }, 'x');
assert_1.default.doesNotThrow(() => src_1.log.execIfErrorsPresent((errors) => {
    throw new Error(errors[0]);
}));
//# sourceMappingURL=test-error-logging.js.map