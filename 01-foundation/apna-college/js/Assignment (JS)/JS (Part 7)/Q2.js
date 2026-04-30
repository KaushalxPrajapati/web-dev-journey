// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.

// Get input from the user and convert it to a number.
let num = Number(prompt("Enter a no. to check"));

// This is an arrow function with an "implicit return".
// The expression (num % 2 == 0) is evaluated in the function body and its result (true or false) is automatically returned.
const isEven = (num) => num % 2 === 0;

// Call the function here and store its true/false boolean value.
let result = isEven(num);

// Now we can use the stored boolean value from 'result' in our console and log it.
console.log(`Is the number ${num} even? ${result.toString().toUpperCase()}`);
