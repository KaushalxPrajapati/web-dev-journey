function stringToNumber(input) {
    let convertedInput = Number(input);

    if (isNaN(convertedInput)) {
        return 'Not a number';
    }

    return convertedInput;
}

console.log(stringToNumber('7'));
console.log(stringToNumber(7));
console.log(stringToNumber());
