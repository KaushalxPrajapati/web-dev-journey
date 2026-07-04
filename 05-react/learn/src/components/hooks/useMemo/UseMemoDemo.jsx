import { useState, useMemo } from 'react';

// Artificial delay loop
function slowCalculation(num) {
    console.log('Running slow calculation...');
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
}

export default function UseMemoDemo() {
    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    // Without useMemo, 'slowCalculation' would run EVERY single time the component re-renders.
    // Even if we just clicked "Toggle Theme", it would freeze the app!
    // With useMemo, it ONLY re-runs if 'number' changes.
    const doubledNumber = useMemo(() => {
        return slowCalculation(number);
    }, [number]); // Dependency array: only re-run when 'number' changes

    const themeStyles = {
        backgroundColor: darkTheme ? '#2c3e50' : '#ecf0f1',
        color: darkTheme ? '#ecf0f1' : '#2c3e50',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        transition: 'all 0.3s ease',
    };

    return (
        <div style={themeStyles}>
            <h2>useMemo Hook Demo</h2>
            <p style={{ opacity: 0.8, marginBottom: '20px' }}>
                useMemo caches the result of an expensive calculation so it doesn't slow down unrelated re-renders (like
                theme toggling).
            </p>

            <div style={{ marginBottom: '15px' }}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                    style={{ padding: '8px', width: '100px', marginRight: '10px' }}
                />
                <button
                    onClick={() => setDarkTheme((prevDark) => !prevDark)}
                    style={{ padding: '8px 16px', cursor: 'pointer' }}
                >
                    Toggle Theme
                </button>
            </div>

            <div style={{ marginTop: '20px', padding: '10px', background: 'rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                <strong>Calculated Result: {doubledNumber}</strong>
            </div>
        </div>
    );
}
