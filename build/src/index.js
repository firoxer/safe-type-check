"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.prop = void 0;
const arrayCheckers = __importStar(require("./array"));
const booleanCheckers = __importStar(require("./boolean"));
const nullCheckers = __importStar(require("./null"));
const numberCheckers = __importStar(require("./number"));
const objectCheckers = __importStar(require("./object"));
const stringCheckers = __importStar(require("./string"));
const error_log_1 = require("./util/error-log");
exports.prop = {
    isArray: arrayCheckers.propIsArray,
    isArrayOrNull: arrayCheckers.propIsArrayOrNull,
    isArrayOrDoesNotExist: arrayCheckers.propIsArrayOrDoesNotExist,
    isArrayAndElementsPassCheck: arrayCheckers.propIsArrayAndElementsPassCheck,
    isArrayAndElementsPassCheckOrNull: arrayCheckers.propIsArrayAndElementsPassCheckOrNull,
    isArrayAndElementsPassCheckOrDoesNotExist: arrayCheckers.propIsArrayAndElementsPassCheckOrDoesNotExist,
    isArrayOfArrays: arrayCheckers.propIsArrayOfArrays,
    isArrayOfArraysOrNull: arrayCheckers.propIsArrayOfArraysOrNull,
    isArrayOfArraysOrDoesNotExist: arrayCheckers.propIsArrayOfArraysOrDoesNotExist,
    isArrayOfBooleans: arrayCheckers.propIsArrayOfBooleans,
    isArrayOfBooleansOrNull: arrayCheckers.propIsArrayOfBooleansOrNull,
    isArrayOfBooleansOrDoesNotExist: arrayCheckers.propIsArrayOfBooleansOrDoesNotExist,
    isArrayOfNumbers: arrayCheckers.propIsArrayOfNumbers,
    isArrayOfNumbersOrNull: arrayCheckers.propIsArrayOfNumbersOrNull,
    isArrayOfNumbersOrDoesNotExist: arrayCheckers.propIsArrayOfNumbersOrDoesNotExist,
    isArrayOfObjects: arrayCheckers.propIsArrayOfObjects,
    isArrayOfObjectsOrNull: arrayCheckers.propIsArrayOfObjectsOrNull,
    isArrayOfObjectsOrDoesNotExist: arrayCheckers.propIsArrayOfObjectsOrDoesNotExist,
    isArrayOfStrings: arrayCheckers.propIsArrayOfStrings,
    isArrayOfStringsOrNull: arrayCheckers.propIsArrayOfStringsOrNull,
    isArrayOfStringsOrDoesNotExist: arrayCheckers.propIsArrayOfStringsOrDoesNotExist,
    isBoolean: booleanCheckers.propIsBoolean,
    isBooleanOrNull: booleanCheckers.propIsBooleanOrNull,
    isBooleanOrDoesNotExist: booleanCheckers.propIsBooleanOrDoesNotExist,
    isTrue: booleanCheckers.propIsTrue,
    isTrueOrNull: booleanCheckers.propIsTrueOrNull,
    isTrueOrDoesNotExist: booleanCheckers.propIsTrueOrDoesNotExist,
    isFalse: booleanCheckers.propIsFalse,
    isFalseOrNull: booleanCheckers.propIsFalseOrNull,
    isFalseOrDoesNotExist: booleanCheckers.propIsFalseOrDoesNotExist,
    isNull: nullCheckers.propIsNull,
    isNullOrDoesNotExist: nullCheckers.propIsNullOrDoesNotExist,
    isNumber: numberCheckers.propIsNumber,
    isNumberOrNull: numberCheckers.propIsNumberOrNull,
    isNumberOrDoesNotExist: numberCheckers.propIsNumberOrDoesNotExist,
    isPositiveNumber: numberCheckers.propIsPositiveNumber,
    isPositiveNumberOrNull: numberCheckers.propIsPositiveNumberOrNull,
    isPositiveNumberOrDoesNotExist: numberCheckers.propIsPositiveNumberOrDoesNotExist,
    isOneOfNumbers: numberCheckers.propIsOneOfNumbers,
    isOneOfNumbersOrNull: numberCheckers.propIsOneOfNumbersOrNull,
    isOneOfNumbersOrDoesNotExist: numberCheckers.propIsOneOfNumbersOrDoesNotExist,
    exists: objectCheckers.exists,
    passesCheck: objectCheckers.propPassesCheck,
    passesCheckOrIsNull: objectCheckers.propPassesCheckOrIsNull,
    passesCheckOrDoesNotExist: objectCheckers.propPassesCheckOrDoesNotExist,
    isObject: objectCheckers.propIsObject,
    isObjectOrNull: objectCheckers.propIsObjectOrNull,
    isObjectOrDoesNotExist: objectCheckers.propIsObjectOrDoesNotExist,
    isNonemptyObject: objectCheckers.propIsNonemptyObject,
    isNonemptyObjectOrNull: objectCheckers.propIsNonemptyObjectOrNull,
    isNonemptyObjectOrDoesNotExist: objectCheckers.propIsNonemptyObjectOrDoesNotExist,
    isString: stringCheckers.propIsString,
    isStringOrNull: stringCheckers.propIsStringOrNull,
    isStringOrDoesNotExist: stringCheckers.propIsStringOrDoesNotExist,
    isNonemptyString: stringCheckers.propIsNonemptyString,
    isNonemptyStringOrNull: stringCheckers.propIsNonemptyStringOrNull,
    isNonemptyStringOrDoesNotExist: stringCheckers.propIsNonemptyStringOrDoesNotExist,
    isOneOfStrings: stringCheckers.propIsOneOfStrings,
    isOneOfStringsOrNull: stringCheckers.propIsOneOfStringsOrNull,
    isOneOfStringsOrDoesNotExist: stringCheckers.propIsOneOfStringsOrDoesNotExist,
};
// Can't come up with any way to map all props without TS losing track of types
exports.log = {
    execIfErrorsPresent: error_log_1.execIfErrorsPresent,
    flush: error_log_1.flushErrorLog,
    isArray: error_log_1.withErrorLogs(arrayCheckers.propIsArray),
    isArrayOrNull: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOrNull),
    isArrayOrDoesNotExist: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOrDoesNotExist),
    isArrayAndElementsPassCheck: error_log_1.withErrorLogs(arrayCheckers.propIsArrayAndElementsPassCheck),
    isArrayAndElementsPassCheckOrDoesNotExist: error_log_1.withErrorLogs(arrayCheckers.propIsArrayAndElementsPassCheckOrDoesNotExist),
    isArrayOfArrays: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfArrays),
    isArrayOfArraysOrNull: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfArraysOrNull),
    isArrayOfArraysOrDoesNotExist: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfArraysOrDoesNotExist),
    isArrayOfBooleans: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfBooleans),
    isArrayOfBooleansOrNull: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfBooleansOrNull),
    isArrayOfBooleansOrDoesNotExist: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfBooleansOrDoesNotExist),
    isArrayOfNumbers: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfNumbers),
    isArrayOfNumbersOrNull: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfNumbersOrNull),
    isArrayOfNumbersOrDoesNotExist: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfNumbersOrDoesNotExist),
    isArrayOfObjects: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfObjects),
    isArrayOfObjectsOrNull: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfObjectsOrNull),
    isArrayOfObjectsOrDoesNotExist: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfObjectsOrDoesNotExist),
    isArrayOfStrings: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfStrings),
    isArrayOfStringsOrNull: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfStringsOrNull),
    isArrayOfStringsOrDoesNotExist: error_log_1.withErrorLogs(arrayCheckers.propIsArrayOfStringsOrDoesNotExist),
    isBoolean: error_log_1.withErrorLogs(booleanCheckers.propIsBoolean),
    isBooleanOrNull: error_log_1.withErrorLogs(booleanCheckers.propIsBooleanOrNull),
    isBooleanOrDoesNotExist: error_log_1.withErrorLogs(booleanCheckers.propIsBooleanOrDoesNotExist),
    isTrue: error_log_1.withErrorLogs(booleanCheckers.propIsTrue),
    isTrueOrNull: error_log_1.withErrorLogs(booleanCheckers.propIsTrueOrNull),
    isTrueOrDoesNotExist: error_log_1.withErrorLogs(booleanCheckers.propIsTrueOrDoesNotExist),
    isFalse: error_log_1.withErrorLogs(booleanCheckers.propIsFalse),
    isFalseOrNull: error_log_1.withErrorLogs(booleanCheckers.propIsFalseOrNull),
    isFalseOrDoesNotExist: error_log_1.withErrorLogs(booleanCheckers.propIsFalseOrDoesNotExist),
    isNull: error_log_1.withErrorLogs(nullCheckers.propIsNull),
    isNullOrDoesNotExist: error_log_1.withErrorLogs(nullCheckers.propIsNullOrDoesNotExist),
    isNumber: error_log_1.withErrorLogs(numberCheckers.propIsNumber),
    isNumberOrNull: error_log_1.withErrorLogs(numberCheckers.propIsNumberOrNull),
    isNumberOrDoesNotExist: error_log_1.withErrorLogs(numberCheckers.propIsNumberOrDoesNotExist),
    isPositiveNumber: error_log_1.withErrorLogs(numberCheckers.propIsPositiveNumber),
    isPositiveNumberOrNull: error_log_1.withErrorLogs(numberCheckers.propIsPositiveNumberOrNull),
    isPositiveNumberOrDoesNotExist: error_log_1.withErrorLogs(numberCheckers.propIsPositiveNumberOrDoesNotExist),
    isOneOfNumbers: error_log_1.withErrorLogs(numberCheckers.propIsOneOfNumbers),
    isOneOfNumbersOrNull: error_log_1.withErrorLogs(numberCheckers.propIsOneOfNumbersOrNull),
    isOneOfNumbersOrDoesNotExist: error_log_1.withErrorLogs(numberCheckers.propIsOneOfNumbersOrDoesNotExist),
    exists: error_log_1.withErrorLogs(objectCheckers.exists),
    passesCheck: error_log_1.withErrorLogs(objectCheckers.propPassesCheck),
    passesCheckOrIsNull: error_log_1.withErrorLogs(objectCheckers.propPassesCheckOrIsNull),
    passesCheckOrDoesNotExist: error_log_1.withErrorLogs(objectCheckers.propPassesCheckOrDoesNotExist),
    isObject: error_log_1.withErrorLogs(objectCheckers.propIsObject),
    isObjectOrNull: error_log_1.withErrorLogs(objectCheckers.propIsObject),
    isObjectOrDoesNotExist: error_log_1.withErrorLogs(objectCheckers.propIsObjectOrDoesNotExist),
    isNonemptyObject: error_log_1.withErrorLogs(objectCheckers.propIsNonemptyObject),
    isNonemptyObjectOrNull: error_log_1.withErrorLogs(objectCheckers.propIsNonemptyObject),
    isNonemptyObjectOrDoesNotExist: error_log_1.withErrorLogs(objectCheckers.propIsNonemptyObjectOrDoesNotExist),
    isString: error_log_1.withErrorLogs(stringCheckers.propIsString),
    isStringOrNull: error_log_1.withErrorLogs(stringCheckers.propIsStringOrNull),
    isStringOrDoesNotExist: error_log_1.withErrorLogs(stringCheckers.propIsStringOrDoesNotExist),
    isNonemptyString: error_log_1.withErrorLogs(stringCheckers.propIsNonemptyString),
    isNonemptyStringOrNull: error_log_1.withErrorLogs(stringCheckers.propIsNonemptyStringOrNull),
    isNonemptyStringOrDoesNotExist: error_log_1.withErrorLogs(stringCheckers.propIsNonemptyStringOrDoesNotExist),
    isOneOfStrings: error_log_1.withErrorLogs(stringCheckers.propIsOneOfStrings),
    isOneOfStringsOrNull: error_log_1.withErrorLogs(stringCheckers.propIsOneOfStringsOrNull),
    isOneOfStringsOrDoesNotExist: error_log_1.withErrorLogs(stringCheckers.propIsOneOfStringsOrDoesNotExist),
};
//# sourceMappingURL=index.js.map