/*
=============================================================================
Problem 4: Find the Last Occurrence

Create a function called `findLastOccurrence` that takes:

- an array of numbers
- a target number

Return the index of the last occurrence of the target.

If the target does not exist, return -1.

Examples:
findLastOccurrence([1, 2, 3, 2, 4], 2) → 3
findLastOccurrence([5, 1, 5, 2], 5) → 2
findLastOccurrence([1, 2, 3], 7) → -1
=============================================================================
*/

function findLastOccurrence(numArr, target) {
    for (let i = numArr.length - 1; i >= 0; i--) {
        if (numArr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(findLastOccurrence([1, 2, 3, 2, 4], 2));
console.log(findLastOccurrence([5, 1, 5, 2], 5));
console.log(findLastOccurrence([1, 2, 3], 7));
