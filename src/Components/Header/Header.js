import React from 'react';

function Header({ scrollToFooter }) {
  return (
    <header className="header">
      <div className="logo">UIOP</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/solutions">Solutions</a></li>
          <li><a href="/careers">Careers</a></li> {/* Add link to Careers */}
          <li><a href="/blog">Blog</a></li>
          <li><a href="#contact" onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            scrollToFooter();
          }}>Contact us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
