"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orDoesNotExist = void 0;
const object_1 = require("../object");
function orDoesNotExist(checker) {
    return (x, prop, checkOrLiterals) => {
        return !object_1.exists(x, prop) || checker(x, prop, checkOrLiterals);
    };
}
exports.orDoesNotExist = orDoesNotExist;
//# sourceMappingURL=or-does-not-exist.js.map