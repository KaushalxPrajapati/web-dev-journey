/*
=============================================================================
Problem 2: Find the Largest Number in an Array

Create a function called `findLargest` that takes an array of numbers.

Return the largest number in the array.

Do not use Math.max() or sort().

Example:
findLargest([5, 2, 9, 1, 7]) → 9
findLargest([-5, -2, -9, -1]) → -1
=============================================================================
*/

function findLargest(numArr) {
    let largest = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (largest < numArr[i]) {
            largest = numArr[i];
        }
    }
    return largest;
}

console.log(findLargest([10, 2, 9, 1, 7]));
console.log(findLargest([-5, -2, -9, -1]));
