const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

//// TEST CODE ////
// let skys = {
//   daySky: { stars: 1 },
//   nightSky: { stars: 173 },
//   morningSky: { stars: 142 },
//   eveningSky: { stars: 173 },
//   flatEarthSky: { stars: 1011010}
// };

// assertEqual(findKey(skys, x => x.stars === 173), 'nightSky');