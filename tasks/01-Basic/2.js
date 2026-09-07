// Problem 2
// Given the following array:
let numbers = [2, 4, 6, 8, 10];

// Use map() to create a NEW array
// containing the square of each number.
//
// Expected output:
// [4, 16, 36, 64, 100]
//
// Store the new array in a variable called `squares`.
//
// Do not modify the original `numbers` array.

let squares = numbers.map((num) => num ** 2);
console.log('New Array:', squares);
console.log('Original Array:', numbers);
