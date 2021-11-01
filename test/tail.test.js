const assertArraysEqual = require("../assertArraysEqual.js");
const tail = require('../tail.js')

const words = ["Yo Yo", "Lighthouse Labs", "Labs"];
const wordsTail = ["Lighthouse Labs", "Labs"]

assertArraysEqual(tail(words), ["Lighthouse Labs", "Labs"]);