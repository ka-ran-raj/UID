import React from 'react';
import './Header.css'; // Optional: Add specific styles for the header

function Header() {
  return (
    <header>
      <div className="logo">My Website</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
