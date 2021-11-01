const eqArrays = require('./eqArrays');

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
      if (!eqObjects(object1[name], object2[name])) {
        return false;
      }
    } else if (object1[name] !== object2[name]) {
        return false;
    }
  }
  return true;
};


module.exports = eqObjects;
////// TESTS //////
// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};

// assertEqual(eqObjects(ab, ba), true);

// const abc = {a: "1", b: "2", c: "3"};

// assertEqual(eqObjects(abc, ab), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertObjectEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
// assertObjectEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// assertObjectEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
// assertObjectEqual({ a: { z: 1, x: { y: 3 }}, b: 2 }, { a: { z: 1, x: { y: 3 } }, b: 2 }); // => true
// assertObjectEqual({ a: { z: 1, x: { y: 3 }}, b: 3 }, { a: { z: 1, x: { y: 3 } }, b: 2 }); // => false
// assertObjectEqual({ a: { z: 1, x: { y: 3, f: { a: 2 } }}, b: 2 }, { a: { z: 1, x: { y: 3 } }, b: 2 }) // => false
