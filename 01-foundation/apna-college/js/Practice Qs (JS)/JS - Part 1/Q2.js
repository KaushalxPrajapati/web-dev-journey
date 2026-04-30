// Q1: Declare your name as a string and print its length in JS.
let myName = "Kaushal Prajapati";
console.log(myName.length); // prints 17


// Q2: Declare your first name as a string and print its first character.
let firstName = "Kaushal";
console.log(firstName[0]); // prints "K"


// Q3: Declare your first name as a string and print its last character.
console.log(firstName[firstName.length - 1]); // prints "l"


// Q4: What is the output of the following code: "apnacollege" + 123
console.log("apnacollege" + 123); // prints "apnacollege123"
// Explanation: The number 123 is converted to a string and concatenated,
// so the final result becomes a single string "apnacollege123".


// Q5: What are lengths of an empty string & a string with a single space?
let emptyString = "";
let spaceString = " ";
console.log(emptyString.length); // prints 0
console.log(spaceString.length); // prints 1