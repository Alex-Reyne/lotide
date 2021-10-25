const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {
  let result = arr.slice(1);
  return result;
};

const words = ["Yo Yo", "Lighthouse Labs", "Labs"];

tail(words);
assertEqual(words.length, 3);