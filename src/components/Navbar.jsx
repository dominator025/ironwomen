import React, { useState, useEffect } from 'react';
import { Menu, X, Coins } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo cursor-pointer" onClick={() => navigate('/')}>
                    <Coins className="logo-icon" size={28} />
                    <span>Money Mantri</span>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
                    <a href="#impact" onClick={() => setMobileMenuOpen(false)}>Impact</a>
                    <div className="nav-buttons mobile-only">
                        <button className="btn btn-secondary" onClick={() => navigate('/login')}>Log In</button>
                        <button className="btn btn-primary" onClick={() => navigate('/login')}>Get Started</button>
                    </div>
                </div>

                <div className="nav-buttons desktop-only">
                    <button className="btn btn-secondary" onClick={() => navigate('/login')}>Log In</button>
                    <button className="btn btn-primary" onClick={() => navigate('/login')}>Get Started</button>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
