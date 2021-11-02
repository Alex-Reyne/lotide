const letterPositions = function(sentence) {
  const results = {};

    for (let letter of sentence) {
      !results.hasOwnProperty(letter) ?
      results[letter] = [] : null;
    }

    for (let i = 0; i < sentence.length; i++) {
      results.hasOwnProperty(sentence[i]) ?
        results[sentence[i]].push(i) :
        null;
      }
      
  delete results[' '];
  return results;
}

console.log(letterPositions('hello brother'));

module.exports = letterPositions;
