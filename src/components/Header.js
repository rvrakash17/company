import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">UIOP</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
