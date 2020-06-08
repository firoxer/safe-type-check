"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const number_1 = require("../src/number");
assert_1.default.ok(number_1.propIsNumber({ x: 2 }, 'x'));
assert_1.default.equal(number_1.propIsNumber({ x: 'a' }, 'x'), false);
assert_1.default.ok(number_1.propIsPositiveNumber({ x: 2 }, 'x'));
assert_1.default.equal(number_1.propIsPositiveNumber({ x: 'a' }, 'x'), false);
assert_1.default.equal(number_1.propIsPositiveNumber({ x: -1 }, 'x'), false);
assert_1.default.ok(number_1.propIsOneOfNumbers({ x: 2 }, 'x', [1, 2, 3]));
assert_1.default.equal(number_1.propIsOneOfNumbers({ x: 4 }, 'x', [1, 2, 3]), false);
//# sourceMappingURL=test-number.js.map