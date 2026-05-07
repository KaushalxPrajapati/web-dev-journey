const apple = require('./apple');
const banana = require('./banana');
const orange = require('./orange');

// Will return the same thing what we have written in their individual files, an object
// console.log(apple);
// console.log(banana);
// console.log(orange);

let fruits = [apple, banana, orange];
module.exports = fruits;
// console.log(module.exports);