function whatAmI(input) {
    let inputType = typeof input;

    if (inputType === 'number') {
        return "I'm a number!";
    } else if (inputType === 'string') {
        return "I'm a string!";
    } else {
        return 'Unidentified!';
    }
}

console.log(whatAmI(1)); // I'm a number!
console.log(whatAmI('Kaushal')); // I'm a string!
console.log(whatAmI()); // Unidentified!
