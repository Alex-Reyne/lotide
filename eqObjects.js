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
  let isTrue = false;

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
};

// Returns true if both objects have identical keys with identical values.
// Otherwie you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let name of object1Keys) {
    if (Array.isArray(object1[name]) && Array.isArray(object2[name])) {
      if (!eqArrays(object1[name], object2[name])) {
        return false;
      }
    } 
    if (typeof object1[name] === 'object') {
      return eqObjects(object1[name], object2[name]);
    } else if (object1[name] !== object2[name]) {
        return false;
    }
  }
  return true;
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

assertEqual(eqObjects(ab, ba), true);

const abc = {a: "1", b: "2", c: "3"};

assertEqual(eqObjects(abc, ab), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { z: 1, x: { y: 3 }}, b: 2 }, { a: { z: 1, x: { y: 3 } }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { z: 1, x: { y: 3, f: { a: 2 } }}, b: 2 }, { a: { z: 1, x: { y: 3 } }, b: 2 }), false); // => false
