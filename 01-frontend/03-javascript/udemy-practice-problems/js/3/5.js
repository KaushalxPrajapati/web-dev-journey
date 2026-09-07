function flattenArray(arr) {
    return arr.flat(Infinity);
}

const arr1 = [1, 2, [3, 4], [5, 6, 7]]; // Simple flatten array (one level)
const arr2 = [1, [2, [3, [4, 5]]]]; // Deeply nested array

console.log(flattenArray(arr1)); // [ 1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray(arr2)); // [ 1, 2, 3, 4, 5 ]
