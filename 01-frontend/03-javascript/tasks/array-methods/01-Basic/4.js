// Problem 4
// Given the following array:
let numbers = [5, 12, 8, 3, 19, 7];

// Use some() to check whether the array
// contains at least one number greater than 15.
//
// Store the result in a variable called `hasLargeNumber`.
//
// Expected output:
// true

const hasLargeNumber = numbers.some((num) => num > 15);
console.log(hasLargeNumber);
