// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.

// Example array of country names.
let country = [
    "Australia",
    "Germany",
    "United States of America",
    "India",
    "Russia",
];

// This function finds the longest string in an array of strings.
function longestName(country) {
    // Assume the first country is the longest to start.
    let longestSoFar = country[0];

    // Loop through all countries in the array.
    for (let i = 0; i < country.length; i++) {
        // Get the length of the country we are currently checking.
        let currentCountryLength = country[i].length;

        // Get the length of the longest country we have found *so far*.
        let longestLengthSoFar = longestSoFar.length;

        // Compare the lengths.
        if (currentCountryLength > longestLengthSoFar) {
            // <-- This line is now correct.
            // If the current country length is longer, update 'longestSoFar'
            // to be the current country.
            longestSoFar = country[i];
        }
    }

    // After checking all countries, return the one we saved as the longest.
    return longestSoFar;
}

// Call the function and print the result.
console.log(longestName(country));
