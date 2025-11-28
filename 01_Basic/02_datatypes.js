"use strict"; // treat all JS code as newer versions

// Data Types in JavaScript

/* 1. Primitive Data Types */
let stringData = "Hello, World!"; // String=> sequence of characters
let numberData = 42; // Number=> Integer and Float, both are of type 'number'
let booleanData = true; // Boolean => true/false
let undefinedData; // Undefined (Variable declared but not assigned), standalone type
let nullData = null; // Null => empty value
let symbolData = Symbol("id"); // Symbol => unique identifier
let bigIntData = 9007199254740991n; // BigInt

console.table({
  stringData: typeof stringData + " => " + stringData,
  numberData: typeof numberData + " => " + numberData,
  booleanData: typeof booleanData + " => " + booleanData,
  undefinedData: typeof undefinedData + " => " + undefinedData,
  nullData: typeof nullData + " => " + nullData, // typeof null is "object" by JS legacy bug
  symbolData: typeof symbolData + " => " + symbolData.toString(),
  bigIntData: typeof bigIntData + " => " + bigIntData,
});

/* 2. Non-Primitive Data Types */
let arrayData = [1, 2, 3, 4, 5]; // Array
let objectData = {
  // Object
  name: "Alice",
  age: 30,
  isStudent: false,
};

console.table({
  arrayData: JSON.stringify(arrayData), // Convert Array to string for display
  objectData: JSON.stringify(objectData), // Convert Object to string for display
});
