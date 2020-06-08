"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orNull = void 0;
const null_1 = require("../null");
function orNull(checker) {
    return (x, prop, checkOrLiterals) => {
        return checker(x, prop, checkOrLiterals) || null_1.propIsNull(x, prop);
    };
}
exports.orNull = orNull;
//# sourceMappingURL=or-null.js.map