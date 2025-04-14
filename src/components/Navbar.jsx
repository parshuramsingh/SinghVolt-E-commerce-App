import { useState } from 'react';
import PropTypes from 'prop-types';
import '../style.css';
import 'boxicons/css/boxicons.min.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <input
          type="checkbox"
          id="checkbox"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        />
        <div className="hamburger-lines" aria-hidden="true">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items" role="menu">
          <li><a href="#home" role="menuitem" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#products" role="menuitem" onClick={() => setIsMenuOpen(false)}>Store</a></li>
          <li><a href="#updates" role="menuitem" onClick={() => setIsMenuOpen(false)}>Tech Blog</a></li>
          <li><a href="#support" role="menuitem" onClick={() => setIsMenuOpen(false)}>Support</a></li>
        </ul>
        <div className="logo">
          <img
            src="/assets/logo.webp" // Replace with local asset
            alt="TechTrendz Logo"
            width="60"
            height="60"
            loading="lazy"
          />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;