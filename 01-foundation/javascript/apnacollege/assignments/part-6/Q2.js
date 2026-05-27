// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh"
// ans = "abcdefgh"

let str = "abcdabcdefgggh";

// This function finds all unique characters in a string.
function findUniqueChar(str) {
    // 'ans' will store our string of unique characters.
    let ans = "";

    // Loop through each character of the input string.
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        // Check if the 'currentChar' is already in our 'ans' string.
        // .indexOf() returns -1 if the character is not found.
        if (ans.indexOf(currentChar) == -1) {
            // If it's not found, add it to the end of 'ans'.
            ans += currentChar;
        }
        // If it is found (not -1), we do nothing and let the loop continue.
    }

    // After the loop finishes, return the complete string of unique characters.
    return ans;
}

// Call the function and print its return value to the console.
console.log(findUniqueChar(str));
