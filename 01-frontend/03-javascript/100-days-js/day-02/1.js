/*
=============================================================================
Question: You are required to implement a function generateHash that generates a hash tag from a given input string.

The hash tag should be constructed as follows:
- The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
- If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
- Otherwise, the function should return the generated hash tag prefixed with #.
=============================================================================
*/

// Hash Tag Generator
function generateHash(str) {
    if (str.length > 280 || str.trim().length === 0) {
        return;
    }

    let strArr = str.trim().split(' ');
    let tag = '';
    for (let i = 0; i < strArr.length; i++) {
        tag = tag + (strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
    }
    let hashTag = `#` + tag;
    console.log(hashTag);
}

let str = '                   Men are Brave  ';
generateHash(str);
