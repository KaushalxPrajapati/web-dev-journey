// Function Definition
// Accepts: 'arr' (an array) and 'args' (a variable list of extra numbers)
// REST Operator (...args): acts as "The Packer".
// It packs loose arguments (4, 5) into an array [4, 5] so we can use methods like .map().
const doubleAndReturnArgs = (arr, ...args) => {
    // Step 1: Double the packed arguments (2nd paramenter)
    const doubleArgs = args.map((num) => num * 2);

    // Step 2: Merge original array + doubled args
    // SPREAD Operator (...): acts as "The Unpacker".
    // It takes arrays like [1, 2, 3] and unpacks them into loose numbers (1, 2, 3) to merge them.
    const finalArr = [...arr, ...doubleArgs]; // Storing the final result, after unpacking, in the final array

    // Step 3: Return the merged result
    return finalArr;
};

let numbers = [1, 2, 3];
console.log(doubleAndReturnArgs(numbers, 4, 5));    // Output: [1, 2, 3, 8, 10]
