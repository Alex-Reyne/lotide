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

console.log(eqArrays([4, 5, 6], [4, 5, 6]));
console.log(eqArrays([1, 2, 3], [4, 5, 6]));