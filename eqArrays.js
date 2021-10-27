
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

let eqArrays = function(arr1, arr2) {
  let stringOne = '';
  let stringTwo = '';
  let isTrue = false

  for (let i of arr1) {
    stringOne += i;
  }

  for (let j of arr2) {
    stringTwo += j;
  }

  if (stringOne === stringTwo) {
    isTrue = true;
  }
  
  return isTrue;
}

assertEqual(eqArrays([4, 5, 6], [4, 5, 6]), true);