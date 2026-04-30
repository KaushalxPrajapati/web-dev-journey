// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let str = prompt("Please enter a string with spaces");

// Check if the user provided a string to prevent errors with null.
if (str) {
  // .trim() removes whitespace from both ends of the string.
  console.log("Original:", str);
  console.log("Trimmed:", str.trim());
} else {
  // Handle the case where the user clicked "Cancel".
  console.log("You clicked Cancel.");
}