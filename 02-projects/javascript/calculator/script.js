// Grabbing the display and every calculator button from the HTML using DOM
let display = document.getElementById('display');
let allButtons = document.querySelectorAll('.btn');

// These 4 variables remember the calculator's current state
let numberOnScreen = '0'; // what's currently shown on the display
let savedNumber = ''; // the first number saved when an operator is pressed
let chosenOperator = null; // which operator was pressed: 'add', 'subtract', etc.
let shouldResetDisplay = false; // when true, next digit wipes screen and starts fresh

// ─────────────────── KEYBOARD SUPPORT ───────────────────

// Connects keyboard keys to data-key values used in the HTML
// We use an object because it works like a lookup table — give it a key, get a value back instantly
let keyboardMap = {
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

document.addEventListener('keydown', function (event) {
    // step 1 — what key did the user actually press?
    let pressedKey = event.key;
    console.log('pressed key ->', pressedKey); // e.g. "7", "+", "Enter", "/"

    // step 2 — is that key in our map? bracket notation used because pressedKey is dynamic (changes every keypress)
    let mappedKey = keyboardMap[pressedKey];
    console.log('mapped to ->', mappedKey); // e.g. "7", "add", "equals", "divide"

    // step 3 — if the key isn't in our map, mappedKey will be undefined — just ignore it
    if (mappedKey === undefined) {
        console.log('key not in map, ignoring'); // e.g. ArrowUp, Tab, Shift, etc.
        return;
    }

    // step 4 — stop browser shortcuts like "/" opening the browser search bar
    event.preventDefault();

    // step 5 — find the button in HTML whose data-key matches our mapped value
    let matchingButton = document.querySelector(
        '[data-key="' + mappedKey + '"]'
    );
    console.log('matching button ->', matchingButton); // shows the actual DOM button element

    // step 6 — pretend the user clicked that button — reuses the same click logic below
    if (matchingButton !== null) {
        matchingButton.click();
        console.log('simulated click on ->', mappedKey);
    }
});

// ─────────────────── BUTTON CLICKS ───────────────────

allButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // step 1 — read the data-key from whichever button was clicked
        let key = button.getAttribute('data-key');
        console.log('button clicked, key ->', key); // e.g. "7", "add", "equals", "clear"

        // ─────────────────── Number and Dot buttons ───────────────────

        // digits 0-9 are single characters and satisfy key >= '0' && key <= '9'
        // dot is also a single character but needs its own check
        // combined: if it's a dot OR a single digit character — it's a number/dot button
        let isDigit = key.length === 1 && key >= '0' && key <= '9';
        let isDot = key === '.';

        if (isDot || isDigit) {
            // understanding: without this guard, user could type "3.4.5" which is invalid
            if (key === '.' && numberOnScreen.includes('.')) {
                console.log('second dot blocked');
                return;
            }

            // understanding: shouldResetDisplay is true right after an operator is pressed
            // the screen still shows the first number, but we need to wipe it on next digit
            if (shouldResetDisplay === true) {
                numberOnScreen = key; // wipe and start fresh
                shouldResetDisplay = false; // turn the flag off — only fires once
                console.log(
                    'display reset, new number starts ->',
                    numberOnScreen
                );
            } else if (numberOnScreen === '0' && key !== '.') {
                // understanding: default screen shows "0" — pressing 5 should show "5" not "05"
                // but pressing "." should show "0." so we exclude dot from this condition
                numberOnScreen = key; // replace the lone zero
                console.log('lone zero replaced ->', numberOnScreen);
            } else {
                // normal case — just keep adding digits to what's already on screen
                numberOnScreen = numberOnScreen + key;
                console.log('digit appended ->', numberOnScreen);
            }

            display.innerText = numberOnScreen;
        }

        // ─────────────────── Operator buttons (+, -, *, /) ───────────────────

        let isOperator =
            key === 'add' ||
            key === 'subtract' ||
            key === 'multiply' ||
            key === 'divide';

        if (isOperator) {
            // understanding: three things must happen together when an operator is pressed:
            // 1. freeze the first number before user types the second
            // 2. remember which operator was chosen for when equals is pressed later
            // 3. arm the flag so next digit starts fresh instead of appending to first number

            savedNumber = numberOnScreen; // step 1 — freeze first number
            chosenOperator = key; // step 2 — remember operator
            shouldResetDisplay = true; // step 3 — arm the reset flag

            console.log('operator pressed ->', chosenOperator);
            console.log('first number saved ->', savedNumber);
        }

        // ─────────────────── Equals button ───────────────────

        if (key === 'equals') {
            // understanding: user might press equals before typing anything meaningful
            // chosenOperator === null means no operator was pressed yet
            // savedNumber === '' means no first number was saved
            if (chosenOperator === null || savedNumber === '') {
                console.log('equals pressed too early, nothing to calculate');
                return;
            }

            // understanding: savedNumber and numberOnScreen are strings — can't do math on strings
            // "3" + "5" = "35" in JS (string join), not 8, parseFloat converts them to real numbers
            let firstNumber = parseFloat(savedNumber);
            let secondNumber = parseFloat(numberOnScreen);
            let answer;

            console.log(
                'calculating ->',
                firstNumber,
                chosenOperator,
                secondNumber
            );

            if (chosenOperator === 'add') {
                answer = firstNumber + secondNumber;
            }

            if (chosenOperator === 'subtract') {
                answer = firstNumber - secondNumber;
            }

            if (chosenOperator === 'multiply') {
                answer = firstNumber * secondNumber;
            }

            if (chosenOperator === 'divide') {
                if (secondNumber === 0) {
                    // understanding: dividing by zero is mathematically undefined — show Error
                    display.innerText = 'Error';
                    numberOnScreen = '0';
                    chosenOperator = null;
                    console.log('divide by zero blocked');
                    return;
                }
                answer = firstNumber / secondNumber;
            }

            // understanding: answer is a number — convert back to string for display and future appending
            numberOnScreen = String(answer);

            // reset operator and savedNumber so pressing equals again does nothing
            chosenOperator = null;
            savedNumber = '';

            display.innerText = numberOnScreen;
            console.log('result ->', numberOnScreen);
        }

        // ─────────────────── Clear button ───────────────────

        if (key === 'clear') {
            // understanding: reset every state variable back to its starting value
            // this is exactly the same state the page was in when it first loaded
            numberOnScreen = '0';
            savedNumber = '';
            chosenOperator = null;
            shouldResetDisplay = false;
            display.innerText = '0';
            console.log('calculator cleared');
        }

        // ─────────────────── Plus/Minus toggle ───────────────────

        if (key === 'sign') {
            if (numberOnScreen === '0') {
                return; // understanding: "-0" is meaningless, so block it
            }
            // understanding: multiply by -1 flips the sign — positive becomes negative and vice versa
            numberOnScreen = String(parseFloat(numberOnScreen) * -1);
            display.innerText = numberOnScreen;
            console.log('sign toggled ->', numberOnScreen);
        }

        // ─────────────────── Percent button ───────────────────

        if (key === 'percent') {
            // understanding: percent means "per hundred" — dividing by 100 converts e.g. 75 -> 0.75
            numberOnScreen = String(parseFloat(numberOnScreen) / 100);
            display.innerText = numberOnScreen;
            console.log('percent applied ->', numberOnScreen);
        }
    });
});
