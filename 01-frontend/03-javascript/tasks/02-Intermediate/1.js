// Problem 9
// Given the following array:
let numbers = [10, 15, 20, 25, 30, 35, 40];

// Create a NEW array containing the SQUARE of only
// the numbers that are greater than 20.
//
// Expected output:
// [625, 900, 1225, 1600]
//
// Store the result in a variable called `squaredNumbers`.
//
// Requirements:
// 1. Use filter()
// 2. Use map()
// 3. Do not modify the original array.

const squaredNumbers = numbers.filter((num) => num > 20).map((num) => num ** 2);
console.log('New Array:', squaredNumbers);
console.log('Original Array:', numbers);
