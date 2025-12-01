import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🦁</span>
          <span className="logo-text">SAFARY</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/knowyourfarmer" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Know Your Farmer
            </Link>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
