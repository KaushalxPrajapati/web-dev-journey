// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
// e.g., 0.234, 0.789, etc.
let dice = Math.floor(Math.random() * 6) + 1;

// Explanation of the calculation:
// 1. Math.random() * 6 → gives a number from 0 up to (but not including) 6
//    e.g., 0.234*6 = 1.404, 0.789*6 = 4.734
// 2. Math.floor(...) → rounds the decimal down to the nearest whole number
//    e.g., 1.404 → 1, 4.734 → 4
// 3. +1 → shifts the range from 0–5 to 1–6 (like a real dice)

// Print the result of the dice roll to the console
console.log(dice);