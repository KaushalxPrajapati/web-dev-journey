/*
=============================================================================
Problem 2: Find the First Number Greater Than a Target

Create a function called `findFirstGreater` that takes:

- an array of numbers
- a target number

Return the first number in the array that is greater than the target.

If no number is greater than the target, return:
"No number found"

Examples:
findFirstGreater([2, 5, 8, 3, 10], 6) → 8
findFirstGreater([1, 2, 3], 5) → "No number found"
=============================================================================
*/

function findFirstGreater(numArr, target) {
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > target) {
            return numArr[i];
        }
    }
    return 'No number found';
}

console.log(findFirstGreater([2, 5, 8, 3, 10], 6));
console.log(findFirstGreater([1, 2, 3], 5));
