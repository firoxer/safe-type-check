import assert from 'assert';

import { exists, propIsObject, propIsNonemptyObject } from '../src/object';

assert.ok(exists({ x: 1 }, 'x'));
assert.equal(exists({ x: 1 }, 'y'), false);

assert.ok(propIsObject({ x: { a: 1 } }, 'x'));
assert.ok(propIsObject({ x: {} }, 'x'));
assert.equal(propIsObject({ x: 123 }, 'x'), false);

assert.ok(propIsNonemptyObject({ x: { a: 1 } }, 'x'));
assert.equal(propIsNonemptyObject({ x: {} }, 'x'), false);

// TODO: Tests for propPassesCheck