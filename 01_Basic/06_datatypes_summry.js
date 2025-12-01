/*
=======================================================================
                    JAVASCRIPT DATA TYPES DOCUMENTATION
=======================================================================

JavaScript data types are classified into TWO main categories:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types

JavaScript is a DYNAMICALLY TYPED language, meaning:
- Variable types are not explicitly declared.
- Types are inferred automatically at runtime.

-----------------------------------------------------------------------
PRIMITIVE DATA TYPES (TOTAL: 7)
-----------------------------------------------------------------------

Primitive data types hold SINGLE, IMMUTABLE values:

1. String     -> Represents textual data
2. Number     -> Represents numeric values (integer & floating point)
3. Boolean    -> Represents true or false
4. Null       -> Represents intentional absence of value
5. Undefined  -> Variable is declared but not initialized
6. Symbol     -> Represents unique identifiers
7. BigInt     -> Represents large integers beyond safe limit of Number

-----------------------------------------------------------------------
*/

// String (Textual value)
const name = "John Doe";

// Number (Integer & Decimal)
const score = 100;
const pi = 3.14;

// Boolean (Logical value)
const isActive = true;

// Null (Explicit empty value)
const outsideTemperature = null;

// Undefined (Declared but not assigned)
let userEmail;

// Symbol (Each symbol is guaranteed unique)
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false (Symbols are always unique, even with same description)

// BigInt (Used for extremely large numbers)
const bigNumber = 9007199254741991n;

/*
-----------------------------------------------------------------------
NON-PRIMITIVE (REFERENCE) DATA TYPES
-----------------------------------------------------------------------

Non-primitive types store COLLECTIONS or COMPLEX entities in memory.
These values are stored in the HEAP and accessed via REFERENCES.

Common types include:

- Object
- Array
- Function
- Date
- Map, Set, WeakMap, WeakSet (Advanced structures)

-----------------------------------------------------------------------
*/

// Array (Ordered collection of values)
const heroes = ["Superman", "Batman", "Spiderman"];

// Object (Key-value structure)
const person = {
  name: "John",
  age: 30,
};

// Function (Reusable block of executable code)
const myFunction = function () {
  console.log("Hello, World!");
};

// Date Object (Current date and time)
const today = new Date();

/*
-----------------------------------------------------------------------
TYPE CHECKING USING typeof OPERATOR
-----------------------------------------------------------------------

The typeof operator returns the data type of a variable at runtime.
Note:
- typeof null returns "object" (this is a known JavaScript limitation)
-----------------------------------------------------------------------
*/

console.log(typeof name); // string
console.log(typeof score); // number
console.log(typeof isActive); // boolean
console.log(typeof outsideTemperature); // object (JavaScript quirk)
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint

console.log(typeof heroes); // object
console.log(typeof person); // object
console.log(typeof myFunction); // function
console.log(typeof today); // object

/*
-----------------------------------------------------------------------
STACK vs HEAP MEMORY ALLOCATION
-----------------------------------------------------------------------

STACK MEMORY (Primitive Types):
- Stores actual values
- Assignment copies the VALUE
- Each variable gets its own copy

HEAP MEMORY (Non-Primitive Types):
- Stores objects
- Variables store REFERENCES (memory addresses)
- Assignment copies the REFERENCE

-----------------------------------------------------------------------
*/

// Primitive memory behavior (Value copy)
let myName = "Vinay Kumar";
let anotherName = myName; // Copy of value

console.log(myName);
console.log(anotherName);

anotherName = "Viany Prabhakar";

console.log(myName); // remains unchanged
console.log(anotherName); // updated independently

// Non-Primitive memory behavior (Reference copy)
let userOne = {
  name: "Vinay Kumar",
  email: "sample@example.com",
  upi: "vinay@upi",
};

let userTwo = userOne; // Copy of reference

console.log(userOne);
console.log(userTwo);

// Updating through reference
userTwo.name = "Viany Prabhakar";

console.log(userOne); // updated
console.log(userTwo); // updated

// Another update
userOne.upi = "vinayprabhakarx@icici";

console.log(userOne);
console.log(userTwo);
