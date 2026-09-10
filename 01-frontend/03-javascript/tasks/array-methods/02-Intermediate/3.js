// Problem 11
// Given the following array:

let numbers = [10, 25, 8, 42, 15, 30];

// Use reduce() to count how many numbers are GREATER than 20.
//
// Store the result in a variable called `count`.
//
// Expected output:
// 3
//
// Do not use filter().
// Use reduce() for the countin

let count = 0;
numbers.reduce((acc, ele) => {
    if (ele > 20) {
        count++;
    }
});
console.log('Total Count:', count);
