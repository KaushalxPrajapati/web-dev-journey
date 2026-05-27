let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');

// Celsius to Fahrenheit
let celsiusTemp = 25;
let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;

heading1.innerText = fahrenheitTemp + '°C';
