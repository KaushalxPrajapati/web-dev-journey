// Better version -->

while (true) {
    let input = prompt('Enter any number:');

    // Handle cancel / empty input
    if (input === null || input.trim() === '') {
        console.log('No input provided. Ending program.');
        break;
    }

    let x = Number(input);

    if (isNaN(x)) {
        console.log('Invalid number. Try again.');
    } else if (x % 2 === 0) {
        console.log(`${x} is even!`);
    } else {
        console.log(`${x} is odd!`);
    }

    let answer = prompt('Want to continue? (yes / no)');

    // Break on anything other than 'yes' (including cancel)
    if (answer === null || answer.trim().toLowerCase() !== 'yes') {
        break;
    }
}

console.log('Program Ended!');
