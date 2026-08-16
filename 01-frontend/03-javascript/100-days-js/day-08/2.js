/*
=============================================================================
Problem 2: Count Vowels

Create a function called `countVowels` that takes a string.

Count and return the total number of vowels in the string.

Vowels:
a, e, i, o, u

Example:
countVowels("javascript") → 3
countVowels("hello") → 2
=============================================================================
*/

function countVowels(str) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (vowelsArr.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(`No. of Vowels found: ${countVowels('javascript')}`);
