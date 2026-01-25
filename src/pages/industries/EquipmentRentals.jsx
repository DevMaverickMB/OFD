import equipmentRentalsHero from '../../assets/industries/equipment-rentals.png';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import AnimationObserver from '../../components/AnimationObserver';

const EquipmentRentals = () => {
  const industries = [
    { name: 'Equipment Rentals', path: '/industries/equipment-rentals' },
    { name: 'Drilling Contractors', path: '/industries/drilling-contractors' },
    { name: 'Mid & Upstream Operations', path: '/industries/mid-upstream-operations' },
    { name: 'Oilfield Services', path: '/industries/oilfield-services' },
    { name: 'Well Testing and Flowback', path: '/industries/well-testing-flowback' },
    { name: 'Wireline and Coil Tubing', path: '/industries/wireline-coil-tubing' }
  ];



  return (
    <div className="industry-detail-page">
      <AnimationObserver />
      <PageBanner
        title="Equipment Rentals"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: 'Equipment Rentals' }
        ]}
      />

      <div className="industry-detail-container">
        <aside className="industry-sidebar scroll-animate" data-animate="fade-right">
          <div className="sidebar-section">
            <h3>Our Services</h3>
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={industry.path}
                className={industry.name === 'Equipment Rentals' ? 'sidebar-link active' : 'sidebar-link'}
              >
                {industry.name}
                <i className="fas fa-arrow-right"></i>
              </Link>
            ))}
          </div>



          <div className="sidebar-material">
            <h3>Brochures</h3>
            <Link to="/contact" className="material-link">
              <i className="fas fa-file-pdf"></i>
              <span>Orriun Atlas Brief</span>
            </Link>
          </div>

          <div className="sidebar-promo" style={{ backgroundImage: `url(${sidebarPromoBg})` }}>
            <div className="promo-content">
              <div className="promo-logo">
                <img src={logo} alt="Orriun Atlas" />
              </div>
              <h3>Optimizing Operations with our Solutions</h3>
              <p>Discover relationships with your business</p>
              <Link to="/solutions" className="promo-btn">
                <i className="fas fa-arrow-right"></i> READ MORE
              </Link>
            </div>
          </div>

          <div className="sidebar-cta">
            <div className="sidebar-cta-image" style={{ backgroundImage: `url(${sidebarCtaBg})` }}></div>
            <div className="sidebar-cta-content">
              <div className="cta-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>How Can We Help?</h3>
              <a href="tel:+44123456789" className="cta-phone">
                <i className="fas fa-phone-alt"></i>
                (+44) 123 456 789
              </a>
              <a href="mailto:addyour@emailhere" className="cta-email">
                <i className="fas fa-envelope"></i>
                addyour@emailhere
              </a>
            </div>
          </div>
        </aside >

        <main className="industry-content">
          <div className="industry-hero-image scroll-animate" data-animate="blur-fade">
            <img src={equipmentRentalsHero} alt="Equipment Rentals" />
          </div>

          <section className="industry-intro scroll-animate" data-animate="fade-up">
            <h1>Equipment Rentals</h1>
            <p className="subtitle">Optimizing Utilization and Efficiency with Orriun Atlas</p>
            <p className="description">
              Equipment rental companies are instrumental to the oil and gas industry, providing specialized tools, machinery, and equipment vital for exploration, drilling, and production activities. These companies face the challenge of managing vast inventories, ensuring equipment uptime, overseeing seamless logistics, and maintaining accurate financial records.
            </p>
            <p className="description" style={{ marginTop: '20px' }}>
              Orriun Atlas emerges as a comprehensive solution built to address these complexities and unlock operational excellence.
            </p>
          </section>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px' }}>Challenges Faced by Equipment Rental Companies without Orriun Atlas</h3>
          <p className="section-description">Without a unified system, equipment rental companies often struggle with inventory visibility and utilization rates.</p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Asset Tracking Challenges</h3>
                <p>Difficulty in locating assets in real-time leads to underutilization and lost revenue.</p>
                <p>Inefficient logistics and routing increase transportation costs.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <div className="industry-box-content">
                <h3>Manual Documentation and Billing</h3>
                <p>Paper-based ticketing and invoicing processes are slow, error-prone, and delay cash flow.</p>
                <p>Lost or illegible tickets lead to billing disputes and revenue leakage.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-boxes"></i>
              </div>
              <div className="industry-box-content">
                <h3>Inventory Management Bottlenecks</h3>
                <p>Lack of real-time visibility into inventory levels results in stockouts or overstocking.</p>
                <p>Difficulty in tracking asset condition and history complicates maintenance planning.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="industry-box-content">
                <h3>Maintenance and Downtime</h3>
                <p>Reactive maintenance approaches lead to unexpected equipment failure and costly downtime.</p>
                <p>Poor tracking of maintenance history reduces equipment resale value.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Compliance and Safety Risks</h3>
                <p>Managing safety certifications and compliance documentation manually increases liability.</p>
                <p>Risk of penalties due to non-compliance with industry regulations.</p>
              </div>
            </div>
            {/* Filler box to maintain grid structure if needed, or left empty/balanced */}
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>How Orriun Atlas Transforms Equipment Rental Operations</h3>
          <p className="section-description">Orriun Atlas integrates all aspects of your rental operations into a single, easy-to-use platform, giving you control and confidence.</p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Real-Time Asset Tracking</h3>
                <p>Utilize GPS and IoT to track asset location and usage in real-time.</p>
                <p>Optimize logistics and ensure assets are where they need to be, when they are needed.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div className="industry-box-content">
                <h3>Streamlined Field Ticketing and Invoicing</h3>
                <p>Digitize field tickets for instant approval and faster invoicing cycles.</p>
                <p>Reduce billing errors and disputes with accurate, digital records.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="industry-box-content">
                <h3>Centralized Inventory Management</h3>
                <p>Gain total visibility into inventory levels across all locations.</p>
                <p>Make data-driven purchasing decisions and optimize stock levels.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-tools"></i>
              </div>
              <div className="industry-box-content">
                <h3>Predictive Maintenance for Reliability</h3>
                <p>Shift to predictive maintenance based on actual usage and condition monitoring.</p>
                <p>Schedule service proactively to minimize downtime and extend asset life.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <div className="industry-box-content">
                <h3>Integrated Compliance and Safety Tools</h3>
                <p>Automate compliance checks and safety documentation.</p>
                <p>Ensure all equipment meets regulatory standards before it leaves the yard.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Mobile App Connectivity</h3>
                <p>Empower field technicians with a mobile app for managing work orders and inventory on the go.</p>
                <p>Enable offline access for remote operations, syncing data when connectivity is restored.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>Why Choose Orriun Atlas for Equipment Rentals?</h3>
          <div className="metary-text-content scroll-animate" data-animate="fade-up">
            <p>
              Orriun Atlas is designed to handle the dynamic nature of the equipment rental business. Our platform scales with your growth, ensuring you have the tools to manage increasing inventory and operational complexity.
            </p>
            <p>
              With Orriun Atlas, you gain a partner dedicated to your success. Experience improved utilization, reduced costs, and enhanced customer satisfaction through our state-of-the-art solution.
            </p>
          </div>
        </main>
      </div >
    </div >
  );
};

export default EquipmentRentals;
