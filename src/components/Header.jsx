import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import orriunAtlasLogo from '../assets/logo.svg';
import wordmarkLogo from '../assets/Wordmark.svg';
import BookDemoModal from './BookDemoModal';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About Us', path: '/about' },
    {
      name: 'Solutions',
      path: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Oilfield Asset Management', path: '/solutions/asset-management' },
        { name: 'Field Ticketing and Invoicing', path: '/solutions/ticketing-invoicing' },
        { name: 'Job Scheduling and Dispatching', path: '/solutions/scheduling-dispatching' },
        { name: 'Inventory and Parts Management', path: '/solutions/inventory-management' },
        { name: 'IoT and Predictive Maintenance', path: '/solutions/iot-predictive' },
        { name: 'Compliance and Safety Management', path: '/solutions/compliance-safety' },
        { name: 'Real-Time Reporting and Dashboards', path: '/solutions/reporting-dashboards' },
        { name: 'Mobile App for Field Technicians', path: '/solutions/mobile-app' },
      ]
    },
    {
      name: 'Industries',
      path: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Drilling Contractors', path: '/industries/drilling-contractors' },
        { name: 'Equipment Rentals', path: '/industries/equipment-rentals' },
        { name: 'Mid & Upstream Operations', path: '/industries/mid-upstream-operations' },
        { name: 'Oilfield Services', path: '/industries/oilfield-services' },
        { name: 'Well Testing and Flowback', path: '/industries/well-testing-flowback' },
        { name: 'Wireline and Coil Tubing', path: '/industries/wireline-coil-tubing' },
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Blog', path: '/blog' },
      ]
    },
    { name: 'Integrations', path: '/integrations' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
  };

  return (
    <header className='header'>
      {/* Top Bar */}
      <div className='header-top'>
        <div className='container header-top-content'>
          <div className='header-top-left'>
            <div className='top-info-item'>
              <i className="fas fa-map-marker-alt" style={{ fontSize: '16px' }} />
              <span>2715 Ash Dr. San Jose, South Dakota 83475</span>
            </div>
            <div className='top-info-item'>
              <i className="fas fa-envelope" style={{ fontSize: '16px' }} />
              <span>oil.industry12@example.com</span>
            </div>
          </div>
          <div className='header-top-right'>
            <div className='top-info-item'>
              <button
                className='btn-schedule-demo-top'
                onClick={() => setIsBookDemoOpen(true)}
              >
                SCHEDULE DEMO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className='nav-bar'>
        <div className='container nav-container'>
          <Link to='/' className='logo'>
            <img src={orriunAtlasLogo} alt='Orriun Atlas Logo' className='logo-image' />
            <img src={wordmarkLogo} alt='Orriun Atlas Wordmark' className='logo-wordmark' />
          </Link>

          {/* Desktop Menu */}
          <nav className='desktop-menu'>
            {navItems.map((item) => (
              <div key={item.name} className={`menu-item-wrapper ${item.hasDropdown ? 'has-dropdown' : ''}`}>
                <Link
                  to={item.path}
                  className={'menu-link ' + (location.pathname.startsWith(item.path) ? 'active' : '')}
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className='dropdown-menu'>
                    {item.dropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className={`dropdown-item ${location.pathname === dropItem.path ? 'active' : ''}`}
                      >
                        {dropItem.name}
                        <i className="fas fa-arrow-right dropdown-item-arrow"></i>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className='header-actions'>
            <button
              className='mobile-menu-btn'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <i className="fas fa-times" style={{ fontSize: '24px' }}></i> : <i className="fas fa-bars" style={{ fontSize: '24px' }}></i>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='mobile-menu'>
          {navItems.map((item) => (
            <div key={item.name} className='mobile-menu-item'>
              {item.hasDropdown ? (
                <>
                  <div
                    className='mobile-link mobile-dropdown-toggle'
                    onClick={() => toggleMobileDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <i className={`fas fa-chevron-down mobile-dropdown-icon ${mobileDropdownOpen === item.name ? 'open' : ''}`}></i>
                  </div>
                  {mobileDropdownOpen === item.name && (
                    <div className='mobile-dropdown'>
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className='mobile-dropdown-item'
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className='mobile-link'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Book Demo Modal */}
      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </header>
  );
};

export default Header;
