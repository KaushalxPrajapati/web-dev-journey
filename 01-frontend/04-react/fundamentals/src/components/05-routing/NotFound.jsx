function NotFound() {
    return (
        <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#ef4444' }}>
                404 - Page Not Found
            </h2>
            <p style={{ color: '#52525b', fontSize: '0.9rem' }}>
                This route was triggered by the wildcard catch-all <code>path="*"</code> because no other route matched.
            </p>
        </div>
    );
}

export default NotFound;
