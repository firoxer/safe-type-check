import assert from 'assert';

import {
  propIsArray,
  propIsArrayOfObjects,
  propIsArrayAndElementsPassCheck,
  propIsArrayOfArrays,
  propIsArrayOfStrings,
  propIsArrayOfNumbers,
  propIsArrayOfBooleans
} from '../src/array';

assert.ok(propIsArray({ x: [1, 2, 3] }, 'x'));
assert.equal(propIsArray({ x: 'a' }, 'x'), false);

const checkNumber = (x: unknown): number | null => typeof x === 'number' ? x : null;
assert.ok(propIsArrayAndElementsPassCheck({ x: [1, 2, 3] }, 'x', checkNumber));
assert.equal(propIsArrayAndElementsPassCheck({ x: ['a', 'b', 'c'] }, 'x', checkNumber), false);

assert.ok(propIsArrayOfArrays({ x: [['a', 'b'], ['c', 'd']] }, 'x'));
assert.equal(propIsArrayOfArrays({ x: [1, 2] }, 'x'), false);

assert.ok(propIsArrayOfBooleans({ x: [true, false] }, 'x'));
assert.equal(propIsArrayOfBooleans({ x: [1, 2] }, 'x'), false);

assert.ok(propIsArrayOfNumbers({ x: [1, 2] }, 'x'));
assert.equal(propIsArrayOfNumbers({ x: ['a', 'b'] }, 'x'), false);

assert.ok(propIsArrayOfObjects({ x: [{ a: 1 }, { a: 2 }] }, 'x'));
assert.equal(propIsArrayOfObjects({ x: [1, 2] }, 'x'), false);

assert.ok(propIsArrayOfStrings({ x: ['a', 'b'] }, 'x'));
assert.equal(propIsArrayOfStrings({ x: [1, 2] }, 'x'), false);