/*
=============================================================================
Problem 3: Find the Average of an Array

Create a function called `findAverage` that takes an array of numbers.

Return the average of all numbers in the array.

Example:
findAverage([10, 20, 30]) → 20
findAverage([5, 10, 15, 20]) → 12.5
=============================================================================
*/

function findAverage(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i]; // sum = sum + numArr
    }
    let avg = sum / numArr.length;
    return avg;
}

console.log(findAverage([10, 20, 30]));
console.log(findAverage([5, 10, 15, 20]));
