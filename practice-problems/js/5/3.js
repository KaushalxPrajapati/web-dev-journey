// Sum of Positive Numbers

// Method 1
// const sumPositiveNumbers = (arr) => {
//     let positiveArr = arr.filter((element) => element > 0);
//     let totalSum = positiveArr.reduce((acc, curr) => acc + curr, 0);
//     return totalSum;
// };

// console.log(sumPositiveNumbers([-10, 20, 30, 40, 50, 60]));

// Method 2
const sumPositiveNumbers = (arr) => {
    return arr
        .filter((element) => element > 0)
        .reduce((acc, curr) => acc + curr, 0);
};

console.log(sumPositiveNumbers([-10, 20, 30, 40, 50, 60]));
