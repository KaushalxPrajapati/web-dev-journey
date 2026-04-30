// ------------------------------
// Qs: Print odd numbers from 1 to 15
// ------------------------------

// Forward Loop (1 → 15)
// Initialization: i = 1 (start at first odd number)
// Condition: i <= 15 (loop runs until 15 is reached)
// Update: i += 2 (increase by 2 each time → only odd numbers)
console.log('Forward odd numbers:');
for (let i = 1; i <= 15; i += 2) {
    console.log(i); // Print the current odd number
}
// Output: Forward odd numbers: 1 3 5 7 9 11 13 15

// Backward Loop (15 → 1)
// Initialization: i = 15 (start at largest odd number ≤ 15)
// Condition: i >= 1 (loop runs until 1 is reached)
// Update: i -= 2 (decrease by 2 each time → step backward through odds)
console.log('Backward odd numbers:');
for (let i = 15; i >= 1; i -= 2) {
    console.log(i); // Print the current odd number in reverse order
}
// Output: Backward odd numbers: 15 13 11 9 7 5 3 1
