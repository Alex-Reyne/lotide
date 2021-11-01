const assertEqualArray = function(arr1, arr2) {
  
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

assertEqualArray([4, 5, 6], [4, 5, 6]); // => true
assertEqualArray([1, 2, 3], [4, 5, 6]); // => false
assertEqualArray([[2, 3], [4]], [[2, 3], [4]]) // => true
assertEqualArray([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
assertEqualArray([[2, 3], [4]], [[2, 3], 4]) // => false

// let eqArrays = function(arr1, arr2) {
//   let stringOne = '';
//   let stringTwo = '';

//   for (let i of arr1) {
//     stringOne += i;
//   }

//   for (let j of arr2) {
//     stringTwo += j;
//   }

//   if (stringOne === stringTwo) {
//     return true;
//   }
  
//   return false;
// };

// let eqArrays = function(arr1, arr2) {

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (i = 0; i < arr1.length; i++) {
//     // console.log('arr1[i]: ' + arr1[i] + ' is array? ' + Array.isArray(arr1[i]), '|| arr2[i]: ' + arr2[i] + ' is array? ' + Array.isArray(arr2[i]))    
//     if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//       if (!eqArrays(arr1[i], arr2[i])) {
//         return false;
//       }
//     } else {
      
//       for (let j = 0; j < arr1.length; j++) {
//         if (arr1[j] !== arr2[j]) {
//           return false;
//         }
//       }
//     }
//   }
  
//    return true;
// };