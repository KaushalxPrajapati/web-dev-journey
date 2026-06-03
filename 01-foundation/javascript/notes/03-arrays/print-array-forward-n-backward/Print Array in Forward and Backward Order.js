// ------------------------------------------------------------
// Program: Print Array in Forward and Backward Order
// Concepts: Arrays, Indexing, For Loops
// ------------------------------------------------------------

// An array stores multiple values under one variable name.
// Each element has an index (starts from 0 for the first element).
let fruits = ['apple', 'banana', 'mango', 'orange', 'grape', 'pineapple', 'watermelon', 'strawberry', 'kiwi', 'papaya'];

// ------------------------------------------------------------
// Print elements in forward direction
// ------------------------------------------------------------
console.log("Printing Array Forward");

// Loop starts from index 0 and goes up to the last index (fruits.length - 1)
for (let i = 0; i < fruits.length; i++) {
    // 'i' → current index
    // 'fruits[i]' → value stored at that index
    console.log(i, fruits[i]);
}

// ------------------------------------------------------------
// Print elements in backward direction
// ------------------------------------------------------------
console.log("Printing Array Backward");

// Loop starts from last index and goes back to 0
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}

// ------------------------------------------------------------
// Notes:
// 1. Arrays use zero-based indexing (first element is index 0).
// 2. 'fruits.length' gives total number of elements in the array.
// 3. Forward loop → i++ increases index each time.
// 4. Backward loop → i-- decreases index each time.
// 5. Always ensure loop conditions (i < fruits.length, i >= 0) are correct to avoid infinite loops.
// ------------------------------------------------------------
