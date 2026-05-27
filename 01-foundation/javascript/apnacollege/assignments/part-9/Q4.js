const body = document.querySelector('body');

let h1 = document.createElement('h1');
h1.innerHTML = '<u>DOM Practice</u>';
h1.classList.add('purple');

body.appendChild(h1);