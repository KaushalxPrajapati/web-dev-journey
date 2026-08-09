let title = document.getElementById('main-title');
let subtitle = document.querySelector('.subtitle');
console.log(title);
console.log(subtitle);


title.innerHTML = 'I Hacked the DOM';
let box = document.querySelector('.box');

// box.style.backgroundColor = 'yellow';
box.classList.add('yellow');

subtitle.style.fontSize = '25px';
