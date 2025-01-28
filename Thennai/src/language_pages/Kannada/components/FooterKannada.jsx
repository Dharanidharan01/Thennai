import React from "react";
import "../components/Footer.css";

const FooterKannada = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section footer-links">
          <h3 style={{ color: "black" }}>ತ್ವರಿತ ಲಿಂಕುಗಳು</h3>
          <ul>
            <li><a href="/Aboutustamil">ನಮ್ಮ ಬಗ್ಗೆ</a></li>
            <li><a href="/services">ಸೇವೆಗಳು</a></li>
            <li><a href="/careers">ಕೆಲಸದ ಅವಕಾಶ</a></li>
            <li><a href="https://thennai.medium.com/">ಬ್ಲಾಗ್</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section footer-contact" style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ</h3>
          <p><a href="mailto:info@thennai.co.in" style={{ color: "black", textDecoration: "none" }}>ಇಮೇಲ್: info@thennai.co.in</a></p>
          <p><a href="tel:8608825725" style={{ color: "black", textDecoration: "none" }}>ಫೋನ್: +91 86088 25725</a></p>
          <p style={{ color: "black" }}> ವಿಳಾಸ: THENNAI TECH Pvt Ltd<br />
            85, ಪಳನಿಯಪ್ಪನ್ ಸ್ಟ್ರೀಟ್, <br />
            ಪೊಲ್ಲಾಚಿ, ಕೋಯಮ್ಬತ್ತೂರು - 642001</p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section footer-newsletter">
          <h3>ನಮ್ಮ ಸುದ್ದಿಪತ್ರಕ್ಕೆ ಚಂದಾದಾರರಾಗಿರಿ</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ"
              required
            />
            <button type="submit">ಚಂದಾದಾರರಾಗಿ</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Thennai. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಮೀಸಲಾಗಿವೆ.</p>
      </div>
    </footer>
  );
};

export default FooterKannada;
