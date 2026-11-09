import { useState } from 'react';
import './Counter2.css';

function Counter2() {
    const [count, setCount] = useState(0);

    // Direct state update: setCount(count + 1)
    // Note: If you call setCount(count + 1) twice in a row, it only increments once due to state batching!
    // For sequential updates based on current value, prefer functional update: setCount(prev => prev + 1)
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
