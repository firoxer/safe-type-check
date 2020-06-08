import assert from 'assert';

import { propIsNumber, propIsPositiveNumber, propIsOneOfNumbers } from '../src/number';

assert.ok(propIsNumber({ x: 2 }, 'x'));
assert.equal(propIsNumber({ x: 'a' }, 'x'), false);

assert.ok(propIsPositiveNumber({ x: 2 }, 'x'));
assert.equal(propIsPositiveNumber({ x: 'a' }, 'x'), false);
assert.equal(propIsPositiveNumber({ x: -1 }, 'x'), false);

assert.ok(propIsOneOfNumbers({ x: 2 }, 'x', [1, 2, 3]));
assert.equal(propIsOneOfNumbers({ x: 4 }, 'x', [1, 2, 3]), false);