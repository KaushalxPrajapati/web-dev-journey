/*
=============================================================================
Problem 1: Count Numbers Greater Than a Given Value

Create a function called `countGreaterThan` that takes:

- an array of numbers
- a target number

Return how many numbers in the array are greater than the target.

Example:
countGreaterThan([5, 10, 15, 20], 10) → 2
countGreaterThan([1, 2, 3, 4], 5) → 0
=============================================================================
*/

function countGreaterThan(numArr, target) {
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > target) {
            count++;
        }
    }
    return count;
}

console.log(countGreaterThan([5, 10, 15, 20], 10));
