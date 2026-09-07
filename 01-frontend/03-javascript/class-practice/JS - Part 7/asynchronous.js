// Using setTimeout, setInterval & clearInterval
let count = 0;
let id1 = setInterval(() => {
    console.log('Hello World');
    count++;

    if (count === 5) {
        clearInterval(id1);
    }
}, 2000);
