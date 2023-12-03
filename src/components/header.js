import React, { useState } from 'react';
import './header.css'; // Import the CSS file
// import CalendarCheck2 from './logo';
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="brand-logo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check-2"><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m16 20 2 2 4-4"/></svg>
                    <a href="/">Calendar</a>
                </div>
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                </div>
                <ul className={`nav-links ${showMobileMenu ? 'mobile-menu-show' : ''}`}>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><button className="btn btn-login">Log in</button></li>
                    <li><button className="btn btn-get-started">Get started</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
