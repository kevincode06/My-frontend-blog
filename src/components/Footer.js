import React from "react";
import "../styles/Footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} C@Kevin. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          X (Twitter)
        </a>
      </div>
    </footer>
  );
};

export default Footer;
