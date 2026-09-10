// Problem 5:
//
// Given the following array:
let prices = [120, 250, 80, 450, 300];

// Create a function called `calculateTotal`
// that accepts individual numbers as arguments
// and returns their total.
//
// Call the function using the `prices` array.
//
// Expected output:
// Total: 1200
//
// Requirements:
// 1. Use the spread operator (...) when calling the function.
// 2. Do not use loops or reduce().
// 3. Store the returned value in a variable called `total`.
// 4. Log `total`.

function calculateTotal(a, b, c, d, e, f) {
    return a + b + c + d + e;
}

const total = calculateTotal(...prices);
console.log(`Total: ${total}`);
