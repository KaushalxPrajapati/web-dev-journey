// ------------------------------------------------------------
// Program: Print a 2D Array (Array of Arrays) of Heroes
// Concepts: Nested Arrays, Nested Loops, Indexing
// ------------------------------------------------------------

// A 2D array is an array that contains other arrays as elements.
// In this example, 'heroes' contains 2 sub-arrays, each holding 3 hero names.
let heroes = [
    ['ironman', 'spiderman', 'thor'],   // Sub-array at index 0
    ['batman', 'superman', 'flash']     // Sub-array at index 1
];

// ------------------------------------------------------------
// Outer Loop: Iterates over the main array (each sub-array)
// ------------------------------------------------------------

// 'heroes.length' gives the number of sub-arrays in the main array (here it is 2).
// 'i' is the index of the current sub-array in the outer array.
for (let i = 0; i < heroes.length; i++) {
    console.log("List", i, "Elements:"); // Display which sub-array we are printing

    // ------------------------------------------------------------
    // Inner Loop: Iterates over elements inside the current sub-array
    // ------------------------------------------------------------

    // 'heroes[i]' refers to the current sub-array.
    // 'heroes[i].length' gives the number of elements in this sub-array (here it is 3).
    // 'j' is the index of the current element inside the sub-array.
    for (let j = 0; j < heroes[i].length; j++) {
        // Access each element using heroes[i][j]:
        // i → index of sub-array (row)
        // j → index of element inside sub-array (column)
        // Example: heroes[0][1] → 'spiderman'
        console.log(heroes[i][j]);
    }
}

// ------------------------------------------------------------
// Summary and Key Concepts:
// ------------------------------------------------------------
// 1. A 2D array is essentially an array of arrays. Each element of the main array is itself an array.
// 2. Outer loop (i) iterates through sub-arrays.
// 3. Inner loop (j) iterates through elements inside the current sub-array.
// 4. To access any element, use heroes[i][j] → first index for sub-array, second for element.
// 5. 'heroes.length' → number of sub-arrays, 'heroes[i].length' → number of elements in a sub-array.
// 6. Nested loops are necessary whenever you work with multi-dimensional arrays (2D, 3D, etc.).
// 7. This pattern can be extended to any number of dimensions by adding more nested loops.
// ------------------------------------------------------------
