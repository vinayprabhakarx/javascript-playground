let someNumber = 3;
let num = -5;

// Using the unary negation operator to convert to a number
let negValue = -someNumber;
console.log("Negative Value: " + someNumber);

// Using the unary plus operator to convert to a number
let posValue = +num;
console.log("Positive Value: " + posValue);

// Simple Math operations
console.table({
  addition: someNumber + 2,
  subtraction: someNumber - 2,
  multiplication: someNumber * 2,
  Power: someNumber ** 2,
  division: someNumber / 2,
  modulus: someNumber % 2,
});

//Operations that involve type conversion
let str1 = "Vinay ";
let str2 = "Prabhakar";
console.log("String Concatenation: " + str1 + str2);

let strNum = "10";
let actualNum = 5;

// String to Number conversion during addition
console.log("String to Number Addition: " + (+strNum + actualNum));

// String to Number conversion during subtraction
console.log("String to Number Subtraction: " + (strNum - actualNum));

// String to Number conversion during multiplication
console.log("String to Number Multiplication: " + strNum * actualNum);

// String to Number conversion during division
console.log("String to Number Division: " + strNum / actualNum);

// String to Number conversion during modulus
console.log("String to Number Modulus: " + (strNum % actualNum));

// Demonstrating NaN result
let invalidStrNum = "10abc";
console.log(
  "Invalid String to Number Addition (NaN): " + (+invalidStrNum + actualNum)
);
console.log(
  "Invalid String to Number Multiplication (NaN): " + invalidStrNum * actualNum
);

console.log("2" + 3);
console.log("2" + 2 + "3");
console.log(2 + 3 + "5");
console.log("1" + 2 + 3);

// Tricky Conversions
console.log(+true);
// console.log(true +); // Not Allowed
console.log(+"");

// Increment and Decrement Operators
let count = 10;
console.log("Initial Count: " + count);

// Postfix Increment
console.log("Postfix Increment: " + count++);
console.log("After Postfix Increment Count: " + count);

// Prefix Increment
console.log("Prefix Increment: " + ++count);
console.log("After Prefix Increment Count: " + count);

// Postfix Decrement
console.log("Postfix Decrement: " + count--);
console.log("After Postfix Decrement Count: " + count);

// Prefix Decrement
console.log("Prefix Decrement: " + --count);
console.log("After Prefix Decrement Count: " + count);

// Mixing Increment/Decrement with other operations
let mixCount = 5;
let result = mixCount++ + ++mixCount + mixCount-- + --mixCount;
console.log("Result of Mixed Operations: " + result);
console.log("Final mixCount Value: " + mixCount);
