/*
=============================================================================
Problem 3: Reverse a String

Create a function called `reverseString` that takes a string.

Return the string in reverse order.

Example:
reverseString("hello") → "olleh"
reverseString("JavaScript") → "tpircSavaJ"

Do not use the built-in `reverse()` method.
=============================================================================
*/

function reverseString(str) {
    let reverse = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}

console.log(reverseString('kaushal'));
console.log(reverseString('hello'));
console.log(reverseString('JavaScript'));
