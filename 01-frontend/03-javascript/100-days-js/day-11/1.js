/*
=============================================================================
Problem 1: Sum of Even Numbers

Create a function called `sumEvenNumbers` that takes an array of numbers

Return the sum of all even numbers in the array

Example:
sumEvenNumbers([1, 2, 3, 4, 5, 6]) → 12
sumEvenNumbers([1, 3, 5]) → 0
=============================================================================
*/

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(`Sum of Even Numbers in the [${arr}] is: ${sumEvenNumbers(arr)}`);
