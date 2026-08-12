/*
=============================================================================
Problem 1: Largest of Three Numbers

Create a function called `findLargest` that takes three numbers as parameters.

Return the largest number among the three.

Example:
findLargest(10, 25, 15) → 25

Do not use Math.max().
=============================================================================
*/

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return `Largest: ${a}`;
    } else if (b >= a && b >= c) {
        return `Largest: ${b}`;
    } else {
        return `Largest: ${c}`;
    }
}

console.log(findLargest(10, 10, 5));
