import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Import the Header.css file

function Header() {
  return (
    <header className="header"> {/* Use className instead of style */}
      <div className="header-container"> {/* Use className instead of style */}
        {/* Name or Logo */}
        <h1>Joe McKenna</h1> {/* No need for inline styles here */}
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
