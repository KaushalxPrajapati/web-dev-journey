// Qs4. Write a JavaScript program to test whether the character at a given
// index is lower case.

// This line is required to create the string.
let str = "ApNa CoLlEgE";
let idx = 0;

let char = str[idx];

// Check for space first
if (char === " ") {
  console.log("It's a white space");
}
// Then, check for lowercase
else if (char === char.toLowerCase()) {
  console.log("Character is in lowercase");
}
// Handle all other cases
else {
  console.log("Character is not in lowercase");
}