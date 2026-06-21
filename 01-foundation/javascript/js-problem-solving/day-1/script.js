/*
=============================================================================
Question:
Given multiple arrays of numbers, combine them into a single array
and calculate the total sum of all the numbers in the combined array.
=============================================================================
*/

let arr0 = [1, 1, 1, 1, 1];
let arr1 = [1, 1, 1, 1, 1];
let arr2 = [1, 1, 1, 1, 1];
let arr3 = [1, 1, 1, 1, 1];
let arr4 = [1, 1, 1, 1, 1];

// Combine all arrays into one using the spread operator
let combinedArray = [...arr0, ...arr1, ...arr2, ...arr3, ...arr4];
console.log("Combined Array:", combinedArray);

// ----------------------------------------------------
// Method 1: Using a standard for-loop
// ----------------------------------------------------
let sumMethod1 = 0;
for (let i = 0; i < combinedArray.length; i++) {
    sumMethod1 += combinedArray[i];
}
console.log('Method 1 (for-loop) Total Sum is:', sumMethod1);


// ----------------------------------------------------
// Method 2: Using .forEach()
// Note: We use .forEach() instead of .map() here because
// .map() is strictly designed to return a new modified array.
// .forEach() is the correct array method when we just want
// to iterate and perform a side-effect (like accumulating a sum).
// ----------------------------------------------------
let sumMethod2 = 0;
combinedArray.forEach((num) => {
    sumMethod2 += num;
});
console.log('Method 2 (forEach) Total Sum is:', sumMethod2);


// ----------------------------------------------------
// Method 3: Using .reduce()
// This is the most idiomatic, functional way to sum an array in JS.
// It explicitly "reduces" the array to a single value.
// ----------------------------------------------------
let sumMethod3 = combinedArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log('Method 3 (reduce) Total Sum is:', sumMethod3);
