"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const string_1 = require("../src/string");
assert_1.default.ok(string_1.propIsString({ x: 'abc' }, 'x'));
assert_1.default.equal(string_1.propIsString({ x: 1 }, 'x'), false);
assert_1.default.ok(string_1.propIsNonemptyString({ x: 'abc' }, 'x'));
assert_1.default.equal(string_1.propIsNonemptyString({ x: '' }, 'x'), false);
assert_1.default.equal(string_1.propIsNonemptyString({ x: 1 }, 'x'), false);
assert_1.default.ok(string_1.propIsOneOfStrings({ x: 'b' }, 'x', ['a', 'b', 'c']));
assert_1.default.equal(string_1.propIsOneOfStrings({ x: 'd' }, 'x', ['a', 'b', 'c']), false);
//# sourceMappingURL=test-string.js.map