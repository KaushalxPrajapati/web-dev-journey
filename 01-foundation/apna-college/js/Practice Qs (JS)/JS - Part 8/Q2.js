// ==========================================================
// PRACTICE QUESTION 2
// Topic: Finding Minimum (Smallest) Value in an Array
// ==========================================================

let numbers = [5, 2, 1, 3, 7, 9, 15, 20, 8];

// ----------------------------------------------------------
// Method 1: The Traditional Loop (Standard & Robust)
// ----------------------------------------------------------

// FIX: Initialize 'min' to the FIRST number (numbers[0]).
// Why? If we initialized it to '0', the logic would fail because 0 is smaller than 5, 10, etc.
// We must start with a number that actually exists in the array.
let minLoop = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minLoop) {
        minLoop = numbers[i]; // Update min if current number is smaller
    }
}
console.log("By using simple 'for' loop:");
console.log(`Minimum value of [${numbers}] is:`, minLoop);

console.log('\n');

// ----------------------------------------------------------
// Method 2: The reduce() Method (Explicit Logic)
// ----------------------------------------------------------

let minReduce = numbers.reduce((min, val) => {
    // 'min': The current winner (smallest number found so far).
    // 'val': The current challenger (number we are checking).

    if (val < min) {
        return val; // Challenger wins! It becomes the new min.
    } else {
        return min; // Old winner stays.
    }
});

console.log('By using reduce() method:');
console.log(`Minimum value of [${numbers}] is:`, minReduce);

// ==========================================================
// DRY RUN (How Reduce finds the Min)
// ==========================================================
/*
   Array: [10, 40, 5, 20]
   
   | Step | min (Current Winner)| val (Challenger) | Comparison (val < min?) | New 'min' |
   | :--- | :------------------ | :----------------| :-----------------------| :-------- |
   | 1    | 10                  | 40               | 40 < 10? NO             | 10        |
   | 2    | 10                  | 5                | 5 < 10?  YES            | 5         |
   | 3    | 5                   | 20               | 20 < 5?  NO             | 5         |

   FINAL RESULT: 5
*/
