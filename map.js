const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ['hello', 'my', 'name', 'is'];

const results1 = map(words, word => word[0]);
// console.log(results1)

module.exports = map;