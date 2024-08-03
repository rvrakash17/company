import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f8f8', position: 'fixed', bottom: 0, width: '100%' }}>
      <div>
        <Link to="/">
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Link>
        <p>© 2024 Tech Startup</p>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
         
        </a>
      </div>
    </footer>
  );
};

export default Footer;
