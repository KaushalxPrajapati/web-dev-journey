// ------------------------------------------------------------
// Program: Remove all occurrences of a specific number from an array
// Concept: Comparison of 'for loop' vs 'while loop' methods
// ------------------------------------------------------------

// Initial array with duplicate numbers
let array = [1, 4, 3, 3, 2, 5, 7];
let num = 3;  // The number we want to remove

console.log("Original Array:", array);
console.log("Number to remove:", num);



// ------------------------------------------------------------
// METHOD 1: Using a 'for loop'
// ------------------------------------------------------------

// In this approach, we loop through the array and remove the element if it matches 'num'.
// However, using splice() inside a forward loop can cause the loop to skip elements,
// because removing shifts all elements after that index to the left.

for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
        array.splice(i, 1); // Removes one element at index i
        i--; // Decrease index by 1 to recheck the shifted element
    }
}

console.log("After removing using 'for loop':", array);



// ------------------------------------------------------------
// Reset the array to original for next test
// ------------------------------------------------------------

array = [1, 4, 3, 3, 2, 5, 7];

// ------------------------------------------------------------
// METHOD 2: Using a 'while loop'
// ------------------------------------------------------------

// This method is often simpler and safer.
// The logic: while the array still contains 'num', find its index and remove it.

while (array.includes(num)) {
    let idx = array.indexOf(num);          // Find index of 'num'
    console.log("Number removed:", array.splice(idx, 1)); // Remove the element and print it
}

console.log("After removing using 'while loop':", array);



// ------------------------------------------------------------
// Explanation of Difference
// ------------------------------------------------------------
// 1. The 'for loop' method manually controls the iteration and needs index adjustment (i--)
//    because removing elements shifts the rest of the array.
// 2. The 'while loop' method relies on array methods (includes() + indexOf())
//    to repeatedly find and remove occurrences until none are left.
// 3. The 'while' method is easier to read and less error-prone.
// 4. The 'for' method gives more control but requires careful index handling.
// ------------------------------------------------------------
