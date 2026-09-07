// Method 1
function removeDuplicates(arr) {
    let uniqueSet = new Set(arr);
    const uniqueArr = [...uniqueSet];
    return uniqueArr;
}

// Method 2
// function removeDuplicates(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (!newArr.includes(element)) {
//             newArr.push(element);
//         }
//     }
//     return newArr;
// }

console.log(removeDuplicates([1, 1, 3, 2, 4, 5, 5, 6, 3, 6])); // [1, 3, 2, 4, 5, 6]
