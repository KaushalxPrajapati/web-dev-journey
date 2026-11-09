import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    // 💡 THE RULES OF useEffect:
    // 1. Empty array `[]`: Runs ONLY ONCE when the component mounts.
    // 2. Return function: Runs when the component UNMOUNTS (cleanup).
    // 3. Omitting dependency array: Runs on EVERY single render (causes infinite loops with timers!).
    useEffect(() => {
        // Start interval timer
        const timerId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        // CLEANUP FUNCTION: Crucial to clear interval when component unmounts to prevent memory leaks
        return () => {
            clearInterval(timerId);
        };
    }, []); // Empty array ensures timer is only set up once on mount

    return (
        <div>
            <h2 style={{ fontSize: '1.25rem', color: '#18181b', marginBottom: '8px' }}>
                Component Active Time: {seconds}s
            </h2>
            <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
                Timer runs safely with <code>setInterval</code> and cleans up automatically when you switch topics.
            </p>
        </div>
    );
}

export default Timer;
