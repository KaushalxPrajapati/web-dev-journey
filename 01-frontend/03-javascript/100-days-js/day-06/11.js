/*
=============================================================================
Problem 11: String Concatenation and Template Literals

Create variables for:

- Your first name
- Your last name
- Your age

Create and print one sentence using string concatenation.

Then create and print the same sentence using a template literal.

Example:

My name is Kaushal Prajapati and I am 21 years old.
=============================================================================
*/

const firstName = 'Kaushal';
const lastName = 'Prajapati';
const age = 21;

console.log(firstName + ' ' + lastName + ' and I am ' + age + ' years old.');
console.log(`${firstName} ${lastName} and I am ${age} years old.`);
