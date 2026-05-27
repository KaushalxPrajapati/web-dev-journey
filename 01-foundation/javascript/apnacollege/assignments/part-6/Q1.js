// Qs1. Write a JavaScript function that returns array elements larger than a number.

// A pre-defined array of numbers.
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ask the user for input.
let num = prompt("Enter a no. b/w 0-9"); // Note: prompt() always returns the input as a string.

// Explicitly convert the input string (e.g., "5") into a number (e.g., 5).
num = parseInt(num);

// Define a function to find and print larger elements.
function getLargerElements() {
    // Loop through every element in the 'array', one by one.
    for (let i = 0; i < array.length; i++) {
        // Check if the current array element is greater than the user's number.
        // This is now a reliable number-to-number comparison.
        if (array[i] > num) {
            // If it's larger, print it to the console.
            console.log(array[i]);
        }
    }
}

// Call the function to run the code.
getLargerElements();
