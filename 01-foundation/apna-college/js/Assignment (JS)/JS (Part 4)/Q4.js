// ------------------------------------------------------------
// Program: Calculate the factorial of a given number
// Concept: Using both 'for' loop and 'while' loop to calculate factorial
// ------------------------------------------------------------

// Step 1: Take input from the user
let n = prompt("Enter any number");

// ------------------------------------------------------------
// METHOD 1: Using a 'for' loop
// ------------------------------------------------------------

// Initialize factorial variable for for-loop method
let factorialFor = 1;

// Loop from 1 to n
for (let i = 1; i <= n; i++) {
    factorialFor = factorialFor * i; // Multiply each number with factorial
}

// Print result for for-loop
console.log("Using for loop: Factorial of", n, "is", factorialFor);

// ------------------------------------------------------------
// METHOD 2: Using a 'while' loop
// ------------------------------------------------------------

// Initialize factorial variable for while-loop method
let factorialWhile = 1;

// Initialize counter
let j = 1;

// Loop while counter <= n
while (j <= n) {
    factorialWhile = factorialWhile * j; // Multiply each number with factorial
    j++;                                 // Increment counter
}

// Print result for while-loop
console.log("Using while loop: Factorial of", n, "is", factorialWhile);

// ------------------------------------------------------------
// Explanation
// ------------------------------------------------------------
// 1. Both loops calculate factorial by multiplying numbers from 1 to n.
// 2. 'for' loop combines initialization, condition, and increment in one line.
// 3. 'while' loop separates initialization and increment but achieves the same result.
// 4. Both outputs should always be the same for the same input 'n'.
// ------------------------------------------------------------
