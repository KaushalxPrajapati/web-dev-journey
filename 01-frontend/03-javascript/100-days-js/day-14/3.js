/*
=============================================================================
Problem 3: Move Zeros to the End

Create a function called `moveZerosToEnd` that takes an array of numbers.

Return a new array where all zeros are moved to the end.

The order of other numbers should remain the same.

Examples:

moveZerosToEnd([0, 1, 0, 3, 12])
→ [1, 3, 12, 0, 0]

moveZerosToEnd([0, 0, 5, 2])
→ [5, 2, 0, 0]

=============================================================================
*/

function moveZerosToEnd(arr) {
    let newArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        } else {
            newArr.push(arr[i]);
        }
    }

    // Add ALL count zeros, not just one
    for (let i = 0; i < count; i++) {
        newArr.push(0);
    }

    return newArr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0] ✓
console.log(moveZerosToEnd([0, 0, 5, 2])); // [5, 2, 0, 0] ✓
