/*
=============================================================================
Problem 1: Find the Second Largest Number

Create a function called `findSecondLargest` that takes an array of numbers.

Return the second largest distinct number in the array.

Examples:
findSecondLargest([10, 5, 8, 20, 15]) → 15
findSecondLargest([5, 5, 3, 2]) → 3
findSecondLargest([10, 10, 10]) → "No second largest number"

Do not use Math.max() or sort().
=============================================================================
*/

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return 'No second largest number';
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (current > largest) {
            secondLargest = largest;
            largest = current;
        } else if (current > secondLargest && current !== largest) {
            secondLargest = current;
        }
    }

    if (secondLargest === -Infinity) {
        return 'No second largest number';
    }

    return secondLargest;
}

console.log(findSecondLargest([10, 5, 8, 20, 15])); // 15
console.log(findSecondLargest([5, 5, 3, 2])); // 3
console.log(findSecondLargest([10, 10, 10])); // No second largest number
