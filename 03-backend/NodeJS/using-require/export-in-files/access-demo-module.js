// It's data type is 'object' but Datatype depends entirely on what was exported.
const exportedObject = require('./demo'); // whole object

console.log('Sum:', exportedObject.sum(7, 6));
console.log('Subtraction:', exportedObject.sub(10, 5));
console.log('Multiplication:', exportedObject.mul(3, 2));
console.log('Division:', exportedObject.div(20, 5));
console.log('Value of pi:', exportedObject.PI);
console.log('Value of g:', exportedObject.G);
