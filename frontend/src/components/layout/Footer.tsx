import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__logo">Stratego</h3>
            <p className="footer__description">
              Professional archery tournament management platform for clubs and organizations.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__list">
              <li><a href="#features" className="footer__link">Features</a></li>
              <li><a href="#how-it-works" className="footer__link">How It Works</a></li>
              <li><a href="#" className="footer__link">About</a></li>
              <li><a href="#" className="footer__link">Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Resources</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Documentation</a></li>
              <li><a href="#" className="footer__link">Support</a></li>
              <li><a href="#" className="footer__link">FAQ</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__list">
              <li><a href="mailto:info@stratego.com" className="footer__link">info@stratego.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Stratego. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__separator">•</span>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
