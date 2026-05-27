// Qs3. Write a JavaScript program to check whether a string is blank or not,
// using an interactive prompt for user input.

// prompt() shows a pop-up box asking the user for input.
// The user's text is stored in the 'userInput' variable.
// If the user clicks "Cancel", userInput becomes the special value 'null'.
let userInput = prompt("Please enter a string or leave it blank");

// We check for two "blank" conditions:
// 1. Is the input null? (User pressed Cancel)
// 2. Or, is the trimmed length of the input 0? (User entered "" or " ")
// We must check for null FIRST to avoid an error.
if (userInput === null || userInput.trim().length === 0) {
  console.log("The input is blank.");
} else {
  console.log("The input is not blank.");
}
