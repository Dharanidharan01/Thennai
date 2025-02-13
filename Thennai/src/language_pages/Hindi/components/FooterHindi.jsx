import React from "react";
import "../components/Footer.css";

const FooterHindi = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section footer-links">
          <h3 style={{ color: "black" }}>त्वरित लिंक</h3>
          <ul>
            <li><a href="/Aboutushindi">हमारे बारे में</a></li>
            <li><a href="/services">सेवाएं</a></li>
            <li><a href="/careers">करियर</a></li>
            <li><a href="https://thennai.medium.com/">ब्लॉग</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section footer-contact" style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>हमसे संपर्क करें</h3>
          <p><a href="mailto:info@thennai.co.in" style={{ color: "black", textDecoration: "none" }}>ईमेल: info@thennai.co.in</a></p>
          <p><a href="tel:8608825725" style={{ color: "black", textDecoration: "none" }}>फोन: +91 86088 25725</a></p>
          <p style={{ color: "black" }}>पता THENNAI TECH Pvt Ltd<br />
            85, पलानीअप्पन स्ट्रीट,<br />
            पोल्लाची, कोयंबटूर - 642001</p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section footer-newsletter">
          <h3>हमारे समाचार पत्र के लिए सब्सक्राइब करें</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="अपना ईमेल दर्ज करें"
              required
            />
            <button type="submit">सब्सक्राइब</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Thennai. सर्वाधिकार सुरक्षित।</p>
      </div>
    </footer>
  );
};

export default FooterHindi;
