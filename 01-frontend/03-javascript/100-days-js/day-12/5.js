/*
=============================================================================
Problem 5: Check Whether an Array Is Sorted

Create a function called `isSorted` that takes an array of numbers.

Return:
- true if the array is sorted in ascending order.
- false if the array is not sorted.

Examples:
isSorted([1, 2, 3, 4, 5]) → true
isSorted([1, 3, 2, 4]) → false
isSorted([5]) → true
=============================================================================
*/

function isSorted(numArr) {
    for (let i = 0; i < numArr.length - 1; i++) {
        if (numArr[i] > numArr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 3, 2, 4]));
console.log(isSorted([5]));
