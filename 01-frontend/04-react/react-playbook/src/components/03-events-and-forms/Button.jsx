import './Button.css';
import { useState } from 'react';

function Button() {
    const [message, setMessage] = useState('Click a button below');

    // Event handler: React automatically passes the SyntheticEvent object as the first parameter
    const handleClick = (e) => {
        setMessage('Button clicked ONCE (onClick)');
        console.log('Event type:', e.type);
    };

    const handleDoubleClick = () => {
        setMessage('Button clicked TWICE (onDoubleClick)');
    };

    return (
        <div className="button-container">
            <p className="instruction">{message}</p>

            <div className="button-group">
                {/* 
                  IMPORTANT: Pass function reference `handleClick`, NOT `handleClick()`!
                  If you put `handleClick()`, it runs immediately when the component renders.
                */}
                <button onClick={handleClick}>Click Me Once</button>
                <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
            </div>
        </div>
    );
}

export default Button;
