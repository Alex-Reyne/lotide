const assert = require('chai').assert
const tail = require('../tail.js')

describe('#tail removes the first item of an array', () => {

  it('returns [2, 3] for [1, 2, 3]', () => {
    let actual = tail([1, 2, 3]);
    let expected = [2, 3];

    assert.deepEqual(actual, expected);
  });

});


// const words = ["Yo Yo", "Lighthouse Labs", "Labs"];
// const wordsTail = ["Lighthouse Labs", "Labs"]

// assertArraysEqual(tail(words), ["Lighthouse Labs", "Labs"]);