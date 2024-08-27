import React from 'react';
import './Footer.css'; // Optional: Add specific styles for the footer

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Website</p>
      <nav>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
