const assert = require('chai').assert
const middle = require('../middle.js')

describe('#head returns the middle item(s) in the array', () => {

  it('should return [] for [1]', () => {
    const actual = middle([1])
    const expected = []

    assert.deepEqual(actual, expected);
  });

  it('should return [] for [1, 2]', () => {
    const actual = middle([1, 2])
    const expected = []
    
    assert.deepEqual(actual, expected);
  });

  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    const actual = middle([1, 2, 3, 4, 5])
    const expected = [3]
    
    assert.deepEqual(actual, expected);
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const actual = middle([1, 2, 3, 4, 5, 6])
    const expected = [3, 4]
    
    assert.deepEqual(actual, expected);
  });

});