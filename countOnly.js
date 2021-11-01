const countOnly = function(allItems, itemsToCount) {
  let result = {}

  for (let item of allItems){
    for (let name in itemsToCount) {
      if (name === item && itemsToCount[name] === true) {
        result.hasOwnProperty(name) ?
        result[name] += 1 :
        result[name] = 1;
      }
    } 
  }

  return result;
}

module.exports = countOnly


//// TEST CODE ////
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
