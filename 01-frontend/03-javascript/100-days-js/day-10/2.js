/*
=============================================================================
Problem 2: Find the Smallest Number in an Array

Create a function called `findSmallest` that takes an array of numbers.

Return the smallest number in the array.

Do not use Math.min() or sort().

Example:
findSmallest([5, 2, 9, 1, 7]) → 1
findSmallest([-5, -2, -9, -1]) → -9
=============================================================================
*/

function findSmallest(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log('Smallest in the Array:', findSmallest([5, 2, 9, 1, 7]));
console.log('Smallest in the Array:', findSmallest([-5, -2, -9, -1]));
