// Problem 3
// Given the following array:
let numbers = [12, 7, 18, 5, 20, 9, 14];

// Use filter() to create a NEW array
// containing only the even numbers.
//
// Expected output:
// [12, 18, 20, 14]
//
// Store the result in a variable called `evenNumbers`.
//
// Do not modify the original `numbers` array.

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('New Array:', evenNumbers);
console.log('Original Array:', numbers);
