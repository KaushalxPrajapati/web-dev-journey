const input = document.querySelector('input');
const button = document.querySelector('button');
const h3 = document.querySelector('h3');

function isPrime(n) {
    // Returns only true or false
    if (n <= 1) {
        // Numbers less than or equal to 1 are not prime by definition
        return false;
    }

    for (let i = 2; i < n; i++) {
        // let n = 7 then i will be check for 2, 3, 4, 5, and 6 and NOT 7 because it's not less than or equal to
        if (n % i === 0) {
            return false; // REturns false if any divisor is found!
        }
    }

    return true; // In the end, it survived the loop means NO divisor is found other than 1 and itself of the entered no. 'n', so it's prime!
}

function trigger(event) {
    const n = Number(input.value);
    if (input.value === '') {
        // If empty, user clicked Check without entering anything
        h3.innerText = 'Please enter a number';
        h3.style.color = 'black';
        return; // Get out of the callback and wait for next click or enter press
    }
    if (!event || event.key === 'Enter')
        if (isPrime(n)) {
            h3.style.color = 'green';
            h3.innerText = `${n} is Prime`;
        } else {
            h3.style.color = 'red';
            h3.innerText = `${n} is NOT Prime`;
        }
}

button.addEventListener('click', () => {
    // const n = Number(input.value);

    // if (input.value === '') {
    //     // If empty, user clicked Check without entering anything
    //     h3.innerText = 'Please enter a number';
    //     h3.style.color = 'black';
    //     return; // Get out of the callback and wait for next click on button
    // }

    // if (isPrime(n)) {
    //     h3.style.color = 'green';
    //     h3.innerText = `${n} is Prime`;
    // } else {
    //     h3.style.color = 'red';
    //     h3.innerText = `${n} is NOT Prime`;
    // }

    trigger();
});

document.addEventListener('keydown', (event) => {
    // const n = Number(input.value);

    // if (event.key === 'Enter') {
    //     if (isPrime(n)) {
    //         h3.style.color = 'green';
    //         h3.innerText = `${n} is Prime`;
    //     } else {
    //         h3.style.color = 'red';
    //         h3.innerText = `${n} is NOT Prime`;
    //     }
    // }

    if (event.key !== 'Enter') return; // Ignore all keys except Enter
    trigger(event);
});
