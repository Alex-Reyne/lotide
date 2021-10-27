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

const assertEqualArray = function(arr1, arr2) {
  
  if (eqArrays(arr1, arr2)) {
    console.log(`👌 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

let middle = function(array) {
  let newArray = []

  if (array.length < 3) {
    return newArray;
  } else if (array.length % 2 !== 0) {
      newArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 3) {
      newArray.push(array[Math.floor((array.length - 1) / 2)]);
      newArray.push(array[Math.floor(array.length / 2)]);
  }

  return newArray;
}