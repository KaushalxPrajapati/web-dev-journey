// Problem 2:
//
// Given the following array:
let scores = [85, 92, 78, 96, 88];

// Find the HIGHEST score using Math.max()
// and the LOWEST score using Math.min().
//
// Store them in:
// `highestScore`
// `lowestScore`
//
// Requirements:
// 1. Use the spread operator (...) when passing the array to Math.max() and Math.min().
// 2. Do not use loops, sort(), or reduce().
// 3. Log both results.
//
// Expected output:
// Highest Score: 96
// Lowest Score: 78

const highestScore = Math.max(...scores);
console.log(`Highest Score: ${highestScore}`);

const lowestScore = Math.min(...scores);
console.log(`Lowest Score: ${lowestScore}`);
