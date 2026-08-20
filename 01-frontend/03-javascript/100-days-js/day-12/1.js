/*
=============================================================================
Problem 1: Find the First Even Number

Create a function called `findFirstEven` that takes an array of numbers.

Return the first even number found in the array.

If there is no even number, return:
"No even number found"

Examples:
findFirstEven([1, 3, 7, 8, 10]) → 8
findFirstEven([5, 7, 9]) → "No even number found"
=============================================================================
*/

function findFirstEven(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            return numArr[i];
        }
    }
    return 'No even number found';
}

console.log(findFirstEven([1, 3, 7, 8, 10]));
console.log(findFirstEven([5, 7, 9]));
