// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

let array = [10, 20, 30];

// Define the arrow function 'arrayAverage'.
const arrayAverage = () => {
    // 1. Initialize a variable to store the sum.
    let sum = 0;

    // 2. Loop through each number in the array.
    for (let i = 0; i < array.length; i++) {
        // Add the current number to the sum.
        sum = sum + array[i];
    }

    // 3. Calculate the average by dividing the total sum by the number of elements.
    let avg = sum / array.length;

    // 4. Return the calculated average.
    return avg;
};

// Call the function and print the result.
console.log(`Average of numbers in the array [${array}] is ${arrayAverage(array)}`);