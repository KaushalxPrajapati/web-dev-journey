// This runs ONLY in the browser
const btns = document.querySelectorAll('button');

for (let btn of btns) {
    btn.addEventListener('click', () => {
        console.log(`${btn.innerText} button was Clicked.`);
    });
}
