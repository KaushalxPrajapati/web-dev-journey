import { useState } from 'react';

function Counter() {
    // 'number' is the state variable that holds the current value
    // 'setNumber' is the function used to update the state
    // useState(0) sets the initial value to 0
    const [number, setNumber] = useState(0);

    return (
        <>
            {/* Display the current value of the state */}
            <p>Current number: {number}</p>

            <button
                onClick={() => {
                    // Update the state by passing a callback function
                    // 'prev' automatically receives the latest value of 'number'
                    // This is the recommended and safest way to update state in React
                    setNumber((prev) => prev + 1);
                }}
            >
                Increment!
            </button>
        </>
    );
}

export default Counter;
