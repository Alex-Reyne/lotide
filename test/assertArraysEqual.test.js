const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([4, 5, 6], [4, 5, 6]); // => true
assertArraysEqual([1, 2, 3], [4, 5, 6]); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]) // => true
assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]) // => false