const score = 400;

const balance = new Number(1000);

console.log(typeof score); // "number"
console.log(typeof balance); // "object"

console.log(balance + 500); // 1500
console.log(balance.valueOf() + 500); // 1500
console.log(Number.isInteger(score)); // true
console.log(Number.isInteger(balance)); // false
console.log(Number.parseFloat("123.45")); // 123.45
console.log(Number.parseInt("123.45")); // 123
console.log(score.toFixed(2)); // "400.00"
console.log(balance.toFixed(2)); // "1000.00"
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(score)); // false
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
