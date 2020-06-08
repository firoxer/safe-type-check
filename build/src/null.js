"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propIsNullOrDoesNotExist = exports.propIsNull = void 0;
const object_1 = require("./object");
const or_does_not_exist_1 = require("./util/or-does-not-exist");
function propIsNull(x, prop) {
    return object_1.exists(x, prop) && x[prop] === null;
}
exports.propIsNull = propIsNull;
exports.propIsNullOrDoesNotExist = or_does_not_exist_1.orDoesNotExist(propIsNull);
//# sourceMappingURL=null.js.map