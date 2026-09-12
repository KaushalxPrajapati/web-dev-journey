const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const swapIcon = document.querySelector('.icon');
let swapped = false;

celsiusInput.addEventListener('input', () => {
    if (celsiusInput.value === '') {
        fahrenheitInput.value = '';
        return;
    }
    const c = parseFloat(celsiusInput.value);
    const f = (c * 9) / 5 + 32;
    fahrenheitInput.value = Number.isInteger(f) ? f : f.toFixed(2);
});

fahrenheitInput.addEventListener('input', () => {
    if (fahrenheitInput.value === '') {
        celsiusInput.value = '';
        return;
    }
    const f = parseFloat(fahrenheitInput.value);
    const c = ((f - 32) * 5) / 9;
    celsiusInput.value = Number.isInteger(c) ? c : c.toFixed(2);
});

function convert(sourceInput, targetInput) {
    if (sourceInput.value === '') {
        targetInput.value = '';
        return;
    }

    const val = parseFloat(sourceInput.value);
    let result;

    if (!swapped) {
        // top = C, bottom = F
        result = sourceInput === celsiusInput ? (val * 9) / 5 + 32 : ((val - 32) * 5) / 9;
    } else {
        // top = F, bottom = C
        result = sourceInput === celsiusInput ? ((val - 32) * 5) / 9 : (val * 9) / 5 + 32;
    }

    targetInput.value = Number.isInteger(result) ? result : result.toFixed(2);
}

celsiusInput.addEventListener('input', () => convert(celsiusInput, fahrenheitInput));
fahrenheitInput.addEventListener('input', () => convert(fahrenheitInput, celsiusInput));

swapIcon.addEventListener('click', () => {
    swapped = !swapped;
    celsiusInput.placeholder = swapped ? 'Enter in Fahrenheit (°F)' : 'Enter in Celsius (°C)';
    fahrenheitInput.placeholder = swapped ? 'Enter in Celsius (°C)' : 'Enter in Fahrenheit (°F)';
    celsiusInput.value = '';
    fahrenheitInput.value = '';
});
