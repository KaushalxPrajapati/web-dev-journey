/*
=============================================================================
Problem 2: Count Positive Numbers

Create a function called `countPositiveNumbers` that takes an array of numbers.

Return the total number of positive numbers in the array.

Example:
countPositiveNumbers([-2, 5, 0, 7, -1, 3]) → 3
countPositiveNumbers([-5, -2, 0]) → 0

Note:
0 is neither positive nor negative.
=============================================================================
*/

function countPositiveNumbers(arr) {
    let totalPositiveCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            totalPositiveCount++;
        }
    }

    return totalPositiveCount;
}

console.log(countPositiveNumbers([-2, 5, 0, 7, -1, 3]));
console.log(countPositiveNumbers([-5, -2, 0]));
