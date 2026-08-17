/*
=============================================================================
Problem 1: Count Characters

Create a function called `countChar` that takes two parameters:

- `str` → a string
- `char` → the character to search for

Return the number of times `char` appears in `str`.

The comparison should be case-insensitive.

Example:
countChar("Mississippi", "I") → 4
countChar("Hello World", "l") → 3
=============================================================================
*/

function countChar(str, char) {
    let count = 0;
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countChar('Mississippi', 'I'));
