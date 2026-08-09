import { useState, useEffect } from 'react';

export default function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearTimeout(timerId);
    }, [time]);

    return (
        <div>
            <p>Current Time: {time}</p>
        </div>
    );
}
