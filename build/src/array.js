"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propIsArrayOfStringsOrDoesNotExist = exports.propIsArrayOfStringsOrNull = exports.propIsArrayOfStrings = exports.propIsArrayOfObjectsOrDoesNotExist = exports.propIsArrayOfObjectsOrNull = exports.propIsArrayOfObjects = exports.propIsArrayOfNumbersOrDoesNotExist = exports.propIsArrayOfNumbersOrNull = exports.propIsArrayOfNumbers = exports.propIsArrayOfBooleansOrDoesNotExist = exports.propIsArrayOfBooleansOrNull = exports.propIsArrayOfBooleans = exports.propIsArrayOfArraysOrDoesNotExist = exports.propIsArrayOfArraysOrNull = exports.propIsArrayOfArrays = exports.propIsArrayAndElementsPassCheckOrDoesNotExist = exports.propIsArrayAndElementsPassCheckOrNull = exports.propIsArrayAndElementsPassCheck = exports.propIsArrayOrDoesNotExist = exports.propIsArrayOrNull = exports.propIsArray = void 0;
const object_1 = require("./object");
const or_null_1 = require("./util/or-null");
const or_does_not_exist_1 = require("./util/or-does-not-exist");
function propIsArray(x, prop) {
    return object_1.exists(x, prop) && Array.isArray(x[prop]);
}
exports.propIsArray = propIsArray;
exports.propIsArrayOrNull = or_null_1.orNull(propIsArray);
exports.propIsArrayOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsArray);
function propIsArrayAndElementsPassCheck(x, prop, check) {
    return !!(propIsArray(x, prop) && x[prop].every(check));
}
exports.propIsArrayAndElementsPassCheck = propIsArrayAndElementsPassCheck;
exports.propIsArrayAndElementsPassCheckOrNull = or_null_1.orNull(propIsArrayAndElementsPassCheck);
exports.propIsArrayAndElementsPassCheckOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsArrayAndElementsPassCheck);
function propIsArrayOfArrays(x, prop) {
    return propIsArray(x, prop) && x[prop].every(e => Array.isArray(e));
}
exports.propIsArrayOfArrays = propIsArrayOfArrays;
exports.propIsArrayOfArraysOrNull = or_null_1.orNull(propIsArrayOfArrays);
exports.propIsArrayOfArraysOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsArrayOfArrays);
function propIsArrayOfBooleans(x, prop) {
    return propIsArray(x, prop) && x[prop].every(e => typeof e === 'boolean');
}
exports.propIsArrayOfBooleans = propIsArrayOfBooleans;
exports.propIsArrayOfBooleansOrNull = or_null_1.orNull(propIsArrayOfBooleans);
exports.propIsArrayOfBooleansOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsArrayOfBooleans);
function propIsArrayOfNumbers(x, prop) {
    return propIsArray(x, prop) && x[prop].every(e => typeof e === 'number');
}
exports.propIsArrayOfNumbers = propIsArrayOfNumbers;
exports.propIsArrayOfNumbersOrNull = or_null_1.orNull(propIsArrayOfNumbers);
exports.propIsArrayOfNumbersOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsArrayOfNumbers);
function propIsArrayOfObjects(x, prop) {
    return propIsArray(x, prop) && x[prop].every(e => object_1.isObject(e));
}
exports.propIsArrayOfObjects = propIsArrayOfObjects;
exports.propIsArrayOfObjectsOrNull = or_null_1.orNull(propIsArrayOfObjects);
exports.propIsArrayOfObjectsOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsArrayOfObjects);
function propIsArrayOfStrings(x, prop) {
    return propIsArray(x, prop) && x[prop].every(e => typeof e === 'string');
}
exports.propIsArrayOfStrings = propIsArrayOfStrings;
exports.propIsArrayOfStringsOrNull = or_null_1.orNull(propIsArrayOfStrings);
exports.propIsArrayOfStringsOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsArrayOfStrings);
//# sourceMappingURL=array.js.map