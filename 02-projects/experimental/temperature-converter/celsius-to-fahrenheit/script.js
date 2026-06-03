let heading = document.getElementById('heading');

// Celsius to Fahrenheit
let celsiusTemp = 25;
let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;

heading.innerText = fahrenheitTemp + '°F';
