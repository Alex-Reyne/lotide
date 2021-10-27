const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
  let letterCount = {};

  for (let letter of sentence) {
    letterCount.hasOwnProperty(letter) ?
    letterCount[letter] += 1 :
    letterCount[letter] = 1;
  }

  delete letterCount[' '];
  console.log(letterCount);
}

countLetters("lighthouse in the house")