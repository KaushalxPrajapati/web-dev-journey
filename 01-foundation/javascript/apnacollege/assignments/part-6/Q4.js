// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

// A function to count vowels in *any* string you pass to it.
function countVowel(str) {
    // 'count' is declared inside the function, so it resets to 0 every time the function is called.
    let count = 0;

    // Loop through the string that was passed in.
    for (let i = 0; i < str.length; i++) {
        // Get the current character and force it to be lowercase.
        let char = str[i].toLowerCase();

        // Use .includes() to check if the lowercase character is in our vowel list.
        if (vowelList.includes(char)) {
            // If it is, increment the count.
            count++;
        }
    }
    // Return the final count.
    return count;
}

let string = "Kaushal Prajapati"; // The string we want to test.
let vowelList = ["a", "e", "i", "o", "u"];

// Call the function, pass it the 'string', and print the returned value.
console.log("The No. of vowels in the provided string is:", countVowel(string));
