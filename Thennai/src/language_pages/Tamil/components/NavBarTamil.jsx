import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../assets/logo.png';

const NavBarTamil = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const handleLanguageChange = (language) => {
        if (language === 'english') {
            navigate('/');
        } else if (language === 'tamil') {
            navigate('/homepagetamil');
        }
        setLanguageDropdownOpen(false);
        setSidebarOpen(false); // close the sectioh
    };

    const handleNavigate = (route) => {
        navigate(`/${route}`);
        setSidebarOpen(false); // Close sidebar on navigation
    };

    const handleLogoClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    {/* Logo as a button for navigation */}
                    <button onClick={handleLogoClick} className="logo-button">
                        <img src={logo} alt="Logo" className="logo-image" />
                    </button>
                </div>

                <div className="nav-links">
                    <span onClick={() => handleNavigate('Aboutustamil')}>எங்களை பற்றி</span>
                    
                    <Link to="product-section" smooth={true} offset={-70} duration={500} className="nav-links">
                    பொருட்கள்
                    </Link>
                    <span onClick={() => handleNavigate('fgt')}>விவசாய வழிகாட்டி</span>
                    <span onClick={() => handleNavigate('tamilnadu')}>செய்தி விலை</span>
                </div>

                <div className="contact-language">
                    <Link to="contactus-header" smooth={true} offset={-70} duration={500} className="contact-btn">
                        Contact Us
                    </Link>
                    <div className="language-btn" onClick={toggleLanguageDropdown}>
                        Language
                        {isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('tamil')}>தமிழ்</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="toggle-btn" onClick={toggleSidebar}>
                    ☰
                </div>
            </nav>

            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>✖</button>
                <ul className="sidebar-links">
                    <li onClick={() => handleNavigate('Aboutustamil')}>எங்களை பற்றி</li>
                    <li onClick={() => handleNavigate('ppt')}>பொருட்கள்</li>
                    <li onClick={() => handleNavigate('fgt')}>விவசாய வழிகாட்டி</li>
                    <li onClick={() => handleNavigate('tamilnadu')}>செய்தி விலை</li>
                    <li>
                        <Link to="contactus-header" smooth={true} offset={-70} duration={500} onClick={toggleSidebar}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="sidebar-language">
                        <div onClick={toggleLanguageDropdown} className="sidebar-language-btn">
                            Language
                        </div>
                        {isLanguageDropdownOpen && (
                            <div className="sidebar-dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('tamil')}>தமிழ்</li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarTamil;
