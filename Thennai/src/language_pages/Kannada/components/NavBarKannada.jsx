import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../assets/logo.png';

const NavBarKannada = () => {
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
        } else if (language === 'kannada') {
            navigate('/homepagekannada');
        } else if (language === 'tamil') {
            navigate('/homepagetamil');
        } else if (language === 'malayalam') {
            navigate('/homepagemalayalam');
        }
        setLanguageDropdownOpen(false);
        setSidebarOpen(false); // Close dropdown and sidebar
    };

    const handleNavigate = (route) => {
        navigate(`/${route}`);
        setSidebarOpen(false); // Close sidebar on navigation
    };

    const handleLogoClick = () => {
        navigate('/homepagekannada'); // Navigate to Kannada home page
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
                    <span onClick={() => handleNavigate('Aboutuskannada')}>ನಮ್ಮ ಬಗ್ಗೆ</span>
                    <Link to="product-section" smooth={true} offset={-70} duration={500} className="nav-links">
                        ಉತ್ಪನ್ನಗಳು
                    </Link>
                    <span onClick={() => handleNavigate('BenefitsOfCoconutKannada')}>ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ</span>
                    <span onClick={() => handleNavigate('kar')}>ಸುದ್ದಿ ಬೆಲೆ</span>
                </div>

                <div className="contact-language">
                    <Link to="contactus-header" smooth={true} offset={-70} duration={500} className="contact-btn">
                        ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ
                    </Link>
                    <div className="language-btn" onClick={toggleLanguageDropdown}>
                        ಭಾಷೆ
                        {isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('kannada')}>ಕನ್ನಡ</li>
                                    <li onClick={() => handleLanguageChange('tamil')}>தமிழ்</li>
                                    <li onClick={() => handleLanguageChange('malayalam')}>മലയാളം</li>
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
                    <li onClick={() => handleNavigate('AboutUsKannada')}>ನಮ್ಮ ಬಗ್ಗೆ</li>
                    <li onClick={() => handleNavigate('ppt')}>ಉತ್ಪನ್ನಗಳು</li>
                    <li onClick={() => handleNavigate('BenefitsOfCoconutKannada')}>ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ</li>
                    <li onClick={() => handleNavigate('kar')}>ಸುದ್ದಿ ಬೆಲೆ</li>
                    <li>
                        <Link to="contactus-header" smooth={true} offset={-70} duration={500} onClick={toggleSidebar}>
                            ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ
                        </Link>
                    </li>
                    <li className="sidebar-language">
                        <div onClick={toggleLanguageDropdown} className="sidebar-language-btn">
                            ಭಾಷೆ
                        </div>
                        {isLanguageDropdownOpen && (
                            <div className="sidebar-dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('kannada')}>ಕನ್ನಡ</li>
                                    <li onClick={() => handleLanguageChange('tamil')}>தமிழ்</li>
                                    <li onClick={() => handleLanguageChange('malayalam')}>മലയാളം</li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarKannada;
