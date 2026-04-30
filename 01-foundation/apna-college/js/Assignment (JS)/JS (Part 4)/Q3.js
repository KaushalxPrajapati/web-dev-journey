// ------------------------------------------------------------
// Program: Find the sum of all digits in a given number
// Concept: Extract each digit using modulo (%) and division (/)
// ------------------------------------------------------------

// Step 1: Initialize the number
let number = 287152;

// Step 2: Initialize 'sum' variable to store the total of all digits
let sum = 0;

// Step 3: Make a copy of 'number' so the original value remains unchanged
let copy = number;

// ------------------------------------------------------------
// Step 4: Use a while loop to extract and add digits one by one
// ------------------------------------------------------------
// The loop runs until 'copy' becomes 0
while (copy > 0) {

    // Get the last digit of 'copy' using modulo (%)
    let digit = copy % 10;

    // Add the extracted digit to 'sum'
    sum = sum + digit;

    // Remove the last digit from 'copy' using Math.floor(copy / 10)
    // Math.floor() removes the decimal part after division
    copy = Math.floor(copy / 10);
}

// ------------------------------------------------------------
// Step 5: Display the original number and the calculated sum
// ------------------------------------------------------------
console.log("Number:", number);
console.log("Its Sum:", sum);

// ------------------------------------------------------------
// Example Dry Run (number = 287152)
// ------------------------------------------------------------
// copy = 287152 → digit = 2 → sum = 2
// copy = 28715  → digit = 5 → sum = 7
// copy = 2871   → digit = 1 → sum = 8
// copy = 287    → digit = 7 → sum = 15
// copy = 28     → digit = 8 → sum = 23
// copy = 2      → digit = 2 → sum = 25
// Final Output: 25
// ------------------------------------------------------------
