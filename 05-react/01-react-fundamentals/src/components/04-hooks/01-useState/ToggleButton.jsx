import { useState } from 'react';

export default function ToggleButton() {
    const [state, setState] = useState(true);

    const handleClick = () => {
        setState(!state);
    };

    const buttonStyle = {
        backgroundColor: state ? 'green' : 'gray',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {state ? 'ON' : 'OFF'}
        </button>
    );
}
