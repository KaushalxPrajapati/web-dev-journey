const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input', () => {
    if (celsiusInput.value === '') {
        fahrenheitInput.value = '';
        return;
    }
    const c = parseFloat(celsiusInput.value);
    const f = (c * 9/5) + 32;
    fahrenheitInput.value = Number.isInteger(f) ? f : f.toFixed(2);
});

fahrenheitInput.addEventListener('input', () => {
    if (fahrenheitInput.value === '') {
        celsiusInput.value = '';
        return;
    }
    const f = parseFloat(fahrenheitInput.value);
    const c = (f - 32) * 5/9;
    celsiusInput.value = Number.isInteger(c) ? c : c.toFixed(2);
});
