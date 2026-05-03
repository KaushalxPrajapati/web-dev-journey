// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Example: 32 and 47852 have the same last digit i.e. 2

let num1 = 32;
let num2 = 47852;

// The last digit of any number can be found using % 10 (modulus operator)
if (num1 % 10 === num2 % 10) {
    console.log("Numbers do have the same last digit, which is", num1 % 10);
} else {
    console.log("Numbers do not have the same last digit");
}