const head = require('../head.js')

const assert = require('chai').assert

describe('#head returns ONLY the first item in an array', () => {

  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

});