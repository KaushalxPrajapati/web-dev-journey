// ------------------------------------------------------------
// Program: Find the largest number in an array
// Concept: Comparison of 'for...of' loop vs 'for' loop methods
// ------------------------------------------------------------

// Step 1: Initialize an array with positive numbers
let array = [2, 5, 10, 4, 12, 7, 1, 8];

// Step 2: Assume the first element is the largest initially
// This is safer than using 0, since all elements might not be positive.
let largest = array[0];

// ------------------------------------------------------------
// METHOD 1: Using 'for...of' loop
// ------------------------------------------------------------
// 'for...of' directly gives each element (value) from the array.
// We compare each value with 'largest' and update if a bigger one is found.
for (let item of array) {
    if (item > largest) {
        largest = item; // Update largest value found so far
    }
}

// ------------------------------------------------------------
// METHOD 2: Using 'for' loop
// ------------------------------------------------------------
// This method uses index-based iteration (i.e., works with positions).
// Here, 'array[i]' refers to the element at index 'i'.
// The logic remains the same, only the looping style changes.
for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i]; // Update largest if current element is greater
    }
}

// ------------------------------------------------------------
// Step 3: Print the final largest number after both methods run
// ------------------------------------------------------------
console.log("Largest number:", largest);

// ------------------------------------------------------------
// Explanation of Difference
// ------------------------------------------------------------
// 1. 'for...of' loop → Simpler syntax; directly iterates over values.
// 2. 'for' loop → Uses index; more flexible if you need to access positions.
// 3. Both methods give the same result here because they compare every element.
// 4. In practice, you’d normally use one of them, not both, in a real program.
// ------------------------------------------------------------
