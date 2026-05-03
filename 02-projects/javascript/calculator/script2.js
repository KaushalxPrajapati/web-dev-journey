let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');

// updates what's shown on screen
function updateDisplay(value) {
    display.textContent = value;
}

// all number + dot buttons have data-value, so we grab them all at once
document.querySelectorAll('[data-value]').forEach(function (btn) {
    btn.addEventListener('click', function () {
        let value = this.dataset.value; // "7", ".", "0" etc.

        if (shouldResetDisplay) {
            currentInput = value; // start fresh after an operator was pressed
            shouldResetDisplay = false;
        } else {
            if (currentInput === '0' && value !== '.') {
                currentInput = value; // replace the default "0", don't append to it
            } else {
                currentInput += value; // keep appending digits
            }
        }

        updateDisplay(currentInput);
    });
});

// reusable function — saves first number and stores which operator was clicked
function handleOperator(op) {
    previousInput = currentInput; // freeze what's on screen as the first operand
    operator = op;
    shouldResetDisplay = true; // so next digit doesn't append to previous number
    updateDisplay(currentInput + ' ' + op); // "5 +"
}

document.getElementById('add').addEventListener('click', function () {
    handleOperator('+');
});
document.getElementById('subtract').addEventListener('click', function () {
    handleOperator('-');
});
document.getElementById('multiply').addEventListener('click', function () {
    handleOperator('*');
});
document.getElementById('divide').addEventListener('click', function () {
    handleOperator('/');
});

// calculate when = is pressed
document.getElementById('equals').addEventListener('click', function () {
    if (operator === null) return; // nothing to calculate if no operator was pressed

    let prev = parseFloat(previousInput); // convert string → number
    let curr = parseFloat(currentInput);
    let result;

    if (operator === '+') result = prev + curr;
    else if (operator === '-') result = prev - curr;
    else if (operator === '*') result = prev * curr;
    else if (operator === '/') {
        result = curr === 0 ? 'Error' : prev / curr; // avoid divide by zero
    }

    currentInput = String(result); // store result as string for display
    operator = null; // reset so pressing = again does nothing
    previousInput = '';
    shouldResetDisplay = true; // next digit starts a new calculation

    updateDisplay(currentInput);
});

// resets everything back to initial state
document.getElementById('clear').addEventListener('click', function () {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetDisplay = false;
    updateDisplay('0');
});

// divides current number by 100
document.getElementById('percent').addEventListener('click', function () {
    currentInput = String(parseFloat(currentInput) / 100);
    updateDisplay(currentInput);
});

// flips positive ↔ negative
document.getElementById('sign').addEventListener('click', function () {
    currentInput = String(parseFloat(currentInput) * -1);
    updateDisplay(currentInput);
});
