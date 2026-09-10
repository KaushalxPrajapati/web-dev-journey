// Problem 5
// Given the following array:
let numbers = [10, 20, 30, 40, 50];

// Use every() to check whether ALL numbers
// are greater than 5.
//
// Store the result in a variable called `allGreaterThanFive`.
//
// Expected output:
// true

const allGreaterThanFive = numbers.every((num) => num > 5);
console.log(allGreaterThanFive);
