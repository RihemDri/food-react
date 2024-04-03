import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer"  id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@foodies.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-section location">
            <h2>Location</h2>
            <p>123 Main Street, Cityville, Tunisia</p>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Foodies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
