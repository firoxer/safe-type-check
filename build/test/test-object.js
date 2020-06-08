"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const object_1 = require("../src/object");
assert_1.default.ok(object_1.exists({ x: 1 }, 'x'));
assert_1.default.equal(object_1.exists({ x: 1 }, 'y'), false);
assert_1.default.ok(object_1.propIsObject({ x: { a: 1 } }, 'x'));
assert_1.default.ok(object_1.propIsObject({ x: {} }, 'x'));
assert_1.default.equal(object_1.propIsObject({ x: 123 }, 'x'), false);
assert_1.default.ok(object_1.propIsNonemptyObject({ x: { a: 1 } }, 'x'));
assert_1.default.equal(object_1.propIsNonemptyObject({ x: {} }, 'x'), false);
// TODO: Tests for propPassesCheck
//# sourceMappingURL=test-object.js.map