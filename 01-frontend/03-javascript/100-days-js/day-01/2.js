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
    let longestFound = stringArr[0]; // Let assume the first element in the array is the longest word to continue

    // Looping through each element in the array and comparing it to the longest found so far
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > longestFound.length) {
            longestFound = stringArr[i];
        }
    }
    console.log('Longest word present is:', longestFound);
}

let string = 'I am Kaushal Prajapati';
findLongestWord(string);
