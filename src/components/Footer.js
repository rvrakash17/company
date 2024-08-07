import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => (
  <footer className="footer" id="contact" ref={ref}>
    <div className="footer-content">
      <p className="footer-heading">Contact</p>
      <p className="footer-info">+91 9597088682 | rvrakash2003@gmail.com</p>
      <div className="social-links">
        <a href="" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img src="link.png" alt="LinkedIn" className="social-icon" />
          LinkedIn
        </a>
        <a href="" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <img src="wp.png" alt="WhatsApp" className="social-icon" />
          WhatsApp
        </a>
        <a href="" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <img src="insta.png" alt="Instagram" className="social-icon" />
          Instagram
        </a>
      </div>
    </div>
  </footer>
));

export default Footer;
