// ------------------------------------------------------------
// Program: Count the number of digits in a given number
// Concept: Divide the number by 10 repeatedly until it becomes 0
// ------------------------------------------------------------

// Step 1: Initialize the number
let number = 287152;

// Step 2: Initialize a counter variable to keep track of digits
let count = 0;

// ------------------------------------------------------------
// METHOD 1: Using a while loop
// ------------------------------------------------------------
// Logic: Every time we divide a number by 10 (integer division),
// the last digit is removed. We keep counting how many times
// this operation happens before the number becomes 0.

let copy = number; // Make a copy so the original value is preserved

while (copy > 0) {
    copy = Math.floor(copy / 10); // Remove the last digit (e.g., 287152 → 28715)
    count++;                      // Increment count for each removed digit
}

// ------------------------------------------------------------
// Step 3: Display the original number and the total count
// ------------------------------------------------------------
console.log("Number:", number);
console.log("Total digits:", count);

// ------------------------------------------------------------
// Example Dry Run (number = 287152)
// ------------------------------------------------------------
// copy = 287152 → count = 1
// copy = 28715  → count = 2
// copy = 2871   → count = 3
// copy = 287    → count = 4
// copy = 28     → count = 5
// copy = 2      → count = 6
// copy = 0      → Loop stops
// Final Output: Total digits = 6
// ------------------------------------------------------------
