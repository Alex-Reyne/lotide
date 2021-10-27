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

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(['a', 'b', 'c'], ['c'])
without(['hello', 'my', 'nameis'], ['my'])

assertEqualArray(without([1, 2, 3], [1]), [2, 3])
assertEqualArray(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertEqualArray(without(['a', 'b', 'c'], ['c']), ['a', 'b'])
assertEqualArray(without(['hello', 'my', 'nameis'], ['my']), ['hello', 'nameis'])
