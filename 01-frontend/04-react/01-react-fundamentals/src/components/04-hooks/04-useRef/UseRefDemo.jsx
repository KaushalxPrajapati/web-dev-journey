import { useState, useRef } from 'react';

export default function UseRefDemo() {
    // 1. Using useRef to reference a DOM element directly
    const inputRef = useRef(null);

    // 2. Using useRef to store a mutable value that DOES NOT cause re-renders
    const renderCount = useRef(0);
    const [inputValue, setInputValue] = useState('');

    // Every time the component re-renders (like when typing in the input),
    // this line runs. We mutate .current without causing an infinite loop!
    renderCount.current = renderCount.current + 1;

    const focusInput = () => {
        // We can access the actual HTML input element via inputRef.current
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = '#e8f0fe';
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>useRef Hook Demo</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
                useRef is perfect for accessing DOM elements directly OR storing values that shouldn't trigger a re-render when updated.
            </p>

            <div style={{ marginBottom: '15px' }}>
                <input 
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something..."
                    style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
                />
                <button 
                    onClick={focusInput}
                    style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    Focus the Input Field
                </button>
            </div>

            <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                <p><strong>Input Value:</strong> {inputValue}</p>
                {/* Notice how renderCount.current updates, but setting it didn't trigger this render! */}
                <p><strong>Component Re-renders:</strong> {renderCount.current}</p>
            </div>
        </div>
    );
}
