import { useState } from 'react';

export default function Joke() {
    const [joke, setJoke] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const PRIMARY_URL = 'https://official-joke-api.appspot.com/random_joke';
    const FALLBACK_URL = 'https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart';

    const getJoke = async () => {
        setLoading(true);
        setError(null);

        try {
            let response = await fetch(PRIMARY_URL);

            // If the primary server is down (e.g. 503 Service Unavailable), switch to fallback
            if (!response.ok) {
                response = await fetch(FALLBACK_URL);
            }

            const data = await response.json();

            setJoke({
                setup: data.setup,
                punchline: data.punchline || data.delivery,
            });
        } catch (err) {
            setError('Could not fetch joke. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '450px' }}>
            {loading && <p style={{ color: '#71717a' }}>Fetching joke...</p>}
            {error && <p style={{ color: '#ef4444' }}>{error}</p>}

            {joke.setup && (
                <div style={{ marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '1.15rem', color: '#09090b', marginBottom: '8px' }}>
                        {joke.setup}
                    </h3>
                    <h4 style={{ fontSize: '1rem', color: '#52525b', fontWeight: '500' }}>
                        {joke.punchline}
                    </h4>
                </div>
            )}

            <button
                onClick={getJoke}
                disabled={loading}
                style={{
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    borderRadius: '6px',
                    border: '1px solid #d4d4d8',
                    backgroundColor: '#ffffff',
                    color: '#09090b',
                }}
            >
                {loading ? 'Loading...' : 'Get Joke...!'}
            </button>
        </div>
    );
}
