// Higher-Order Functions and Arrow Functions

// Using Array Methods
const squareNumbers = (arr) => {
    const squaredNums = arr.map((i) => i ** 2);
    return squaredNums;
};

console.log(squareNumbers([1, 2, 3])); // [ 1, 4, 9 ]
console.log(squareNumbers([20, 22, 24])); // [ 400, 484, 576 ]
