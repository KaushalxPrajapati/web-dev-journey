// Problem 6
// Given the following array:
let numbers = [10, 20, 30, 40, 50];

// Use reduce() to calculate the SUM of all numbers.
//
// Store the result in a variable called `total`.
//
// Expected output:
// 150

const total = numbers.reduce((acc, ele) => acc + ele);
console.log(`Sum is ${total}`);
