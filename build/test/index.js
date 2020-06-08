"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// For running tests, you could do something like `for f in test/*; do ts-node $f; done`
// as well, but the repetitive compilation takes a lot of time.
// This is a tradeoff so you can execute just one script.
require("./test-array");
require("./test-boolean");
require("./test-error-logging");
require("./test-null");
require("./test-number");
require("./test-object");
require("./test-string");
// If importing (and thus executing) everything did not result in errors, we're good
console.log('no errors');
//# sourceMappingURL=index.js.map