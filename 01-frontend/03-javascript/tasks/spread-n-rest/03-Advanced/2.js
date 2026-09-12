// Problem 2:
//
// Write a function called `buildUser`
// that accepts:
// - `name` (required, first parameter)
// - `email` (required, second parameter)
// - Any number of additional properties as key-value pairs
//
// The function should return an object with:
// - name and email explicitly included
// - All additional key-value pairs spread into the object
//
// Test case:
// buildUser('Kaushal', 'kaushal@gmail.com', 'role', 'developer', 'experience', '2 years')
//
// Expected output:
// {
//   name: 'Kaushal',
//   email: 'kaushal@dev.com',
//   role: 'developer',
//   experience: '2 years'
// }
//
// Requirements:
// 1. Use rest parameters (...) to collect the additional pairs.
// 2. Do not use loops or Object.assign().
// 3. Log the returned object.

function buildUser(personName, personEmail, ...otherDetails) {
    const extras = otherDetails.reduce((obj, _, idx, arr) => {
        if (idx % 2 === 0) {
            // every even index is a key (This is the logic to grab the keys' first)
            obj[arr[idx]] = arr[idx + 1]; // pair it with the next element (value)
        }
        return obj;
    }, {});

    return {
        name: personName,
        email: personEmail,
        ...extras, // spread the constructed object
    };
}

console.log(buildUser('Kaushal', 'kaushal@dev.com', 'role', 'developer', 'experience', '2 years'));
