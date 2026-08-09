import { useState } from 'react';

export default function Button({ isActive }) {
    const [state, setState] = useState(true);

    let handleClick = () => {
        setState(!state);
    };

    const buttonStyle = {
        backgroundColor: state ? 'green' : 'gray',
        color: 'white',
        padding: '10px 20px',
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            Click
        </button>
    );
}
