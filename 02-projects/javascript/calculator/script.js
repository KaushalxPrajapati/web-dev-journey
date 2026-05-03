// --- Step 1: Grab Elements (your original start) ---
let buttons = document.querySelectorAll('.btn');
let display = document.getElementById('display');

// --- Step 2: State Variables ---
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldReplace = false;

// --- Step 3: Keyboard Mapping (key → button id or data-value) ---
const keyMap = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    '.': '.',
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    Enter: 'equals',
    '=': 'equals',
    Backspace: 'clear',
    Escape: 'clear',
    '%': 'percent',
};

document.addEventListener('keydown', (e) => {
    let mapped = keyMap[e.key]; // check if pressed key is in our map
    if (!mapped) return; // ignore keys we don't care about

    e.preventDefault(); // stops "/" from opening browser search bar

    // find the matching button and simulate a click on it
    let btn =
        document.querySelector(`[data-value="${mapped}"]`) || // number/dot button
        document.getElementById(mapped); // action button

    if (btn) btn.click(); // fires the same click listener already attached above
});

// --- Step 4: Loop through ALL buttons (your original idea) ---
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // data-value exists only on number/dot buttons
        let value = btn.getAttribute('data-value');

        // id exists on operator/action buttons
        let id = btn.id;

        // --- Number & Dot buttons ---
        if (value) {
            // Block multiple dots (e.g. "3.4.5")
            if (value === '.' && currentInput.includes('.')) return;

            if (shouldReplace) {
                currentInput = value; // start fresh after operator
                shouldReplace = false;
            } else {
                if (currentInput === '0' && value !== '.') {
                    currentInput = value; // replace lone zero
                } else {
                    currentInput = currentInput + value; // append digit
                }
            }

            display.innerText = currentInput;
        }

        // --- Operator buttons ---
        if (
            id === 'add' ||
            id === 'subtract' ||
            id === 'multiply' ||
            id === 'divide'
        ) {
            previousInput = currentInput; // save first number
            operator = id; // save which operator
            shouldReplace = true; // next digit starts fresh
        }

        // --- Equals ---
        if (id === 'equals') {
            if (!operator || previousInput === '') return;

            let a = parseFloat(previousInput);
            let b = parseFloat(currentInput);
            let result;

            if (operator === 'add') result = a + b;
            if (operator === 'subtract') result = a - b;
            if (operator === 'multiply') result = a * b;
            if (operator === 'divide') {
                if (b === 0) {
                    display.innerText = 'Error';
                    currentInput = '0';
                    operator = null;
                    return;
                }
                result = a / b;
            }

            currentInput = String(result);
            operator = null;
            previousInput = '';
            display.innerText = currentInput;
        }

        // --- Clear ---
        if (id === 'clear') {
            currentInput = '0';
            previousInput = '';
            operator = null;
            shouldReplace = false;
            display.innerText = '0';
        }

        // --- +/- Sign Toggle ---
        if (id === 'sign') {
            if (currentInput === '0') return;
            currentInput = String(parseFloat(currentInput) * -1);
            display.innerText = currentInput;
        }

        // --- Percent ---
        if (id === 'percent') {
            currentInput = String(parseFloat(currentInput) / 100);
            display.innerText = currentInput;
        }
    });
});
