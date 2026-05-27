// Qs5. Write a JavaScript function to generate a random number within a range (start, end).

let start = 1;
let end = 10;

// This function generates a random whole number between 'start' and 'end' (inclusive).
function genRandomNo(start, end) {
    // 1. Calculate the size of the range (e.g., 10 - 1 + 1 = 10). We add +1 to make the range INCLUSIVE (so 'end' is a possible result).
    // 2. Get a random decimal from 0 up to (but not including) 'size'. (Math.random() * range) -> Gives e.g., 0 to 9.99...
    // 3. Floor it to get a whole number from 0 to 'size - 1'. (Math.floor(...))       -> Chops decimals to get integer 0 to 9.
    // 4. Add 'start' to shift the range (e.g., 0-9 becomes 1-10). (... + start)           -> Shifts the starting point from 0 to 1.

    let size = end - start + 1; // Difference of them or the RANGE!
    let randomInt = Math.floor(Math.random() * size) + start;

    // Return the final random number.
    return randomInt;
}

// Call the function and print the result.
console.log(`Random no. from (${start}-${end}) is: ${genRandomNo(start, end)}`);
