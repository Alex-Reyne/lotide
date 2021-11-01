const without = function(source, itemsToRemove) {
  let itemsToKeep = [];
  let valueExists = false;

  for (let i in source) {
    for (let j in itemsToRemove) {

      if (itemsToRemove[j] === source[i]) {
        valueExists = true;
      } else {
        valueExists = false;
      }
    }
  
    if (!valueExists) {
      itemsToKeep.push(source[i]);
    }
  }

  return itemsToKeep;
};

module.exports = without;


//// TEST CODE ////
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// without(['a', 'b', 'c'], ['c'])
// without(['hello', 'my', 'nameis'], ['my'])

// assertEqualArray(without([1, 2, 3], [1]), [2, 3])
// assertEqualArray(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
// assertEqualArray(without(['a', 'b', 'c'], ['c']), ['a', 'b'])
// assertEqualArray(without(['hello', 'my', 'nameis'], ['my']), ['hello', 'nameis'])
