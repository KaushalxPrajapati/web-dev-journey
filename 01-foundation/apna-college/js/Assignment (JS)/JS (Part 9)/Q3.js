const body = document.querySelector('body');

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Click me';

body.append(input, button);

input.setAttribute('placeholder', 'username');
button.setAttribute('id', 'btn');

let styleButton = document.querySelector('#btn');
styleButton.classList.add('button');