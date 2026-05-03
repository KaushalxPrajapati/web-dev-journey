// ===================================
// TOPIC: Array Filtering (.filter)
// ===================================
//

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ----------------------------
// TASK 1: Filter Even Numbers
// ----------------------------

// Method 1: The "Explicit Return" Way
let newArray1 = array.filter((i) => {
    return i % 2 === 0;
});
console.log(newArray1);

// Method 2: The "Implicit Return" Way (Industry Standard)
// Writing arrow function in one line by removing 'return' keyword and replacing curly braces{} with parentheses().

let newArray2 = array.filter((i) => i % 2 === 0);
console.log(newArray2);

// ---------------------------
// TASK 2: Filter Odd Numbers
// ---------------------------

// Method 1: The "Explicit Return" Way
let newArray3 = array.filter((i) => {
    return i % 2 !== 0;
});
console.log(newArray3);

// Method 2: The "Implicit Return" Way (Industry Standard)
// Writing arrow function in one line by removing 'return' keyword and replacing curly braces{} with parentheses().
let newArray4 = array.filter((i) => i % 2 !== 0);

console.log(newArray4);
