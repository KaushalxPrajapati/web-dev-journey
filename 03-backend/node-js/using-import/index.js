// Method 1 — specific imports
import { sum, PI } from './math.js';

console.log(sum(2, 3));
console.log(PI);


console.log('');


// Method 2 — namespace import (means it imports everything and then we cab access using dot notation)
// import * as math from './math.js';

// console.log(math.sum(3, 4));
// console.log(math.mul(5, 5));
// console.log(math.PI);
// console.log(math.G);