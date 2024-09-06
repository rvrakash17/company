import React from 'react';
import { Link } from 'react-router-dom';

function Header({ scrollToFooter }) {
  return (
    <header className="header">
      <div className="logo">UIT</div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li> {/* Updated Contact Link */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
