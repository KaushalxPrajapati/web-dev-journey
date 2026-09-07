function isItTruthy(input) {
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

console.log(isItTruthy('Kaushal')); // It's truthy!
console.log(isItTruthy(1)); // It's truthy!
console.log(isItTruthy(0)); // It's falsey!
console.log(isItTruthy('')); // It's falsey!
console.log(isItTruthy(true)); // It's truthy!
console.log(isItTruthy(false)); // It's falsey!
console.log(isItTruthy(null)); // It's falsey!
console.log(isItTruthy(undefined)); // It's falsey!
