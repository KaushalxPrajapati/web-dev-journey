// ------------------------------
// Qs: Print even numbers from 2 to 10
// ------------------------------

// Forward Loop (2 → 10)
// Initialization: i = 2 (start at first even number)
// Condition: i <= 10 (loop runs until 10 is reached)
// Update: i += 2 (increase by 2 each time → only even numbers)

let n = 20;

console.log('Forward even numbers:');
for (let i = 2; i <= n; i += 2) {
    console.log(i); // Print the current even number
}
// Output: Forward even numbers: 2 4 6 8 10

// Backward Loop (10 → 2)
// Initialization: i = 10 (start at largest even number ≤ 10)
// Condition: i >= 2 (loop runs until 2 is reached)
// Update: i -= 2 (decrease by 2 each time → step backward through evens)
console.log('Backward even numbers:');
for (let i = n; i >= 2; i -= 2) {
    console.log(i); // Print the current even number in reverse order
}
// Output: Backward even numbers: 10 8 6 4 2
