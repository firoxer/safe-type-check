"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propIsNonemptyObjectOrDoesNotExist = exports.propIsNonemptyObjectOrNull = exports.propIsNonemptyObject = exports.propIsObjectOrDoesNotExist = exports.propIsObjectOrNull = exports.propIsObject = exports.propPassesCheckOrDoesNotExist = exports.propPassesCheckOrIsNull = exports.propPassesCheck = exports.exists = exports.isObject = void 0;
const or_does_not_exist_1 = require("./util/or-does-not-exist");
const or_null_1 = require("./util/or-null");
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
function exists(x, prop) {
    return isObject(x) && prop in x;
}
exports.exists = exists;
function propPassesCheck(x, prop, check) {
    return !!(exists(x, prop) && check(x[prop]));
}
exports.propPassesCheck = propPassesCheck;
exports.propPassesCheckOrIsNull = or_null_1.orNull(propPassesCheck);
exports.propPassesCheckOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propPassesCheck);
function propIsObject(x, prop) {
    return exists(x, prop) && x[prop] !== null && typeof x[prop] === 'object';
}
exports.propIsObject = propIsObject;
exports.propIsObjectOrNull = or_null_1.orNull(propIsObject);
exports.propIsObjectOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsObject);
function propIsNonemptyObject(x, prop) {
    return propIsObject(x, prop) && Object.keys(x[prop]).length >= 1;
}
exports.propIsNonemptyObject = propIsNonemptyObject;
exports.propIsNonemptyObjectOrNull = or_null_1.orNull(propIsNonemptyObject);
exports.propIsNonemptyObjectOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsNonemptyObject);
//# sourceMappingURL=object.js.map