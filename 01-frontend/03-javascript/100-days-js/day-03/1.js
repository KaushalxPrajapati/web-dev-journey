/*
=============================================================================
Question: Write a function called countChar that takes two parameters: a string and a character to count.
The function should return the number of times the specified character appears in the string.
=============================================================================
*/

// Method 1:
function countChar1(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();

    let strArr = str.split('');

    return strArr.reduce((acc, curChar) => {
        if (curChar === char) {
            acc++;
        }
        return acc;
    }, 0);
}

// Method 2:
function countChar2(str, char) {
    return [...str.toLowerCase()].reduce((count, current) => {
        return current === char.toLowerCase() ? count + 1 : count;
    }, 0);
}

console.log(countChar1('Mississippi', 'I'));
console.log(countChar2('Mississippi', 'I'));
