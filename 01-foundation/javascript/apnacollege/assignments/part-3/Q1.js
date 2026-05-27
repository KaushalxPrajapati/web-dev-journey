// Qs1. Write a JavaScript program to get the first n elements of an array.
// For example: for array [7, 9, 0, -2] and n=3, the output should be [7, 9, 0].

// The starting array and the number of elements to get.
let array = [7, 9, 0, -2];
let n = 3;

// The slice() method is the best tool here. 
// It copies a part of an array from a starting index up to an ending index.
// array.slice(0, n) will copy elements from index 0 up to (but not including) index 3.
let elements = array.slice(0, n);

console.log(elements); // Output: [7, 9, 0]