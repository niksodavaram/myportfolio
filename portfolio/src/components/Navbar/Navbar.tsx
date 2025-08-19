import { Link } from 'react-router-dom';
import './css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Nireekshan Sodavaram</div>
      <ul className="navbar-links">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/reviews">Reviews</Link> {/* <-- Add this line */}
        </li>
        <li>
            <a
                href="https://github.com/niksodavaram"
                target="_blank"
                rel="noopener noreferrer"
                >
                    GitHub

            </a>
        </li>
        <li>
            <a
                href="https://www.linkedin.com/nirekshan-sodavaram-phd-651525151"
                target="_blank"
                rel="noopener noreferrer"
            >
                Linkedin
            </a>
        </li>
      </ul>
    </nav>
  );
}