import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section bg-dark text-white">
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="footer-logo mb-3">hellokaushal.dev</h4>
                        <p className="text-white-50">A personal portfolio built with React to showcase my learning, projects, and web development journey.</p>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="mb-3">Quick Links</h5>

                        <ul className="list-unstyled footer-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Me</Link>
                            </li>
                            <li>
                                <Link to="/my-work">My Work</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Contact</h5>

                        <p className="text-white-50 mb-2">Jamshedpur, Jharkhand</p>

                        <p className="mb-0">
                            <a href="mailto:your-email@example.com" className="footer-email">
                                your-email@example.com
                            </a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Skills</h5>

                        <div className="d-flex flex-wrap gap-2">
                            <span className="footer-badge">HTML</span>
                            <span className="footer-badge">CSS</span>
                            <span className="footer-badge">JavaScript</span>
                            <span className="footer-badge">React</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom border-top border-secondary">
                <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <p className="mb-0 text-white-50">© {currentYear} hellokaushal.dev. All rights reserved.</p>

                    <p className="mb-0 text-white-50">Built with React and Bootstrap</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
