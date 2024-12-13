import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section footer-links">
          <h3 style={{ color: "black" }}>Quick Links</h3>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/services">Products</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="https://thennai.medium.com/">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section footer-contact"  style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>Contact Us</h3>
          <p ><a href="mailto:info@thennai.co.in" style={{ color: "black", textDecoration: "none" }}>Email: info@thennai.co.in</a></p>
          <p><a href="tel:+918608825725" style={{ color: "black", textDecoration: "none" }}>Phone: +91 86088 25725</a></p>
          <p style={{ color: "black" }}> Address: THENNAI TECH Pvt Ltd<br />
            85, Palaniappan street, <br />
            Pollachi, Coimbatore - 642001</p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Thennai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;