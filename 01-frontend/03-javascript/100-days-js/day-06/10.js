/*
=============================================================================
Problem 10: Type Conversion

Create a variable containing the string `"25"`.

Convert it into a number and:

- Add 5 to it
- Multiply it by 2
- Print the final results

Also print the data type before and after conversion using `typeof`.
=============================================================================
*/

let num = '25';
console.log(typeof num);

num = Number(num);
console.log(typeof num);

num += 5; // Adding +5
num *= 2; // Multiplying by 2
console.log(num);
