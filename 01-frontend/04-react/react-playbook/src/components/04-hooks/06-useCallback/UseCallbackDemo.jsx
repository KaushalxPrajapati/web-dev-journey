import React, { useState, useCallback } from 'react';

// Child component wrapped in React.memo
// React.memo tells React: "Only re-render this child if its props change!"
const ChildButton = React.memo(({ onClick, children }) => {
    console.log(`Rendering Child: ${children}`);
    return (
        <button 
            onClick={onClick}
            style={{ padding: '8px 16px', cursor: 'pointer', margin: '5px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}
        >
            {children}
        </button>
    );
});

export default function UseCallbackDemo() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    // Without useCallback, this function is re-created entirely from scratch every time UseCallbackDemo re-renders.
    // Because functions are objects in JS, () => {} !== () => {}.
    // This would trick React.memo into thinking the 'onClick' prop changed, forcing ChildButton to re-render needlessly!
    
    // WITH useCallback, React caches the exact same function definition between renders.
    const incrementCount = useCallback(() => {
        setCount(prev => prev + 1);
    }, []); // Empty array means this function never needs to be re-created

    return (
        <div style={{ 
            padding: '20px', 
            maxWidth: '400px', 
            borderRadius: '8px',
            backgroundColor: theme === 'light' ? '#fff' : '#2c3e50',
            color: theme === 'light' ? '#333' : '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
        }}>
            <h2>useCallback Hook Demo</h2>
            <p style={{ opacity: 0.8, marginBottom: '20px' }}>
                Open your console! When you toggle the theme, notice that the ChildButton DOES NOT re-render. useCallback cached the function!
            </p>

            <div style={{ marginBottom: '20px' }}>
                <h3>Count: {count}</h3>
                
                {/* We pass our cached function as a prop */}
                <ChildButton onClick={incrementCount}>
                    Increment Counter (Child Component)
                </ChildButton>
                
                <br /><br />

                {/* Toggling theme causes parent to re-render, but won't affect the ChildButton! */}
                <button 
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                    Toggle Theme
                </button>
            </div>
        </div>
    );
}
