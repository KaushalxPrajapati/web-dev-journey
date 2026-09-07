// Method 1
function findMax(arr) {
    return Math.max(...arr);
}

// Method 2
// function findMax(arr) {
//     let largestElement = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (largestElement < element) {
//             largestElement = element;
//         }
//     }
//     return largestElement;
// }

// console.log(findMax(arr));

const arr = [5, 20, 8, 42, 13];
console.log(findMax(arr));
