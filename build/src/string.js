"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propIsOneOfStringsOrDoesNotExist = exports.propIsOneOfStringsOrNull = exports.propIsOneOfStrings = exports.propIsNonemptyStringOrDoesNotExist = exports.propIsNonemptyStringOrNull = exports.propIsNonemptyString = exports.propIsStringOrDoesNotExist = exports.propIsStringOrNull = exports.propIsString = void 0;
const object_1 = require("./object");
const or_null_1 = require("./util/or-null");
const or_does_not_exist_1 = require("./util/or-does-not-exist");
function propIsString(x, prop) {
    return object_1.exists(x, prop) && typeof x[prop] === 'string';
}
exports.propIsString = propIsString;
exports.propIsStringOrNull = or_null_1.orNull(propIsString);
exports.propIsStringOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsString);
function propIsNonemptyString(x, prop) {
    return propIsString(x, prop) && x[prop].length >= 1;
}
exports.propIsNonemptyString = propIsNonemptyString;
exports.propIsNonemptyStringOrNull = or_null_1.orNull(propIsNonemptyString);
exports.propIsNonemptyStringOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsNonemptyString);
function propIsOneOfStrings(x, prop, strings) {
    return propIsString(x, prop) && strings.includes(x[prop]);
}
exports.propIsOneOfStrings = propIsOneOfStrings;
exports.propIsOneOfStringsOrNull = or_null_1.orNull(propIsOneOfStrings);
exports.propIsOneOfStringsOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsOneOfStrings);
//# sourceMappingURL=string.js.map