import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../assets/logo.png';

const NavBarMalayalam = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleLanguageChange = (language) => {
        if (language === 'english') {
            navigate('/');
        } else if (language === 'tamil') {
            navigate('/homepagetamil');
        } else if (language === 'malayalam') {
            navigate('/homepagemalayalam');
        } else if (language === 'kannada') {
            navigate('/homepagekannada');
        } else if (language === 'hindi') {
            navigate('/homepagehindi');
        }
        setLanguageDropdownOpen(false);
        setSidebarOpen(false); // Close the sidebar
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
                    <span onClick={() => handleNavigate('AboutUsMalayalam')}>ഞങ്ങളെ കുറിച്ച്</span>
                    <Link to="product-section" smooth={true} offset={-70} duration={500} className="nav-links">
                        സേവനങ്ങൾ
                    </Link>
                    <span onClick={() => handleNavigate('FarmingGuideMalayalam')}>തേങ്ങാ കൃഷി മാർഗനിർദ്ദേശം</span>
                    <span onClick={() => handleNavigate('market-prices')}>മാർക്കറ്റ് വിലകൾ</span>
                </div>

                <div className="contact-language">
                    <Link to="contactus-header" smooth={true} offset={-70} duration={500} className="contact-btn">
                        ഞങ്ങളോട് ബന്ധപ്പെടാം
                    </Link>
                    <div className="language-btn" onClick={toggleLanguageDropdown}>
                        ഭാഷ
                        {isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('hindi')}>हिन्दी</li>
                                    <li onClick={() => handleLanguageChange('tamil')}>தமிழ்</li>
                                    <li onClick={() => handleLanguageChange('malayalam')}>മലയാളം</li>
                                    <li onClick={() => handleLanguageChange('kannada')}>ಕನ್ನಡ</li>
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
                    <li onClick={() => handleNavigate('AboutUsMalayalam')}>ഞങ്ങളെ കുറിച്ച്</li>
                    <li onClick={() => handleNavigate('products')}>സേവനങ്ങൾ</li>
                    <li onClick={() => handleNavigate('FarmingGuideMalayalam')}>തേങ്ങാ കൃഷി മാർഗനിർദ്ദേശം</li>
                    <li onClick={() => handleNavigate('market-prices')}>മാർക്കറ്റ് വിലകൾ</li>
                    <li>
                        <Link to="contactus-header" smooth={true} offset={-70} duration={500} onClick={toggleSidebar}>
                            ഞങ്ങളോട് ബന്ധപ്പെടാം
                        </Link>
                    </li>
                    <li className="sidebar-language">
                        <div onClick={toggleLanguageDropdown} className="sidebar-language-btn">
                            ഭാഷ
                        </div>
                        {isLanguageDropdownOpen && (
                            <div className="sidebar-dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('hindi')}>हिन्दी</li>
                                    <li onClick={() => handleLanguageChange('tamil')}>தமிழ்</li>
                                    <li onClick={() => handleLanguageChange('malayalam')}>മലയാളം</li>
                                    <li onClick={() => handleLanguageChange('kannada')}>ಕನ್ನಡ</li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarMalayalam;
