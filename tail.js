const assertArraysEqual = require('./assertArraysEqual')

const tail = function(arr) {
  let result = arr.slice(1);
  return result;
};

module.exports = tail;
const words = ["Yo Yo", "Lighthouse Labs", "Labs"];

assertArraysEqual(tail(words), ['Lighthouse Labs', 'Labs']);