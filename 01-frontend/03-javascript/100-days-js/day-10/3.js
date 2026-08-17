/*
=============================================================================
Problem 3: Count Even Numbers

Create a function called `countEvenNumbers` that takes an array of numbers.

Return the total number of even numbers in the array.

Example:
countEvenNumbers([1, 2, 3, 4, 5, 6]) → 3
countEvenNumbers([7, 9, 11]) → 0
=============================================================================
*/

function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(countEvenNumbers([7, 9, 11]));
