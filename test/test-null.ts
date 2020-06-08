import assert from 'assert';

import { propIsNull } from '../src/null';

assert.ok(propIsNull({ x: null }, 'x'));
assert.equal(propIsNull({}, 'x'), false);
assert.equal(propIsNull({ x: {} }, 'x'), false);
assert.equal(propIsNull({ x: undefined }, 'x'), false);
