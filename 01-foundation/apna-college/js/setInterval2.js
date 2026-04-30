let count = 0; // Start counting from 0
const id = setInterval(() => {
    console.log(`Count #${count + 1}`); // Print the current number by adding 1 to 'count'
    count++; // Increase the number by 1
    
    if (count === 5) { // Check if we reached the limit (I want it to count till 5)
        clearInterval(id); // Stop the timer
        console.log("STOPPED.");
    }
}, 1000); // Run this every 1 second
