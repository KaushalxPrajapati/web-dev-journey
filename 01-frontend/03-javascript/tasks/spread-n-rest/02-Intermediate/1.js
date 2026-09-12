// Problem 1:
//
// Write a function called `sumAll`
// that accepts ANY number of arguments
// and returns their sum.
//
// Test cases:
// sumAll(5, 10, 15) → 30
// sumAll(2, 4, 6, 8, 10) → 30
// sumAll(100) → 100
//
// Requirements:
// 1. Use rest parameters (...) to collect all arguments.
// 2. Do not use the `arguments` object.
// 3. Do not use loops.
// 4. Use reduce() to sum the values.
// 5. Log all three test cases.

function sumAll(...args) {
    const sum = args.reduce((sum, ele) => sum + ele, 0);
    console.log(sum);
}

sumAll(5, 10, 15);
sumAll(2, 4, 6, 8, 10);
sumAll(100);
