"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const null_1 = require("../src/null");
assert_1.default.ok(null_1.propIsNull({ x: null }, 'x'));
assert_1.default.equal(null_1.propIsNull({}, 'x'), false);
assert_1.default.equal(null_1.propIsNull({ x: {} }, 'x'), false);
assert_1.default.equal(null_1.propIsNull({ x: undefined }, 'x'), false);
//# sourceMappingURL=test-null.js.map