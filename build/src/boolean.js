"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propIsFalseOrDoesNotExist = exports.propIsFalseOrNull = exports.propIsFalse = exports.propIsTrueOrDoesNotExist = exports.propIsTrueOrNull = exports.propIsTrue = exports.propIsBooleanOrDoesNotExist = exports.propIsBooleanOrNull = exports.propIsBoolean = void 0;
const object_1 = require("./object");
const or_null_1 = require("./util/or-null");
const or_does_not_exist_1 = require("./util/or-does-not-exist");
function propIsBoolean(x, prop) {
    return object_1.exists(x, prop) && typeof x[prop] === 'boolean';
}
exports.propIsBoolean = propIsBoolean;
exports.propIsBooleanOrNull = or_null_1.orNull(propIsBoolean);
exports.propIsBooleanOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsBoolean);
function propIsTrue(x, prop) {
    return propIsBoolean(x, prop) && x[prop] === true;
}
exports.propIsTrue = propIsTrue;
exports.propIsTrueOrNull = or_null_1.orNull(propIsTrue);
exports.propIsTrueOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsTrue);
function propIsFalse(x, prop) {
    return propIsBoolean(x, prop) && x[prop] === false;
}
exports.propIsFalse = propIsFalse;
exports.propIsFalseOrNull = or_null_1.orNull(propIsFalse);
exports.propIsFalseOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsFalse);
//# sourceMappingURL=boolean.js.map