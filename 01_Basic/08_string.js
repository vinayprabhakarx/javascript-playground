const myName = "Vinay";
const myAge = 25;

console.log("My name is " + myName + " and i'm " + myAge + " old"); // Old way of string concatenation

// Using Template Literals (ES6 feature)
console.log(`My name is ${myName} and i'm ${myAge} old`); // Use this way

// Multi-line strings using Template Literals
const multiLineString = `Hello, my name is ${myName}.
I am ${myAge} years old.
I love coding!`;

console.log(multiLineString);

// String one other way to declare strings using String object
const myUsername = new String("vinayprabhakarx");

console.log(myUsername[0]); // Accessing characters in the string
console.log(myUsername.length); // Length of the string

// Common String Methods
console.log(`Upper case: ${myUsername.toUpperCase()}`); // Convert to uppercase
console.log(`Lower case: ${myUsername.toLowerCase()}`); // Convert to lowercase
console.log(`Index of "prabhakar": ${myUsername.indexOf("prabhakar")}`); // Find index of substring
console.log(`SubString (0, 5): ${myUsername.substring(0, 5)}`); // Extract substring using substring method
console.log(`Slice (0, 5): ${myUsername.slice(0, 5)}`); // Extract substring using slice method
console.log(`Slice (-5, 2): ${myUsername.slice(-5, 2)}`); // In slice, negative index counts from the end, but in subsring method negative index is not allowed

console.log(`Character at index 5: ${myUsername.charAt(5)}`); // Character at specific index
console.log(`Index of "a": ${myUsername.indexOf("a")}`); // Character at specific index
console.log(`Original string: ${myUsername}`); // Original string remains unchanged

const newString = "    Vinay Prabhakar   ";
console.log(`Original string with spaces: '${newString}'`);
console.log(`Trimmed string: '${newString.trim()}'`); // Remove whitespace from both ends
console.log(`Trimmed start: '${newString.trimStart()}'`); // Remove whitespace from start
console.log(`Trimmed end: '${newString.trimEnd()}'`); // Remove whitespace from end
const fistName = newString.trim().split(" ")[0]; // Split string into array and get first element
const lastName = newString.trim().split(" ")[1]; // Split string into array and get second element
console.log(`First name extracted: ${fistName}`);
console.log(`Last name extracted: ${lastName}`);

// Replace method
const url = "http://vinayprabhakar.dev";
const newUrl = url.replace("http", "https"); // Replace substring
const url2 = "https://vinay%20prabhakar.dev";

const newUrl2 = url2.replace("%20", "-"); // Replace space with hyphen
console.log(`Original URL: ${url}`);
console.log(`Updated URL: ${newUrl}`);
console.log(`Original URL2: ${url2}`);
console.log(`Updated URL2: ${newUrl2}`);

// Includes method
const phrase = "Hello, welcome to the world of JavaScript.";
console.log(`Does the phrase include 'welcome'? ${phrase.includes("welcome")}`); // true
console.log(`Does the phrase include 'Python'? ${phrase.includes("Python")}`); // false

// StartsWith and EndsWith methods
console.log(
  `Does the phrase start with 'Hello'? ${phrase.startsWith("Hello")}`
); // true
console.log(
  `Does the phrase end with 'JavaScript.'? ${phrase.endsWith("JavaScript.")}`
); // true
console.log(`Does the phrase end with 'Java'? ${phrase.endsWith("Java")}`); // false

// Repeat method
const repeatString = "Ha! ";
console.log(`Repeated string: ${repeatString.repeat(3)}`); // Repeat string 3 times

// PadStart and PadEnd methods
const number = "5";
console.log(`Padded number (start): ${number.padStart(3, "0")}`); // Pad with zeros at the start
console.log(`Padded number (end): ${number.padEnd(3, "0")}`); // Pad with zeros at the end

// Template Literals with Expressions
const a = 2;
const b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // Embedding expressions within template literals
