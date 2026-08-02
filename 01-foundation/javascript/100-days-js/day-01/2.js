/*
=============================================================================
Question: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return
the first one encountered.
=============================================================================
*/

function findLongestWord(string) {
    if (string.trim().length === 0) {
        console.log('Your string is Empty!');
        return;
    }

    let stringArr = string.split(' '); // Convert to an Array
    let longestFound = '';
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > longestFound.length) {
            longestFound = stringArr[i];
        }
    }
    console.log('Longest word present is:', longestFound);
}

let string = 'I am Kaushal Prajapati';
findLongestWord(string);
