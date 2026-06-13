import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-between px-4 py-2">
            <p className="navbar-brand mb-0">Kaushal</p>
            <ul className="navbar-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>

                <li>
                    <a href="/about" className="nav-link">
                        About
                    </a>
                </li>

                <li>
                    <a href="/projects" className="nav-link">
                        Projects
                    </a>
                </li>

                <li>
                    <a href="/contact" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>

            <section className="d-flex gap-3">
                <button className="navbar-btn">Login</button>
                <button type="button" className="btn btn-light">
                    Signup
                </button>
            </section>
        </nav>
    );
}

export default Navbar;
