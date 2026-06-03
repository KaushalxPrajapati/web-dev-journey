let heading = document.getElementById('heading');

// Fahrenheit to Celsius
let fahrenheitTemp = 86;
celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;

heading.innerText = celsiusTemp + '°C';
