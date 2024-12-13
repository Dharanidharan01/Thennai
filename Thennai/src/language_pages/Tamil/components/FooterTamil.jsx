import React from "react";
import "../components/Footer.css";

const FooterTamil = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section footer-links">
          <h3 style={{ color: "black" }}>விரைவு இணைப்புகள்</h3>
          <ul>
            <li><a href="/Aboutustamil">எங்களைப் பற்றி</a></li>
            <li><a href="/services">சேவைகள்</a></li>
            <li><a href="/careers">பணியிடம்</a></li>
            <li><a href="https://thennai.medium.com/">பிளாக்</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section footer-contact"  style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>எங்களுடன் தொடர்பு கொள்ளவும்</h3>
          <p ><a href="mailto:info@thennai.co.in" style={{ color: "black", textDecoration: "none" }}>மின்னஞ்சல்: info@thennai.co.in</a></p>
          <p><a href="tel:+918608825725" style={{ color: "black", textDecoration: "none" }}>தொலைபேசி: +91 86088 25725</a></p>
          <p style={{ color: "black" }}> முகவரி THENNAI TECH Pvt Ltd<br />
            85, Palaniappan street, <br />
            Pollachi, Coimbatore - 642001</p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section footer-newsletter">
          <h3>எங்கள் செய்தி பத்திரிகைக்கு சந்தா செய்யவும்</h3>
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

export default FooterTamil;