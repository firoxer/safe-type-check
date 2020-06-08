import assert from 'assert';

import { propIsBoolean, propIsTrue, propIsFalse } from '../src/boolean';

assert.ok(propIsBoolean({ x: true }, 'x'));
assert.ok(propIsBoolean({ x: false }, 'x'));
assert.equal(propIsBoolean({}, 'x'), false);
assert.equal(propIsBoolean([], 'x'), false);
assert.equal(propIsBoolean(null, 'x'), false);
assert.equal(propIsBoolean(undefined, 'x'), false);

assert.ok(propIsTrue({ x: true }, 'x'));
assert.equal(propIsTrue({ x: false }, 'x'), false);

assert.ok(propIsFalse({ x: false }, 'x'));
assert.equal(propIsFalse({ x: true }, 'x'), false);