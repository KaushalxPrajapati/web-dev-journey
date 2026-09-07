function flipBoolean(value) {
    return !value;
}

console.log(flipBoolean(true)); // false
console.log(flipBoolean(false)); // true

console.log(flipBoolean(0)); // true
console.log(flipBoolean(1)); // false

console.log(flipBoolean('hello')); // false
console.log(flipBoolean('')); // true
