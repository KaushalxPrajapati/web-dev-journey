function Home() {
    return (
        <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#18181b' }}>
                Home Page
            </h2>
            <p style={{ color: '#52525b', fontSize: '0.9rem' }}>
                Welcome to the home route! This component renders when the URL matches <code>/</code>.
            </p>
        </div>
    );
}

export default Home;
