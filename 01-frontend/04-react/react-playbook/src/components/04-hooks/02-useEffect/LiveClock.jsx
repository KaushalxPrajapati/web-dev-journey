import { useState, useEffect } from 'react';

export default function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Update current time string every 1 second
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup: stops interval when component unmounts
        return () => {
            clearInterval(timerId);
        };
    }, []); // Empty dependency array: run once on mount

    return (
        <div>
            <h2 style={{ fontSize: '1.4rem', color: '#18181b', marginBottom: '6px' }}>{time}</h2>
            <p style={{ color: '#71717a', fontSize: '0.85rem' }}>
                Live clock ticking via <code>setInterval</code> with cleanup.
            </p>
        </div>
    );
}
