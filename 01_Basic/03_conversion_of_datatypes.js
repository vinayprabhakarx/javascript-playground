let score = "85";
let bonus = "six"; // non-numeric string
let total = "100plus";
let wicket = "";

// Convert string to number: use Number() to convert string to number
let numericScore = Number(score);
let numericBonus = Number(bonus); // NaN
let numericTotal = Number(total); // NaN
let numericWicket = Number(wicket); // 0

console.table({
  score: typeof numericScore + " => " + numericScore,
  bonus: typeof numericBonus + " => " + numericBonus,
  total: typeof numericTotal + " => " + numericTotal,
  wicket: typeof numericWicket + " => " + numericWicket,
});

// "10" => 10 (Number)
// "10.5" => 10.5 (Number)
// "abc" => NaN
// "123abc" => NaN
// "" => 0
// " " => 0

// Number() converts the entire string strictly; any non-numeric character makes it NaN.
// parseInt() extracts an integer from the start of the string until a non-numeric character appears.

// Convert string to integer: use parseInt() to convert string to integer
let intScore = parseInt(score);
let intBonus = parseInt(bonus); // NaN
let intTotal = parseInt(total); // NaN
let intWicket = parseInt(wicket); // NaN

console.table({
  score: typeof intScore + " => " + intScore,
  bonus: typeof intBonus + " => " + intBonus,
  total: typeof intTotal + " => " + intTotal,
  wicket: typeof intWicket + " => " + intWicket,
});

// Converting into Boolean
let str1 = "Hello";
let str2 = "";
let num1 = 42;
let num2 = 0;
let undef;
let nul = null;

let boolStr1 = Boolean(str1); // true
let boolStr2 = Boolean(str2); // false
let boolNum1 = Boolean(num1); // true
let boolNum2 = Boolean(num2); // false
let boolUndef = Boolean(undef); // false
let boolNul = Boolean(nul); // false

console.table({
  str1: typeof boolStr1 + " => " + boolStr1,
  str2: typeof boolStr2 + " => " + boolStr2,
  num1: typeof boolNum1 + " => " + boolNum1,
  num2: typeof boolNum2 + " => " + boolNum2,
  undef: typeof boolUndef + " => " + boolUndef,
  nul: typeof boolNul + " => " + boolNul,
});

/* Conversion in Boolean */

// "Vinay" => true
// "" => false
// 123 => true
// 0 => false
// null => false
// undefined => false

// Converting into String
let val1 = 123;
let val2 = true;
let val3 = null;
let val4 = undefined;

let strVal1 = String(val1); // "123"
let strVal2 = String(val2); // "true"
let strVal3 = String(val3); // "null"
let strVal4 = String(val4); // "undefined"

console.table({
  val1: typeof strVal1 + " => " + strVal1,
  val2: typeof strVal2 + " => " + strVal2,
  val3: typeof strVal3 + " => " + strVal3,
  val4: typeof strVal4 + " => " + strVal4,
});

/* Conversion in String */

// 456 => "456"
// true => "true"
// null => "null"
// undefined => "undefined"

// Implicit Conversion
let implicitNum = "100" - 20; // 80 (string "100" is converted to number 100)
let implicitStr = "Hello " + 5; // "Hello 5" (number 5 is converted to string "5")
let implicitBool = "5" * true; // 5 (string "5" is converted to number 5, boolean true to 1)

console.table({
  implicitNum: typeof implicitNum + " => " + implicitNum,
  implicitStr: typeof implicitStr + " => " + implicitStr,
  implicitBool: typeof implicitBool + " => " + implicitBool,
});

/* Implicit Conversion Examples */

// "100" - 20 => 80
// "Hello " + 5 => "Hello 5"
// "5" * true => 5
// "10" / "2" => 5
// "10" + "5" => "105"
// 10 + true => 11
// 10 + false => 10
