import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: '#333' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <Link to="/">
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Link>
        <div>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/projects" style={navLinkStyle}>Projects</Link>
          <Link to="/blog" style={navLinkStyle}>Blog</Link>
          <Link to="/services" style={navLinkStyle}>Services</Link>
          <Link to="/technologies" style={navLinkStyle}>Technologies</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 1rem'
};

export default Header;
