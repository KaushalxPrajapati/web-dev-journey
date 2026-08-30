/*
=============================================================================
Problem 1: Remove Duplicates from an Array

Create a function called `removeDuplicates` that takes an array of numbers.

Return a new array containing only unique values.

Examples:

removeDuplicates([1, 2, 2, 3, 4, 4, 5])
→ [1, 2, 3, 4, 5]

removeDuplicates([5, 5, 5, 5])
→ [5]

Do not use Set() yet. Solve it using loops and logic.
=============================================================================
*/

function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
