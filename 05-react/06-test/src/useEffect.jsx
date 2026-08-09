import { useState, useEffect } from 'react';

export default function DoSomething() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    });
    return (
        <>
            <p>Current Time: {time}</p>
        </>
    );
}
