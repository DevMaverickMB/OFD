import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bottomLogo from '../assets/Bottom logo.svg';
import { Button } from './ui/button';
import { Input } from './ui/input';
import './Footer.css';

import BookDemoModal from './BookDemoModal';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const industries = [
    { name: 'Drilling Contractors', path: '/industries/drilling-contractors' },
    { name: 'Equipment Rentals', path: '/industries/equipment-rentals' },
    { name: 'Mid & Upstream Operations', path: '/industries/mid-upstream-operations' }, // Note: Check page path availability
    { name: 'Oilfield Services', path: '/industries/oilfield-services' },
    { name: 'Well Testing and Flowback', path: '/industries/well-testing-flowback' },
    { name: 'Wireline and Coil Tubing', path: '/industries/wireline-coil-tubing' }
  ];

  const aboutLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Integrations', path: '/integrations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={bottomLogo} alt="Orriun Atlas" className="logo-image" />
            </Link>
            <p className="tagline">Simplify Workflows, Amplify Results.</p>

            <div className="contact-info">
              <div className="consultation">
                <i className="far fa-comments"></i>
                <span>Need a Consultation?</span>
              </div>
              <button
                className="footer-schedule-btn"
                onClick={() => setIsBookDemoOpen(true)}
              >
                Schedule a Demo
              </button>
              <a href="tel:+18133986692" className="phone">+1 (813) 398-6692</a>
              <a href="tel:+16479044052" className="phone">+1 (647) 904-4052</a>
              <a href="tel:+2348035240802" className="phone">+234 (803) 524-0802</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Our Industries</h4>
            <ul>
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link to={industry.path}>{industry.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>About Orriun Atlas</h4>
            <ul>
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter to receive updates on the latest news!</p>
            <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
              <div className="input-group">
                <Input
                  type="email"
                  placeholder="Subscribe with us"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="icon">
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 <span className="highlight">Orriun Atlas</span>. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </footer>
  );
};

export default Footer;
