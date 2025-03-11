import React from "react";
import "../components/Footer.css";

const FooterMalayalam = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* എളുപ്പത്തിലുള്ള ലിങ്കുകൾ വിഭാഗം */}
        <div className="footer-section footer-links">
          <h3 style={{ color: "black" }}>എളുപ്പത്തിലുള്ള ലിങ്കുകൾ</h3>
          <ul>
            <li><a href="/aboutus">ഞങ്ങളെ കുറിച്ച്</a></li>
            <li><a href="/services">സേവനങ്ങൾ</a></li>
            <li><a href="/careers">കരിയർ</a></li>
            <li><a href="https://thennai.medium.com/">ബ്ലോഗ്</a></li>
          </ul>
        </div>

        {/* ബന്ധപ്പെടുക വിഭാഗം */}
        <div className="footer-section footer-contact" style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>ഞങ്ങളോട് ബന്ധപ്പെടാം</h3>
          <p><a href="mailto:info@thennai.co.in" style={{ color: "black", textDecoration: "none" }}>ഇമെയിൽ: info@thennai.co.in</a></p>
          <p><a href="tel:+918608825725" style={{ color: "black", textDecoration: "none" }}>ഫോൺ: +91 86088 25725</a></p>
          <p style={{ color: "black" }}>വിലാസം: THENNAI TECH Pvt Ltd<br />
            85, പാലനാപ്പൻ തെരു, <br />
            പോള്ളാച്ചി, കോയമ്പത്തൂർ - 642001</p>
        </div>

        {/* ന്യൂസ്‌ലെറ്റർ സബ്സ്ക്രിപ്ഷൻ വിഭാഗം */}
        <div className="footer-section footer-newsletter">
          <h3>ഞങ്ങളുടെ വാർത്താപത്രികയിലേക്ക് സബ്സ്ക്രൈബ് ചെയ്യൂ</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="നിന്റെ ഇമെയിൽ ഇവിടെ നൽകൂ"
              required
            />
            <button type="submit">സബ്സ്ക്രൈബ് ചെയ്യുക</button>
          </form>
        </div>
      </div>

      {/* ഫൂട്ടർ ബോട്ടം വിഭാഗം */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Thennai. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്.</p>
      </div>
    </footer>
  );
};

export default FooterMalayalam;