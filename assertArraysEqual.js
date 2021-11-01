const assertArraysEqual = function(arr1, arr2) {
  
  if (eqArrays(arr1, arr2)) {
    console.log(`👌 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

let eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }

  }

  return true;
};

module.exports = assertArraysEqual, eqArrays;
////// TESTS //////

// assertArraysEqual([4, 5, 6], [4, 5, 6]); // => true
// assertArraysEqual([1, 2, 3], [4, 5, 6]); // => false
// assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]) // => true
// assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
// assertArraysEqual([[2, 3], [4]], [[2, 3], 4]) // => false