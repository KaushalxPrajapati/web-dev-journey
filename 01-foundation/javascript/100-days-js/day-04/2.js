/*
=============================================================================
Question: Write a function to sort an array of numbers in an ascending order.
=============================================================================
*/

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

let arr = [5, 2, 9, 1, 7];
sortArray(arr);
