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

////// TESTS AND OLD CODE //////
// console.log(eqArrays([4, 5, 6], [4, 5, 6])); // => true
// console.log(eqArrays([1, 2, 3], [4, 5, 6])); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false


////// OLD CODE DO NOT READ //////
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