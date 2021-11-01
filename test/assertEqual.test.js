const assertEqual = require('../assertEqual.js');

assertEqual("Lighthouse Labs", "Bootcamp"); // => fail
assertEqual(1, 1); // => pass
assertEqual("Hello", "Hello"); // => pass
assertEqual(1, 2); // => fail