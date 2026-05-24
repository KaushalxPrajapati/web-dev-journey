// Select or grab the elements once at the global scope, not inside any function
const enteredYear = document.getElementById('enteredYear');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

function checkLeapYear() {
    const rawyear = enteredYear.value.trim();

    // guard for empty input
    if (rawyear === '') {
        result.innerText = 'Please enter a year.';
        result.style.color = '#ffcc00';
        return;
    }

    const year = Number(rawyear);

    // guard: NaN or decimal input
    if (!Number.isInteger(year) || year <= 0) {
        result.innerText = 'Please enter a valid year.';
        result.style.color = '#ffcc00';
        return;
    }

    // Leap year logic:
    // divisible by 400 → leap
    // divisible by 100 but not 400 → not leap
    // divisible by 4 but not 100 → leap
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result.innerText = `Year ${year} is a Leap Year`;
        result.style.color = '#00ff7f';
    } else {
        result.innerText = `Year ${year} is NOT a Leap Year`;
        result.style.color = '#ff6b6b';
    }
}

checkButton.addEventListener('click', checkLeapYear);

// also trigger on Enter key inside the input
enteredYear.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkLeapYear();
    }
});
