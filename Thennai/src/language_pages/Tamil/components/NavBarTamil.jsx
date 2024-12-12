import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing and useNavigate for programmatic navigation
import './NavBar.css';
import logo from '../../../assets/logo.png';

const NavBarTamil = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();  // Initialize navigate to navigate programmatically

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (language) => {
    if (language === 'english') {
      navigate('/'); // Navigate to English homepage
    } else if (language === 'tamil') {
      navigate('/homepagetamil'); // Navigate to Tamil homepage
    }
  };

  return (
    <div>
      {/* நாவ்பார் */}
      <nav className="navbar">
        {/* இடது பகுதி: லோகோ */}
        <div className="navbar-logo">
          <img
            src={logo} // உண்மையான லோகோ பாதையை இங்கு மாற்றவும்
            alt="Logo"
            className="logo-image"
          />
          <span className="logo-text"></span>
        </div>

        {/* நடுவண் பகுதி: பெரிய திரைகளுக்கான நாவிகேஷன் இணைப்புகள் */}
        <div className="nav-links">
          <Link to="/farming-community">முகப்பு</Link>
          <Link to="/products">எங்களை பற்றி</Link>
          <Link to="/products">பொருட்கள்</Link>
          <Link to="/farming-guide">விவசாய வழிகாட்டி</Link>
          <Link to="/live-prices">செய்தி விலை</Link>
        </div>

        {/* வலது பகுதி: எங்களை தொடர்பு கொள்ளும் பொத்தான் */}
        <div className="contact-btn">
          <Link to="/contact">எங்களை தொடர்பு கொள்ள</Link>
        </div>

        {/* மொபைலுக்கான சுவிட்ச் பொத்தான் */}
        <div className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>

      {/* பக்கப் பட்டியல் */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to="/farming-community">விவசாய சமூகம்</Link>
          </li>
          <li>
            <Link to="/farming-guide">விவசாய வழிகாட்டி</Link>
          </li>
          <li>
            <Link to="/live-prices">செய்தி விலை</Link>
          </li>
          <li>
            <Link to="/products">பொருட்கள்</Link>
          </li>
          <li>
            <Link to="/contact">எங்களை தொடர்பு கொள்ள</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarTamil;
