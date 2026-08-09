import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className="not-found-page">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist or has been moved.</p>

            <Link to="/" className="back-home-btn">
                Back to Home
            </Link>
        </main>
    );
}

export default NotFound;
