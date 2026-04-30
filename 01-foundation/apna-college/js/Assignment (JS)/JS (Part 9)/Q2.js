const body = document.querySelector('body');

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Click me';

input.setAttribute('placeholder', 'username');
button.setAttribute('id', 'btn');

body.append(input, button);