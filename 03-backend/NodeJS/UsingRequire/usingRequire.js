const exportedObj = require('./math');

console.log('Sum:', exportedObj.sum(1, 2));
console.log('Multiplication:', exportedObj.mul(3, 2));
console.log('Value of pi:', exportedObj.pi);
console.log('Value of g:', exportedObj.g);

console.log('');

// Same directory but inside a folder named 'Fruits'
const info = require('./Fruits');

info.forEach((i) => {
    console.log(`${i.name} is ${i.color}`);
});

/* 
OUTPUT: 
Sum: 3
Multiplication: 6
Value of pi: 3.14
Value of g: 9.81

Apple is red
Banana is yellow
Orange is orange
*/
