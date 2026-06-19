import { Link } from 'react-router';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-between px-4 py-2">
            <p className="navbar-brand mb-0">hellokaushal.dev</p>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/about" className="nav-link">
                        About Me
                    </Link>
                </li>

                <li>
                    <Link to="/my-work" className="nav-link">
                        My Work
                    </Link>
                </li>

                <li>
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
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
