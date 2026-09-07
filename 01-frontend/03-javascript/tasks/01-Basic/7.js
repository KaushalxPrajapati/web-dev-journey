// Problem 7
// Given the following array:
let numbers = [23, 7, 45, 12, 89, 34];

// Use reduce() to find the LARGEST number in the array.
//
// Store the result in a variable called `maxNumber`.
//
// Expected output:
// 89

// Method 1:
const maxNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
});
console.log(maxNumber); // 89


// Method 2:
const maxNumber2 = numbers.reduce((max, current) => {
    if (current > max) {
        return current;
    } else {
        return max;
    }
});

console.log(maxNumber2); // 89
