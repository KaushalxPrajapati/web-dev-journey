// ==========================================================
// TOPIC: The .reduce() Method
// Purpose: Reduces a list of values down to a SINGLE value (like a Sum).
// ==========================================================

let nums = [1, 2, 3, 4, 5];

// SYNTAX: array.reduce((accumulator, currentElement) => operation);

// ----------------------------------------------------------
// Method 1: Explicit Return (The "Detailed" Way)
// Use this when you need multiple lines of logic (e.g., logging).
// ----------------------------------------------------------

let sum1 = nums.reduce((result, value) => {
    // 'result': The storage variable that holds the total so far.
    // 'value':  The current number we are adding.
    return result + value;
});

console.log('Final Sum:', sum1); // Output: 15

// ----------------------------------------------------------
// Method 2: Implicit Return (The "One-Liner" / Industry Standard)
// ----------------------------------------------------------

// 'result': Accumulates the total.
// 'value':  The current number being added.
let sum2 = nums.reduce((result, value) => result + value);

console.log('Final Sum:', sum2); // Output: 15

// ==========================================================
// DRY RUN (How JavaScript calculates it step-by-step)
// ==========================================================
/*
   Initial State: 'result' takes the first number (1). 
                  'value' starts at the second number (2).

   | Step | result (Total so far) | value (Current No.)  | Calculation | New 'result'|
   | :--- | :-------------------- | :------------------- | :---------- | :---------- |
   | 1    | 1                     | 2                    | 1 + 2       | 3           |
   | 2    | 3                     | 3                    | 3 + 3       | 6           |
   | 3    | 6                     | 4                    | 6 + 4       | 10          |
   | 4    | 10                    | 5                    | 10 + 5      | 15          |

   FINAL RESULT: 15
*/
