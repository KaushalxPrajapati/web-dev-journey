import { useState, useEffect } from 'react';
import './Counter2.css';

function Counter2() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="counter-container">
            <h3>Count = {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    );
}

export default Counter2;
