const countLetters = function(sentence) {
  let letterCount = {};

  for (let letter of sentence) {
    letterCount.hasOwnProperty(letter) ?
    letterCount[letter] += 1 :
    letterCount[letter] = 1;
  }

  delete letterCount[' '];
  console.log(letterCount);
}

module.exports = countLetters;
// countLetters("lighthouse in the house")