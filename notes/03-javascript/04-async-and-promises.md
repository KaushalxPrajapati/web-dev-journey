# Asynchronous JS, Promises & Async/Await

Asynchronous operations allow long-running operations (API requests, timers) to execute without blocking the main browser UI thread.

---

## 1. Timers (`setTimeout` & `setInterval`)

```javascript
// One-off timer execution
const timerId = setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

// Clear timer if needed
clearTimeout(timerId);

// Recurring timer interval
const intervalId = setInterval(() => {
    console.log('Runs every 1 second');
}, 1000);

clearInterval(intervalId);
```

---

## 2. Promises

A Promise represents an eventual completion or failure of an asynchronous operation.

```javascript
const fetchData = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data loaded successfully!");
    } else {
        reject("Failed to fetch data.");
    }
});

fetchData
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```

---

## 3. Async / Await & Fetch API

`async/await` is modern syntax built on top of Promises for writing asynchronous code cleanly.

```javascript
async function getRandomJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Setup: ${data.setup}`);
        console.log(`Punchline: ${data.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

getRandomJoke();
```
