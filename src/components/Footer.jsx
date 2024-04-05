import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://github.com/JMcKenna01" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/joseph-m-9061a2289/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add more social links as needed */}
      </div>
      <p>&copy; {new Date().getFullYear()} Joe McKenna. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
