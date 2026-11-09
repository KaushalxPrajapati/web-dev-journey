import { useState } from 'react';

/**
 * 🧪 Playground Scratchpad
 * Use this file anytime you want to quickly test a new idea, button, hook, or small UI
 * without needing to create a separate Vite project or cluttering your core topics!
 */
export default function Scratchpad() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    return (
        <div style={{ maxWidth: '480px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#18181b' }}>
                Playground Sandbox
            </h2>
            <p style={{ color: '#71717a', fontSize: '0.85rem', marginBottom: '16px' }}>
                Your private scratchpad to test rough code and experiments.
            </p>

            <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #e4e4e7', marginBottom: '16px' }}>
                <p style={{ fontWeight: 600, marginBottom: '8px' }}>Test Counter: {count}</p>
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                    style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #d4d4d8', background: '#fff' }}
                >
                    +1 Increment
                </button>
            </div>

            <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #e4e4e7' }}>
                <p style={{ fontWeight: 600, marginBottom: '8px' }}>Test Input: {text || '(empty)'}</p>
                <input
                    type="text"
                    placeholder="Type something to test..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ padding: '7px 10px', width: '100%', borderRadius: '4px', border: '1px solid #d4d4d8' }}
                />
            </div>
        </div>
    );
}
