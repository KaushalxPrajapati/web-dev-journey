function multiplicationTable() {
    // 1. Get user input
    let numInput = prompt('Enter the number whose multiplication table you want');

    // 2. Check if the user pressed "Cancel"
    if (numInput === null) {
        console.log('User cancelled the operation.');
        return; // Exit the function
    }

    // 3. Convert the input to a number
    let num = parseInt(numInput);

    // 4. Check if the input is a valid number
    if (isNaN(num)) {
        console.log('Invalid input. Please enter a number.');
        return; // Exit the function
    }

    // 5. Generate the full table using a single 'for' loop
    console.log(`--- Multiplication Table for ${num} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`); // Using template literals (backticks) is cleaner
    }
}

multiplicationTable();
