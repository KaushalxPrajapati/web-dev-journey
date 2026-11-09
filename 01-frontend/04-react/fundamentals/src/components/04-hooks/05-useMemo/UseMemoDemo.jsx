import { useState, useMemo } from 'react';

// Simulated expensive calculation function
function slowCalculation(num) {
    console.log('Running slow calculation...');
    // Moderate loop: creates a noticeable pause (~100ms) without freezing browser
    for (let i = 0; i <= 50000000; i++) {}
    return num * 2;
}

export default function UseMemoDemo() {
    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    // 💡 useMemo caches the return value of an expensive function.
    // Without useMemo: toggling the theme would re-run `slowCalculation` and lag the UI!
    // With useMemo: `slowCalculation` ONLY runs when `number` changes.
    const doubledNumber = useMemo(() => {
        return slowCalculation(number);
    }, [number]); // Dependency array: only re-compute when `number` changes

    const themeStyles = {
        backgroundColor: darkTheme ? '#18181b' : '#f4f4f5',
        color: darkTheme ? '#fafafa' : '#18181b',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '420px',
        transition: 'all 0.2s ease',
    };

    return (
        <div style={themeStyles}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>useMemo Demo</h2>
            <p style={{ opacity: 0.8, fontSize: '0.85rem', marginBottom: '16px' }}>
                <code>useMemo</code> caches heavy computation results so unrelated re-renders (like theme toggle) stay fast.
            </p>

            <div style={{ marginBottom: '14px' }}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                    style={{ padding: '7px 10px', width: '90px', marginRight: '10px', borderRadius: '4px', border: '1px solid #d4d4d8' }}
                />
                <button
                    onClick={() => setDarkTheme((prevDark) => !prevDark)}
                    style={{
                        padding: '7px 14px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        border: '1px solid #d4d4d8',
                        background: darkTheme ? '#27272a' : '#ffffff',
                        color: darkTheme ? '#ffffff' : '#000000',
                    }}
                >
                    Toggle Theme
                </button>
            </div>

            <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                Doubled Value: {doubledNumber}
            </p>
        </div>
    );
}
