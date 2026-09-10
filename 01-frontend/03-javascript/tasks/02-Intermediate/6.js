// Problem 14
// Given the following array:

let expenses = [120, 450, 80, 700, 250, 50];

// Find the TOTAL of only the expenses greater than 200.
//
// Store the result in a variable called `total`.
//
// Expected output:
// 1400
//
// Requirements:
// - Use filter()
// - Use reduce()
// - Do not use a for loop.

const total = expenses.filter((exp) => exp > 200).reduce((sum, ele) => sum + ele);
console.log(`Sum is: ${total}`);
