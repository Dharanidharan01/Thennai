import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../assets/logo.png';

const NavBarHindi = () => {
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
        const routes = {
            english: '/',
            hindi: '/homepagehindi',
            tamil: '/HomepageTamil',
            malayalam: '/Malayalam',
            kannada: '/HomepageKannada'
        };

        navigate(routes[language]);
        setLanguageDropdownOpen(false);
        setSidebarOpen(false);
    };

    const handleNavigate = (route) => {
        navigate(`/${route}`);
        setSidebarOpen(false);
    };

    const handleLogoClick = () => {
        navigate('/homepagehindi');
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
                    <span onClick={() => handleNavigate('Aboutushindi')}>हमारे बारे में</span>
                    
                    <Link to="product-section" smooth={true} offset={-70} duration={500} className="nav-links">
                        उत्पाद
                    </Link>
                    <span onClick={() => handleNavigate('BenefitsOfCoconutHindi')}>कृषि मार्गदर्शक</span>
                    <span onClick={() => handleNavigate('samachar-muly')}>समाचार कीमतें</span>
                </div>

                <div className="contact-language">
                    <Link to="contactus-header" smooth={true} offset={-70} duration={500} className="contact-btn">
                        संपर्क करें
                    </Link>
                    <div className="language-btn" onClick={toggleLanguageDropdown}>
                        भाषा
                        {isLanguageDropdownOpen && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('hindi')}>हिंदी</li>
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
                    <li onClick={() => handleNavigate('AboutusHindi')}>हमारे बारे में</li>
                    <li onClick={() => handleNavigate('utpaad')}>उत्पाद</li>
                    <li onClick={() => handleNavigate('kisan-margdarshak')}>कृषि मार्गदर्शक</li>
                    <li onClick={() => handleNavigate('samachar-muly')}>समाचार कीमतें</li>
                    <li>
                        <Link to="contactus-header" smooth={true} offset={-70} duration={500} onClick={toggleSidebar}>
                            संपर्क करें
                        </Link>
                    </li>
                    <li className="sidebar-language">
                        <div onClick={toggleLanguageDropdown} className="sidebar-language-btn">
                            भाषा
                        </div>
                        {isLanguageDropdownOpen && (
                            <div className="sidebar-dropdown-menu">
                                <ul>
                                    <li onClick={() => handleLanguageChange('english')}>English</li>
                                    <li onClick={() => handleLanguageChange('hindi')}>हिंदी</li>
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

export default NavBarHindi;
