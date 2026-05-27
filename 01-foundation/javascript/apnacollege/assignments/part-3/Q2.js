// Qs2. Write a JavaScript program to get the last n elements of an array.
// For example: for array [7, 9, 0, -2] and n=3, the output should be [9, 0, -2].

// The starting array and the number of elements to get from the end.
let array = [7, 9, 0, -2];
let n = 3;

// We can use the slice() method again, but with a clever trick.
// If you give slice a negative number, it starts counting from the end of the array.
// So, slice(-3) will start 3 elements from the end and copy everything after that.

// let elements = array.slice(array.length-n, array.length);
// let elements = array.slice(array.length-n);

let elements = array.slice(-n);

console.log(elements); // Output: [9, 0, -2]