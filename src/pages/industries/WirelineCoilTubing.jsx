import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import heroImg from '../../assets/industries/wireline-coiltubing.png';

const WirelineCoilTubing = () => {
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
        title="Wireline and Coil Tubing"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: 'Wireline and Coil Tubing' }
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
                className={industry.name === 'Wireline and Coil Tubing' ? 'sidebar-link active' : 'sidebar-link'}
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
            <img src={heroImg} alt="Wireline and Coil Tubing" />
          </div>

          <section className="industry-intro">
            <h1>Wireline and Coil Tubing</h1>
            <p className="subtitle">Revolutionizing Well Intervention with Orriun Atlas</p>
            <p className="description">
              Wireline and coil tubing services are critical to oilfield well interventions, offering precise solutions for well diagnostics, perforation, and maintenance activities. Wireline operations involve lowering various tools into the wellbore to collect critical data, intervene at specific depths, and maintain well performance.
            </p>
            <p className="description" style={{ marginTop: '20px' }}>
              Coil tubing services use continuous, flexible pipe for procedures such as well cleaning, fracturing, cementing, and fluid circulation. However, coordinating these complex operations, tracking maintenance, and meeting safety standards demand advanced digital solutions. Orriun Atlas emerges as a comprehensive solution designed to transform operations for the wireline and coil tubing industries.
            </p>
          </section>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px' }}>Challenges Faced by Wireline and Coil Tubing Industry without Orriun Atlas</h3>
          <p className="section-description">
            Beyond their significance, the wireline and coil tubing industries often face operational hurdles due to the absence of comprehensive digital tools.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="industry-box-content">
                <h3>Operational Inefficiencies</h3>
                <p>Manual-based management leads to miscommunication and field coordination challenges.</p>
                <p>Ineffective scheduling and dispatching disrupt operations and delay project timelines.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-search-location"></i>
              </div>
              <div className="industry-box-content">
                <h3>Equipment & Asset Tracking</h3>
                <p>Inability to track assets in real-time results in inadequate equipment deployment and utilization.</p>
                <p>Difficulties in maintaining asset records leads to loss of equipment and improper allocation.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Safety & Environmental Risks</h3>
                <p>Non-compliant operations and untracked risks lead to higher incident rates and safety hazards.</p>
                <p>Lack of digital safety checklists increases the risk of incidents during well intervention procedures.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-excel"></i>
              </div>
              <div className="industry-box-content">
                <h3>Manual Documentation</h3>
                <p>Paper-based workflows for ticketing and invoicing delay revenue collection and are error-prone.</p>
                <p>Inefficient record-keeping makes data retrieval difficult and hampers operational audits.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-wrench"></i>
              </div>
              <div className="industry-box-content">
                <h3>Equipment Maintenance</h3>
                <p>Reactive maintenance monitoring results in equipment downtime and increased operational costs.</p>
                <p>Lack of predictive monitoring shortens asset lifecycles and leads to expensive replacements.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>How Orriun Atlas Transforms Operations</h3>
          <p className="section-description">
            Orriun Atlas is a robust operational platform tailored to address the challenges of wireline and coil tubing operations. Built to optimize operations, reduce risk, and ensure profitability.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="industry-box-content">
                <h3>Smart Scheduling & Dispatching</h3>
                <p>Optimize crew allocation and use intelligent scheduling tools to ensure timely job execution.</p>
                <p>Real-time updates keep operations synchronized and responsive, minimizing non-productive time.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-truck-moving"></i>
              </div>
              <div className="industry-box-content">
                <h3>Real-Time Equipment Tracking</h3>
                <p>Leverage geo-tracking to effectively monitor assets, reducing underutilization and loss.</p>
                <p>Maintain visibility over logistics and ensure proper asset allocation across job sites.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="industry-box-content">
                <h3>Integrated Compliance & Safety</h3>
                <p>Digitize safety audits and inspection logs to ensure compliance with regulatory standards.</p>
                <p>Automate hazard identification and simplify reporting, reducing regulatory risks and penalties.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Mobile Connectivity for Field Teams</h3>
                <p>Equip field teams with a user-friendly mobile app for offline data capture and task management.</p>
                <p>Ensure remote teams stay connected and informed, enabling seamless transparency and collaboration.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="industry-box-content">
                <h3>Actionable Insights</h3>
                <p>Use real-time analytics to predict maintenance needs and prevent equipment breakdowns.</p>
                <p>Enhance equipment lifecycle management and service timeliness, prioritization based on data-driven forecasts.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div className="industry-box-content">
                <h3>Digitized Documentation & Invoicing</h3>
                <p>Automate field ticketing and invoicing to ensure accurate, timely revenue recognition.</p>
                <p>Eliminate errors caused by manual paperwork and accelerate the billing cycle with digital workflows.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>Why Choose Orriun Atlas?</h3>
          <div className="metary-text-content scroll-animate" data-animate="fade-up">
            <p>
              Orriun Atlas is an innovative platform designed to simplify complex operations, reduce risks, and enhance safety, profitability, and scalability while leveraging cutting-edge technology to address industry inefficiencies.
            </p>
            <p>
              By adopting Orriun Atlas, companies can eliminate inefficiencies, improve safety, and achieve operational excellence. Orriun Atlas serves as an innovative partner, streamlining standards and safeguarding operations for the future.
            </p>
          </div>
        </main>
      </div>

    </div>
  );
};

export default WirelineCoilTubing;

