import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-between px-4 py-2">
            <p className="navbar-brand mb-0">Kaushal.dev</p>
            <ul className="navbar-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>

                <li>
                    <a href="/about" className="nav-link">
                        About Me
                    </a>
                </li>

                <li>
                    <a href="/projects" className="nav-link">
                        My Work
                    </a>
                </li>

                <li>
                    <a href="/contact" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>

            <section className="d-flex gap-3">
                <button type="button" className="navbar-btn">
                    Resume
                </button>
                <button type="button" className="btn btn-light signup-btn">
                    Hire Me
                </button>
            </section>
        </nav>
    );
}

export default Navbar;
