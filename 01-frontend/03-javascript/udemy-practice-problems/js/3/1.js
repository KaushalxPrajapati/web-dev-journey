// Method 1
function filterNumbers(arr) {
    return arr.filter((ele) => typeof ele === 'number');
}

// Method 2
// function filterNumbers(arr) {
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (isNaN(element)) {
//             continue;
//         } else {
//             tempArr.push(arr[i]);
//         }
//     }
//     return tempArr;
// }

const arr = [1, 'Kaushal', 4, 5, 'Hello', '6', 93];
console.log(filterNumbers(arr));
