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

// let string = "hello";

// assertEqualArray(string, "hello");

const letterPositions = function(sentence) {
  const results = {};

    for (let letter of sentence) {
      !results.hasOwnProperty(letter) ?
      results[letter] = [] : null;
    }

    for (let i = 0; i < sentence.length; i++) {
      results.hasOwnProperty(sentence[i]) ?
        results[sentence[i]].push(i) :
        null;
      }
      
  delete results[' '];
  return results;
}

console.log(letterPositions("lighthouse in the house"));
assertEqualArray(letterPositions("lighthouse in the house").e, [9, 16, 22]);
