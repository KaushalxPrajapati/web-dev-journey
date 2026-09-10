// Problem 12
// Given the following array:

let numbers = [5, 12, 18, 7, 20, 3, 15];

// Follow these steps:
//
// 1. Keep only numbers greater than 10.
// 2. Square those numbers.
// 3. Calculate the sum of the squared numbers.
//
// Store the final result in a variable called `result`.
//
// Expected output:
// 1042
//
// Requirements:
// - Use filter()
// - Use map()d
// - Use reduce()

const result = numbers
    .filter((num) => num > 10)
    .map((num) => num ** 2)
    .reduce((result, ele) => result + ele);

console.log(result);
