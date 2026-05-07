// Expanded Way to write :- (Long and not efficient)
// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;
// const PI = 3.14; // Mathematical constant - uppercase by convention
// const G = 9.81;  // Gravitational constant - uppercase by convention

// module.exports = {
//     sum: sum, // shorthand in ES6 would just be: sum,
//     sub: sub,
//     mul: mul,
//     div: div,
//     PI: PI,
//     G: G,
// };

// -----------------------------------------------

// Concise to write - skip the variable, attach directly to module.exports
// module.exports.sum = (a, b) => a + b;
// module.exports.sub = (a, b) => a - b;
// module.exports.mul = (a, b) => a * b;
// module.exports.div = (a, b) => a / b;
// module.exports.PI = 3.14;
// module.exports.G = 9.81;

// -----------------------------------------------

// Most Concise - 'exports' is a shorthand reference to 'module.exports'
// Avoid mixing exports and module.exports in the same file — it breaks the reference
exports.sum = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.mul = (a, b) => a * b;
exports.div = (a, b) => a / b;
exports.PI = 3.14; // uppercase = constant value, never changes
exports.G = 9.81; // uppercase = constant value, never changes

// -----------------------------------------------
