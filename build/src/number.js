"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propIsOneOfNumbersOrDoesNotExist = exports.propIsOneOfNumbersOrNull = exports.propIsOneOfNumbers = exports.propIsPositiveNumberOrDoesNotExist = exports.propIsPositiveNumberOrNull = exports.propIsPositiveNumber = exports.propIsNumberOrDoesNotExist = exports.propIsNumberOrNull = exports.propIsNumber = void 0;
const object_1 = require("./object");
const or_null_1 = require("./util/or-null");
const or_does_not_exist_1 = require("./util/or-does-not-exist");
function propIsNumber(x, prop) {
    return object_1.exists(x, prop) && typeof x[prop] === 'number';
}
exports.propIsNumber = propIsNumber;
exports.propIsNumberOrNull = or_null_1.orNull(propIsNumber);
exports.propIsNumberOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsNumber);
function propIsPositiveNumber(x, prop) {
    return propIsNumber(x, prop) && x[prop] > 0;
}
exports.propIsPositiveNumber = propIsPositiveNumber;
exports.propIsPositiveNumberOrNull = or_null_1.orNull(propIsPositiveNumber);
exports.propIsPositiveNumberOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsPositiveNumber);
function propIsOneOfNumbers(x, prop, numbers) {
    return propIsNumber(x, prop) && numbers.includes(x[prop]);
}
exports.propIsOneOfNumbers = propIsOneOfNumbers;
exports.propIsOneOfNumbersOrNull = or_null_1.orNull(propIsOneOfNumbers);
exports.propIsOneOfNumbersOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsOneOfNumbers);
//# sourceMappingURL=number.js.map