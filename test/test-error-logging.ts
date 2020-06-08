import assert from 'assert';

import { log as prop } from '../src';

prop.isString({ x: 1 }, 'x');
assert.deepStrictEqual(prop.flush(), ['Check propIsString failed with key x and object {"x":1}']);
assert.deepStrictEqual(prop.flush(), []);

prop.isString({ x: 1 }, 'x');
prop.isNumber({ y: 'abc' }, 'y');
assert.deepStrictEqual(prop.flush(), [
  'Check propIsString failed with key x and object {"x":1}',
  'Check propIsNumber failed with key y and object {"y":"abc"}'
]);
assert.deepStrictEqual(prop.flush(), []);

prop.isString({ x: 1 }, 'x');
assert.throws(() => prop.execIfErrorsPresent((errors) => {
  throw new Error(errors[0]);
}));

prop.isString({ x: "abc" }, 'x');
assert.doesNotThrow(() => prop.execIfErrorsPresent((errors) => {
  throw new Error(errors[0]);
}));