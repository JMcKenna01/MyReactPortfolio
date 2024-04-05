import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for SPA navigation

function Navigation() {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Use Link components for navigation. Replace "#" with your actual path */}
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/">About Me</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/contact">Contact</Link>
        </li>
        <li style={{ display: 'inline' }}>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
