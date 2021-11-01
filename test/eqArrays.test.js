const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([4, 5, 6], [4, 5, 6]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [4, 5, 6]), false); // => false
assertArraysEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertArraysEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertArraysEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false