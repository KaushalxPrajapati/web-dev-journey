/*
=============================================================================
Problem 2: Find Common Elements Between Two Arrays

Create a function called `findCommonElements` that takes two arrays.

Return a new array containing elements that exist in both arrays.

Examples:

findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])
→ [3, 4]

findCommonElements([1, 2, 3], [4, 5, 6])
→ []

Note:
Do not use Set() yet.
=============================================================================
*/

function findCommonElements(arr1, arr2) {
    const commonEle = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonEle.push(arr1[i]);
            }
        }
    }
    return commonEle;
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));
