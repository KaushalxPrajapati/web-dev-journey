// ==========================================================
// TOPIC: Finding Maximum Value in an Array
// ==========================================================

let numbers = [5, 2, 1, 3, 7, 9, 15, 20, 8];

// ----------------------------------------------------------
// Method 1: The Traditional Loop (Standard & Robust)
// ----------------------------------------------------------

// FIX: Initialize 'max' to the FIRST number (numbers[0]) and NOT with  0 or -1 or any number.
// Why? If we used '0', it would fail for an array of negative numbers (e.g., [-5, -7, -10]).
let maxLoop = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxLoop) {
        maxLoop = numbers[i]; // Update max if current number is bigger
    }
}

console.log("By using simple 'for' loop:");
console.log(`Maximum value of [${numbers}] is:`, maxLoop);

console.log('\n');

// ----------------------------------------------------------
// Method 2: The reduce() Method (Explicit Logic)
// ----------------------------------------------------------

let maxReduce = numbers.reduce((max, val) => {
    // 'max': The current winner (biggest number found so far).
    // 'val': The current challenger (number we are checking).

    if (val > max) {
        return val; // Challenger wins! It becomes the new max.
    } else {
        return max; // Old winner stays.
    }
});

console.log('By using reduce() method:');
console.log(`Maximum value of [${numbers}] is:`, maxReduce);

// ==========================================================
// DRY RUN (How Reduce finds the Max)
// ==========================================================
/*
   Array: [5, 2, 10, 3, 7]
   
   | Step | max (Current Winner)| val (Challenger) | Comparison (val > max?) | New 'max' |
   | :--- | :------------------ | :----------------| :-----------------------| :-------- |
   | 1    | 5                   | 2                | 2 > 5? NO               | 5         |
   | 2    | 5                   | 10               | 10 > 5? YES             | 10        |
   | 3    | 10                  | 3                | 3 > 10? NO              | 10        |
   | 4    | 10                  | 7                | 7 > 10? NO              | 10        |

   FINAL RESULT: 10
*/
