# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alex-reyne/lotide`

**Require it:**

`const _ = require('@alex-reyne/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head(array)`: returns the first item from an array.
*  `tail(array)`: returns the array without the first item.
*  `middle(array)`: returns the middle item(s) from an array.
*  `assertArraysEqual(arr1, arr2)`: a test to see if eqArrays is working properly.
*  `assertEqual(actual, expected)`: a test to assert equality between two arguments. 
*  `eqArrays(arr1, arr2)`: returns true if both arrays are equal.
*  `assertObjectsEqual(obj1, obj2)`: a test to see if eqObjects is working.
*  `eqObjects(obj1, obj2)`: returns true if both objects are equal.
*  `countOnly(allItems, itemsToCount)`: takes in and array if items (all items) and an object (items to count).

    if the objects keys are true, they will be counted.

    returns an object with keys named after each item that was counted and key values of how many times they appeared in the array.

*  `countLetters(string)`: returns an object with keys of each letter in the string with values of how many times they appear

*  `letterPositions(string)`: returns and object with keys for each letter in the sentence.
key values are an array with each position of that letter in the sentence.

   This function removes spaces from the string and will not count them as indecies.

*  `map(array, callback)`: returns a new array based on the results of the callback function.
*  `takeUntil(array, callback)`: returns everything in the array up until the specified item in the callback shows up.

*  `without(items, itemsToRemove)`: takes in two arrays and returns the first array (items) without any of the items from the second array (itemsToRemove);

    this function does check item type. removing all "1" will not remove the Number 1.

*  `findKey(object, callback)`: takes in an object and a callback. scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

    findKey(object, x => x.key === 0)

*  `findKeyByValue(object, value)`: returns the keys from the object that have the specified value.
*  `flatten(array)`: flattens (un-nests) a nested array in order.