// === Cache DOM elements once ===
const form = document.getElementById('prime-form');
const input = document.getElementById('number-input');
const result = document.getElementById('result');

// === Prime check: only loop up to sqrt(n) for efficiency ===
function isPrime(n) {
    // Numbers less than 2 are not prime by definition
    if (n < 2) return false;

    // 2 and 3 are prime
    if (n < 4) return true;

    // Quick elimination of even numbers and multiples of 3
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Only check divisors up to sqrt(n), skipping even numbers and multiples of 3
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

// === Show the result message in the UI ===
function showResult(message, type) {
    // 'type' is "success" | "error" | "info" — drives the color via CSS class
    result.textContent = message;
    result.className = `result ${type}`;
}

// === Handle the form submit (fires on button click AND Enter key) ===
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the page from reloading

    const value = input.value.trim();

    if (value === '') {
        showResult('Please enter a number', 'info');
        return;
    }

    const n = Number(value);

    if (!Number.isInteger(n) || n < 2) {
        // NaN, decimals, 0, 1, negatives — none are prime
        showResult('Enter an integer of 2 or greater', 'error');
        return;
    }

    if (isPrime(n)) {
        showResult(`${n} is Prime`, 'success');
    } else {
        showResult(`${n} is NOT Prime`, 'error');
    }
});
