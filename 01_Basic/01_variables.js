const accountNumber = 123456789;
let accountHolderName = "John Doe";
var accountBalance = 1000.5;
bankName = "Global Bank";

// accountNumber = 987654321; // This will cause an error
console.log("Account Number: ", accountNumber);

// Print all variables in a table format
console.table({
  accountNumber,
  accountHolderName,
  accountBalance,
  bankName,
});

/*
Preper to not use `var`, beacause of issue in block scope and function scope. 
Use `let` and `const` instead. 
*/

accountHolderName = "VINAY PRABHAKAR";
accountBalance += 5000;
bankName = "International Bank";
let userEmail;

console.table({
  accountNumber: accountNumber,
  accountHolderName: accountHolderName,
  accountBalance: accountBalance,
  bankName: bankName,
  userEmail: userEmail,
});
