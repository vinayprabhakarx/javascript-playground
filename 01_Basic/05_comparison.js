// Basic Comparision
console.table({
  "5 > 3": 5 > 3,
  "5 < 3": 5 < 3,
  "5 >= 5": 5 >= 5,
  "5 <= 3": 5 <= 3,
  '5 == "5"': 5 == "5",
  '5 === "5"': 5 === "5",
  '5 != "3"': 5 != "3",
  '5 !== "5"': 5 !== "5",
});

// ============= This Type of Conversion should be Avoided ============= //

// Comparing Different Types
console.table({
  '5 == "5"': 5 == "5", // true, because of type coercion
  '5 === "5"': 5 === "5", // false, different types
  "0 == false": 0 == false, // true, because of type coercion
  "0 === false": 0 === false, // false, different types
  "'2'> 1": "2" > 1, // true, string is converted to number
  "'02' > 1": "02" > 1, // false, string comparison
  "null > 0": null > 0, // false, null is converted to 0
  "null == 0": null == 0, // true, null is converted to 0
  "null >= 0": null >= 0, // true, null is converted to 0

  "null == undefined": null == undefined, // true, both represent absence of value
  "null === undefined": null === undefined, // false, different types
});

// Comparing Objects
const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };
const obj3 = obj1;

console.table({
  "obj1 == obj2": obj1 == obj2, // false, different references
  "obj1 === obj2": obj1 === obj2, // false, different references
  "obj1 == obj3": obj1 == obj3, // true, same reference
  "obj1 === obj3": obj1 === obj3, // true, same reference
});

// Comparing Arrays
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.table({
  "arr1 == arr2": arr1 == arr2, // false, different references
  "arr1 === arr2": arr1 === arr2, // false, different references
  "arr1 == arr3": arr1 == arr3, // true, same reference
  "arr1 === arr3": arr1 === arr3, // true, same reference
});

// Special Cases
console.table({
  "NaN == NaN": NaN == NaN, // false, NaN is not equal to anything, including itself
  "NaN === NaN": NaN === NaN, // false, same reason as above
  "Infinity > 1000": Infinity > 1000, // true, Infinity is greater than any finite number
  "-Infinity < -1000": -Infinity < -1000, // true, -Infinity is less than any finite number
});

// Strict vs Loose Equality
console.table({
  '5 == "5"': 5 == "5", // true, loose equality
  '5 === "5"': 5 === "5", // false, strict equality (use this check always)
  "0 == false": 0 == false, // true, loose equality
  "0 === false": 0 === false, // false, strict equality
});
