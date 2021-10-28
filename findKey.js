const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = function(object, callback) {

  for (let key in object) {
    // console.log(key);
    if (callback(object[key])) {
      return key;
    }
  }
};


let skys = {
  daySky: { stars: 1 },
  nightSky: { stars: 173 },
  morningSky: { stars: 142 },
  eveningSky: { stars: 173 },
  flatEarthSky: { stars: 1011010}
};

assertEqual(findKey(skys, x => x.stars === 173), 'nightSky');