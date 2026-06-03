// ==============================================
// Goal: Run this 5 times, then stop automatically.
// ==============================================

// ----------------------------------------------
// 1st Method: Traditional Function Declaration
// (We define the 'Start' logic here)
// ----------------------------------------------
function start() {
    console.log('--> PROCESS STARTED <--');
}

// ----------------------------------------------
// 2nd Method: Arrow Function stored in a Variable
// (We define the 'Wait' logic here)
// ----------------------------------------------
const wait = () => {
    console.log('--> WAITING FOR API... <--');
};

// ------------------------------------------------------------
// 3rd Method: Direct Anonymous Arrow Function
// ------------------------------------------------------------

let count = 0; // 1. The Counter (Starts at 0)
const maxCycles = 5; // 2. The Limit (Stop after 5)

// This runs the loop, calls the others, and handles the STOP logic
const id = setInterval(() => {
    // The ID does not change for the whole 5 cycles and is created before the functions runs for the 1st time. It will print the same number, which is 1, for 5 times

    // A. Increment the cycle count
    count = count + 1;

    console.log(`Cycle #${count}:`);

    // B. Call Method 1 & Method 2
    start();
    wait();

    // C. Run Method 3's own logic
    console.log('--> PROCESS COMPLETED <--');
    console.log('');

    // D. THE STOPPING LOGIC (Simple & Clean)
    if (count === maxCycles) {
        clearInterval(id); // Use the receipt 'id' to stop the timer.
        console.log('All', maxCycles, 'cycles finished!');
    }
}, 1000);
