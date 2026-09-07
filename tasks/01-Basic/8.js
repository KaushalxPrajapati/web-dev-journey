// Problem 8
// Given the following array:
let numbers = [15, 8, 27, 4, 19, 32];

// Use reduce() to find the SMALLEST number in the array.
//
// Store the result in a variable called `minNumber`.
//
// Expected output:
// 4
//
// Do not use Math.min().

const minNumber = numbers.reduce((min, current) => {
    if (current < min) {
        return current;
    } else {
        return min;
    }
});

console.log(minNumber); // 4
