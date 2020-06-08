// For running tests, you could do something like `for f in test/*; do ts-node $f; done`
// as well, but the repetitive compilation takes a lot of time.
// This is a tradeoff so you can execute just one script.
import './test-array';
import './test-boolean';
import './test-error-logging';
import './test-null';
import './test-number';
import './test-object';
import './test-string';

// If importing (and thus executing) everything did not result in errors, we're good
console.log('no errors');