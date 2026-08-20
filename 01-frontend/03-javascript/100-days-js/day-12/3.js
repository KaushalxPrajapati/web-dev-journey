/*
=============================================================================
Problem 3: Count Occurrences of a Number

Create a function called `countOccurrences` that takes:

- an array of numbers
- a target number

Return how many times the target appears in the array.

Examples:
countOccurrences([1, 2, 2, 3, 2, 4], 2) → 3
countOccurrences([5, 5, 1, 5], 5) → 3
countOccurrences([1, 2, 3], 7) → 0
=============================================================================
*/

function countOccurrences(numArr, target) {
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === target) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));
console.log(countOccurrences([5, 5, 1, 5], 5));
