// =============================
// Array in JavaScript
// =============================

/*
An array is a data structure used to store multiple values in a single variable.
JavaScript arrays are dynamic, zero-indexed, and can contain mixed data types.
*/

// -----------------------------
// Array Declaration and Access
// -----------------------------

/*
Arrays can be created using literal syntax.
Elements are accessed using index values (starting from 0).
*/

const arr = [1, 2, 3, 4, 5, "hello"];

console.log(arr); // Outputs full array
console.log(arr[0]); // Outputs first element
console.log(arr.length); // Outputs total size of array

// -----------------------------
// Array Constructor
// -----------------------------

/*
The Array constructor is an alternative way to create arrays.
Generally avoided unless dynamic sizing is required.
*/

const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// -----------------------------
// Shallow Copy Behavior
// -----------------------------

/*
JavaScript arrays perform shallow copies.
Objects inside arrays are copied by reference, not value.
Changes to referenced objects impact all copies.
*/

// -----------------------------
// Common Array Methods
// -----------------------------

const fruits = ["apple", "banana", "cherry"];

// push()

/*
push() adds elements at the end of the array.
This method mutates the original array.
*/

fruits.push("date");
console.log(fruits);

// pop()

/*
pop() removes and returns the last element of the array.
*/

const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// shift()

/*
shift() removes and returns the first element in the array.
*/

const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

// unshift()

/*
unshift() inserts element(s) at the beginning of the array.
*/

fruits.unshift("avocado");
console.log(fruits);

// indexOf()

/*
indexOf() returns the index of a value.
Returns -1 if value is not found.
*/

const index = fruits.indexOf("banana");
console.log(index);

// slice()

/*
slice() returns a shallow copy of part of an array.
The original array is not modified.
*/

const citrus = fruits.slice(1, 3);
console.log(citrus);

// splice()

/*
splice() can remove, replace, or insert elements.
This method mutates the original array.
*/

fruits.splice(1, 1, "blueberry");
console.log(fruits);

// forEach()

/*
forEach() executes a function on each array element.
Used for iteration only, no return value.
*/

fruits.forEach((fruit) => {
  console.log(fruit);
});

// map()

/*
map() transforms array data and returns a new array.
*/

const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// filter()

/*
filter() returns elements meeting a condition.
*/

const bFruits = fruits.filter((fruit) => fruit.startsWith("b"));
console.log(bFruits);

// reduce()

/*
reduce() reduces array values into a single output.
Commonly used for sums and aggregations.
*/

const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);

// find()

/*
find() returns the first matching element.
*/

const foundFruit = fruits.find((fruit) => fruit.length > 6);
console.log(foundFruit);

// some()

/*
some() checks if any element satisfies a condition.
*/

const hasLongFruit = fruits.some((fruit) => fruit.length > 6);
console.log(hasLongFruit);

// every()

/*
every() ensures all values match a condition.
*/

const allShortFruits = fruits.every((fruit) => fruit.length < 10);
console.log(allShortFruits);

// sort()

/*
sort() arranges elements alphabetically by default.
*/

fruits.sort();
console.log(fruits);

// reverse()

/*
reverse() reverses element order.
*/

fruits.reverse();
console.log(fruits);

// concat()

/*
concat() merges multiple arrays into one.
*/

const moreFruits = ["date", "elderberry"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);

// join()

/*
join() converts array to string using a separator.
*/

const fruitString = fruits.join(", ");
console.log(fruitString);

// Array.isArray()

/*
Checks if a value is an array.
*/

console.log(Array.isArray(fruits));
console.log(Array.isArray("hello"));

// Array.from()

/*
Creates an array from array-like or iterable objects.
*/
console.log(Array.from("hello")); // Converts string to array of characters
console.log(Array.from([1, 2, 3], (x) => x * 2)); // Maps while converting
console.log(Array.from({ name: "vinay" })); // Converts object to array of values, but gives empty array as object has no indexed properties
console.log(Array.from({ length: 3 }, (_, i) => i + 1)); // Creates array [1, 2, 3]

// Array.of()

/*
Creates an array from a variable number of arguments.
*/
let val1 = 10;
let val2 = 20;
let val3 = 30;

const arrayOfValues = Array.of(val1, val2, val3);
console.log(arrayOfValues);

// -----------------------------
// ES6 Features
// -----------------------------

// Spread Operator

/*
Spread operator expands array values into another array.
*/

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers);

// Destructuring Assignment

/*
Destructuring assigns values by index to variables.
*/

const [first, second, third] = fruits;
console.log(first);
console.log(second);
console.log(third);

// -----------------------------
// Nested Arrays
// -----------------------------

/*
Nested arrays represent multi-dimensional structures.
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][1]);
console.log(matrix[2][2]);
