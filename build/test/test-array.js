"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const array_1 = require("../src/array");
assert_1.default.ok(array_1.propIsArray({ x: [1, 2, 3] }, 'x'));
assert_1.default.equal(array_1.propIsArray({ x: 'a' }, 'x'), false);
const checkNumber = (x) => typeof x === 'number' ? x : null;
assert_1.default.ok(array_1.propIsArrayAndElementsPassCheck({ x: [1, 2, 3] }, 'x', checkNumber));
assert_1.default.equal(array_1.propIsArrayAndElementsPassCheck({ x: ['a', 'b', 'c'] }, 'x', checkNumber), false);
assert_1.default.ok(array_1.propIsArrayOfArrays({ x: [['a', 'b'], ['c', 'd']] }, 'x'));
assert_1.default.equal(array_1.propIsArrayOfArrays({ x: [1, 2] }, 'x'), false);
assert_1.default.ok(array_1.propIsArrayOfBooleans({ x: [true, false] }, 'x'));
assert_1.default.equal(array_1.propIsArrayOfBooleans({ x: [1, 2] }, 'x'), false);
assert_1.default.ok(array_1.propIsArrayOfNumbers({ x: [1, 2] }, 'x'));
assert_1.default.equal(array_1.propIsArrayOfNumbers({ x: ['a', 'b'] }, 'x'), false);
assert_1.default.ok(array_1.propIsArrayOfObjects({ x: [{ a: 1 }, { a: 2 }] }, 'x'));
assert_1.default.equal(array_1.propIsArrayOfObjects({ x: [1, 2] }, 'x'), false);
assert_1.default.ok(array_1.propIsArrayOfStrings({ x: ['a', 'b'] }, 'x'));
assert_1.default.equal(array_1.propIsArrayOfStrings({ x: [1, 2] }, 'x'), false);
//# sourceMappingURL=test-array.js.map