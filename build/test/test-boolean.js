"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const boolean_1 = require("../src/boolean");
assert_1.default.ok(boolean_1.propIsBoolean({ x: true }, 'x'));
assert_1.default.ok(boolean_1.propIsBoolean({ x: false }, 'x'));
assert_1.default.equal(boolean_1.propIsBoolean({}, 'x'), false);
assert_1.default.equal(boolean_1.propIsBoolean([], 'x'), false);
assert_1.default.equal(boolean_1.propIsBoolean(null, 'x'), false);
assert_1.default.equal(boolean_1.propIsBoolean(undefined, 'x'), false);
assert_1.default.ok(boolean_1.propIsTrue({ x: true }, 'x'));
assert_1.default.equal(boolean_1.propIsTrue({ x: false }, 'x'), false);
assert_1.default.ok(boolean_1.propIsFalse({ x: false }, 'x'));
assert_1.default.equal(boolean_1.propIsFalse({ x: true }, 'x'), false);
//# sourceMappingURL=test-boolean.js.map