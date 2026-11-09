import { useState } from 'react';

export default function ToggleButton() {
    // Boolean state representing ON (true) or OFF (false)
    const [isOn, setIsOn] = useState(true);

    // Toggle handler using functional updater
    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    };

    // Dynamic style object based on state
    const buttonStyle = {
        backgroundColor: isOn ? '#16a34a' : '#71717a',
        color: 'white',
        padding: '10px 22px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.95rem',
        transition: 'background-color 0.15s ease',
    };

    return (
        <button style={buttonStyle} onClick={handleToggle}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
}
