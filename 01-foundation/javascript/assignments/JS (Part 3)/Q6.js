// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let array = ["hello", 'a', 23, 64, 99, -6];
let item = 64;

// The .includes() method is the most modern way to check for an element.
// It directly returns true if the element is found, otherwise it returns false.
if (array.includes(item)) {
    console.log("Element exists in the array.");
} else {
    console.log("Element does not exist in the array.");
}