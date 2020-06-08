import assert from 'assert';

import { propIsString, propIsNonemptyString, propIsOneOfStrings } from '../src/string';

assert.ok(propIsString({ x: 'abc' }, 'x'));
assert.equal(propIsString({ x: 1 }, 'x'), false);

assert.ok(propIsNonemptyString({ x: 'abc' }, 'x'));
assert.equal(propIsNonemptyString({ x: '' }, 'x'), false);
assert.equal(propIsNonemptyString({ x: 1 }, 'x'), false);

assert.ok(propIsOneOfStrings({ x: 'b' }, 'x', ['a', 'b', 'c']));
assert.equal(propIsOneOfStrings({ x: 'd' }, 'x', ['a', 'b', 'c']), false);
