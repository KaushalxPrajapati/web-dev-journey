let count = 0;
// let savedNum;

const num = document.getElementById('num');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const loadBtn = document.getElementById('loadBtn');
const saveBtn = document.getElementById('saveBtn');
const incrementBtn = document.getElementById('incrementBtn');

function incrementFunc() {
    count++;
    num.innerText = count;
}

function decrementFunc() {
    count--;
    num.innerText = count;
}

function resetFunc() {
    count = 0;
    num.innerText = count;
}

function saveFunc() {
    // savedNum = count;
    localStorage.setItem('count', count);
}

function loadFunc() {
    // num.innerText = savedNum;

    let saved = localStorage.getItem('count');
    if (saved !== null) {
        count = Number(saved);
    }
    num.innerText = count;
}

// --------------------------------------------------------
// Event listener for each buttons
// --------------------------------------------------------

incrementBtn.addEventListener('click', () => {
    incrementFunc();
});

decrementBtn.addEventListener('click', () => {
    decrementFunc();
});

resetBtn.addEventListener('click', () => {
    resetFunc();
});

saveBtn.addEventListener('click', () => {
    saveFunc();
});

loadBtn.addEventListener('click', () => {
    loadFunc();
});
