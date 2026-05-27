// ==========================================================
// PRACTICE QUESTION 1
// Task: Check if all numbers in our array are multiples of 10.
// Method: .every() -> Returns TRUE only if ALL elements pass.
// ==========================================================

// Rule: Returns TRUE only if ALL elements pass the condition.
// Analogy: The "Strict Judge" (All or Nothing).

// --------------------------------------
// CASE 1: All elements match (Success Case)
// --------------------------------------
let goodNumbers = [30, 10, 40, 70, 50, 20, 100];

// SYNTAX BREAKDOWN:
// 1. .every() is the Method.
// 2. We pass an Arrow Function (Callback) as an Argument inside ().
// 3. 'num' is the Parameter (Placeholder). You can name it anything like: (i), (el), (item), (number), etc. It just represents the CURRENT item.

// Logic: Check if every number is divisible by 10 (i.e., remainder is 0).
// To accomplish this, we use the Remainder Operator / Modulo (%) which gives the remainder of a division.

let allDivisible = goodNumbers.every((num) => num % 10 === 0);

console.log('Case 1:');
// Using Template Literals (Backticks) to show the array in the message
console.log(`Is [${goodNumbers}] multiples of 10?`, allDivisible); // Output: true


console.log('\n'); // Line break for readability


// ------------------------------------
// CASE 2: One element fails (Failure Case)
// ------------------------------------
let mixedNumbers = [30, 10, 40, 70, 5]; // Note: 5 is NOT divisible by 10.

// Here, we use 'el' (short for element) just to show flexibility.
let allDivisibleMixed = mixedNumbers.every((el) => el % 10 === 0);

console.log('Case 2:');
console.log(`Is [${mixedNumbers}] multiples of 10?`, allDivisibleMixed); // Output: false