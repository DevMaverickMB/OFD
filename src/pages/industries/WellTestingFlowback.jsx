import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import heroImg from '../../assets/industries/well-testing.png';

const WellTestingFlowback = () => {
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
      <PageBanner
        title="Well Testing and Flowback"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: 'Well Testing and Flowback' }
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
                className={industry.name === 'Well Testing and Flowback' ? 'sidebar-link active' : 'sidebar-link'}
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
        </aside>

        <main className="industry-content">
          <div className="industry-hero-image">
            <img src={heroImg} alt="Well Testing and Flowback" />
          </div>

          <section className="industry-intro">
            <h1>Well Testing and Flowback</h1>
            <p className="subtitle">Unlocking Reservoir Potential with Orriun Atlas</p>
            <p className="description">
              Well testing and flowback are critical processes in oil and gas production, designed to assess reservoir potential and ensure optimal well performance. These operations require precision, real-time monitoring, and compliance with strict safety standards.
            </p>
            <p className="description" style={{ marginTop: '20px' }}>
              However, the complexity of managing multi-stage operations, collecting reliable data, and interpreting fluid behavior alongside well pressures increases operational volatility. Orriun Atlas is a state-of-the-art digital solution that addresses these unique challenges, ensuring efficiency, safety, and actionable insights for well testing and flowback operations.
            </p>
          </section>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px' }}>Challenges Faced by the Industry without Orriun Atlas</h3>
          <p className="section-description">
            The absence of modern digital tools introduces numerous challenges that hinder operational efficiency and accuracy in well testing and flowback operations.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="industry-box-content">
                <h3>Inaccurate Data Collection & Reporting</h3>
                <p>Manual data collection processes are time-consuming and error-prone, compromising reliability.</p>
                <p>Lack of real-time reporting hampers the ability to make timely, informed decisions.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-users-cog"></i>
              </div>
              <div className="industry-box-content">
                <h3>Operational Inefficiencies</h3>
                <p>Coordinating between flowback personnel and management is difficult without real-time tools.</p>
                <p>Disjointed data flows introduce delays, inconsistent decisions, and operational disruptions.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Safety and Environmental Risks</h3>
                <p>Insufficient compliance tracking increases the risk of accidents and environmental incidents.</p>
                <p>Ineffective management of flowback fluids could result in environmental contamination.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-eye-slash"></i>
              </div>
              <div className="industry-box-content">
                <h3>Limited Visibility and Integration</h3>
                <p>Fragmented systems make it difficult to gain a comprehensive operational view across wells.</p>
                <p>Lack of integration with other tools impairs collaboration and creates communication gaps.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>How Orriun Atlas Transforms Well Testing and Flowback Operations</h3>
          <p className="section-description">
            Orriun Atlas provides a robust platform built with cutting-edge technology to enhance efficiency, ensure safety, and provide actionable insights for your operations.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-chart-pie"></i>
              </div>
              <div className="industry-box-content">
                <h3>Real-Time Data Reporting & Analytics</h3>
                <p>Collect and analyze well performance data in real-time through user-friendly dashboards.</p>
                <p>Provide stakeholders with up-to-the-minute information crucial for budget and resource optimization.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="industry-box-content">
                <h3>Integrated Compliance & Safety Management</h3>
                <p>Ensure adherence to safety protocols with digitized safety audits and inspection logs.</p>
                <p>Conduct inspections easily with pre-built templates and robust audit trails.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-sync-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Seamless Integration with Existing Systems</h3>
                <p>Integrate Orriun Atlas effortlessly with existing business tools to avoid workflow disruption.</p>
                <p>Prevent data silos and ensure seamless collaboration across field business operations.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Efficient Resource Scheduling</h3>
                <p>Optimize the allocation of personnel and equipment with intelligent scheduling tools.</p>
                <p>Minimize downtime and ensure timely execution of operations.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Mobile Connectivity for Field Teams</h3>
                <p>Equip field personnel with a user-friendly mobile app for real-time well data access.</p>
                <p>Enable teams to capture data and update statuses, even from remote offline locations.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="industry-box-content">
                <h3>Enhanced Operational Visibility</h3>
                <p>Access customizable dashboards that provide visibility into performance and inefficiencies.</p>
                <p>Monitor well performance metrics and financials in real-time with predictive accuracy.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>Why Choose Orriun Atlas for Well Testing and Flowback?</h3>
          <div className="metary-text-content scroll-animate" data-animate="fade-up">
            <p>
              Orriun Atlas stands as a game-changing tool for the well testing and flowback operations industry. Designed by domain experts and engineers with deep oilfield expertise, it is data-driven to address the specific challenges and intricacies of the industry.
            </p>
            <p>
              By choosing Orriun Atlas, companies can future-proof their practices, ensuring safety, profitability, and environmental compliance. Our platform acts as a transformative partner, helping you optimize safety standards, enhance efficiency, and safeguard operations for the years ahead.
            </p>
          </div>
        </main>
      </div>

    </div>
  );
};

export default WellTestingFlowback;

