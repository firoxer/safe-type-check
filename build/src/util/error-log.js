"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withErrorLogs = exports.execIfErrorsPresent = exports.flushErrorLog = exports.logError = void 0;
const log = [];
function logError(message) {
    log.push(message);
}
exports.logError = logError;
;
function flushErrorLog() {
    return log.splice(0, log.length);
}
exports.flushErrorLog = flushErrorLog;
function execIfErrorsPresent(callback) {
    if (log.length >= 1) {
        callback(flushErrorLog());
    }
}
exports.execIfErrorsPresent = execIfErrorsPresent;
function withErrorLogs(checker) {
    const wrappedChecker = (x, prop, checkOrLiterals) => {
        const ok = checker(x, prop, checkOrLiterals);
        if (!ok) {
            logError(`Check ${checker.name} failed with key ${prop} and object ${JSON.stringify(x)}`);
        }
        return ok;
    };
    return wrappedChecker;
}
exports.withErrorLogs = withErrorLogs;
//# sourceMappingURL=error-log.js.map