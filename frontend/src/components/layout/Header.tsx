import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <a href="/" className="header__logo-link">
            <span className="header__logo-text">Stratego</span>
          </a>
        </div>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <button
            className="header__link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button
            className="header__link"
            onClick={() => scrollToSection('features')}
          >
            Features
          </button>
          <button
            className="header__link"
            onClick={() => scrollToSection('how-it-works')}
          >
            How It Works
          </button>
          <a href="#" className="header__cta">Get Started</a>
        </nav>

        <button
          className="header__hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
