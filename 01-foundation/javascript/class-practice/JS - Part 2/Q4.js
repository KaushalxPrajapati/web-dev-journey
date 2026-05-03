// Practice Q: Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
// (1 = Monday, 2 = Tuesday ... 7 = Sunday)

/* ----Method 1 (Old Way, first written)----

let day = Number(prompt('Enter any number from 1 to 7'));

switch (day) {
    case 1:
        console.log('Today is Monday!');
        break; // Stop Immediately if matched (IMPORTANT)

    case 2:
        console.log('Today is Tuesday!');
        break; // Stop Immediately if matched (IMPORTANT)

    case 3:
        console.log('Today is Wednesday!');
        break; // Stop Immediately if matched (IMPORTANT)

    case 4:
        console.log('Today is Thursday!');
        break; // Stop Immediately if matched (IMPORTANT)

    case 5:
        console.log('Today is Friday!');
        break; // Stop Immediately if matched (IMPORTANT)

    case 6:
        console.log('Today is Saturday!');
        break; // Stop Immediately if matched (IMPORTANT)

    case 7:
        console.log('Today is Sunday!');
        break; // Stop Immediately if matched (IMPORTANT)

    default:
        alert('Invalid input! Please enter a number from 1 to 7.');
}
*/

/* 

To remember: 
    1. If user clicks 'OK' when prompting, then it gives ---> '' or (empty string)
    2. If user clicks 'Cancel' when prompting, then it gives ---> null
*/

// ----Method 2 (Improved)----

function dayOfTheWeek() {
    while (true) {
        let input = prompt('Enter any number from 1 to 7');

        if (input === '' || input === null) {
            alert('Quiting...');
            break;
        }

        let day = Number(input);

        if (isNaN(day)) {
            alert('Invalid input! Please enter a number.');
            continue;
        }

        switch (day) {
            case 1:
                console.log('Today is Monday!');
                break;
            case 2:
                console.log('Today is Tuesday!');
                break;
            case 3:
                console.log('Today is Wednesday!');
                break;
            case 4:
                console.log('Today is Thursday!');
                break;
            case 5:
                console.log('Today is Friday!');
                break;
            case 6:
                console.log('Today is Saturday!');
                break;
            case 7:
                console.log('Today is Sunday!');
                break;
            default:
                alert('Invalid input! Please enter a number from 1 to 7.');
        }
    }
}

dayOfTheWeek();
