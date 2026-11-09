import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import NotFound from './NotFound.jsx';

function RouterDemo() {
    return (
        // MemoryRouter keeps the history of your URL in memory (simulating a full browser router)
        <MemoryRouter initialEntries={['/']}>
            <div style={{ maxWidth: '520px' }}>
                {/* 
                  Navigation Bar using <Link to="...">
                  Never use <a href="..."> in React! <Link> intercepts navigation and prevents full page reload.
                */}
                <nav
                    style={{
                        display: 'flex',
                        gap: '12px',
                        paddingBottom: '14px',
                        marginBottom: '20px',
                        borderBottom: '1px solid #e4e4e7',
                    }}
                >
                    <Link
                        to="/"
                        style={{ color: '#18181b', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
                    >
                        Home
                    </Link>
                    <span style={{ color: '#d4d4d8' }}>|</span>
                    <Link
                        to="/about"
                        style={{ color: '#18181b', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
                    >
                        About
                    </Link>
                    <span style={{ color: '#d4d4d8' }}>|</span>
                    <Link
                        to="/contact"
                        style={{ color: '#18181b', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}
                    >
                        Contact
                    </Link>
                    <span style={{ color: '#d4d4d8' }}>|</span>
                    <Link
                        to="/broken-link"
                        style={{ color: '#ef4444', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}
                    >
                        Test 404
                    </Link>
                </nav>

                {/* 
                  <Routes> looks through all its children <Route> elements and renders the one that matches current URL
                */}
                <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #f4f4f5' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Wildcard path="*" matches anything that didn't match the routes above */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </MemoryRouter>
    );
}

export default RouterDemo;
