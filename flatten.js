let flatten = function(array) {
  let newArray = [];

  for (let i in array) {
    if (Array.isArray(array[i])) {
      for (let j in array[i]) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = flatten;