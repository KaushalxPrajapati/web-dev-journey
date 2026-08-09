const button = document.querySelector('button');
const heading = document.querySelector('h2');

button.addEventListener('click', () => {
    heading.innerHTML = Date();
    heading.classList.add('visible');
    button.style.opacity = 0.5;

    setTimeout(() => {
        heading.innerHTML = '';
        heading.classList.remove('visible');
        button.style.opacity = 1;

        button.style.backgroundColor = 'rgb(65, 160, 228)';
    }, 5000);
});
