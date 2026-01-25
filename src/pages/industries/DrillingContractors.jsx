import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import AnimationObserver from '../../components/AnimationObserver';
import './IndustryDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import heroImg from '../../assets/industries/drilling-contractors.png';

const DrillingContractors = () => {
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
        title="Drilling Contractors"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: 'Optimizing Drilling Operations' }
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
                className={industry.name === 'Drilling Contractors' ? 'sidebar-link active' : 'sidebar-link'}
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
          <div className="industry-hero-image scroll-animate" data-animate="fade-up">
            <img src={heroImg} alt="Drilling Contractors" />
          </div>

          <section className="industry-intro scroll-animate" data-animate="fade-up" data-delay="100">
            <h1>Drilling Contractors</h1>
            <p className="subtitle">Empowering Precision and Efficiency with Orriun Atlas</p>
            <p className="description">
              Drilling contractors are under constant pressure to maximize uptime, ensure safety, and maintain profitability. From managing complex rigs and equipment to coordinating field crews and ensuring compliance, the challenges are immense.
            </p>
            <p className="description">
              Orriun Atlas provides a comprehensive solution designed specifically for drilling contractors. Our platform streamlines operations, enhances equipment reliability, and provides real-time visibility into project performance, helping you drill smarter and more efficiently.
            </p>
          </section>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px' }}>Challenges Faced by Drilling Contractors without Orriun Atlas</h3>
          <p className="section-description">Without a unified system, drilling contractors often struggle with inefficiencies that eat into profit margins.</p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="industry-box-content">
                <h3>Unplanned Equipment Downtime</h3>
                <p>Equipment breakdowns cause massive delays and revenue loss. Reactive maintenance is costing you money.</p>
                <p>The cost of unexpected downtime can reach thousands of dollars per hour in lost productivity.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-user-clock"></i>
              </div>
              <div className="industry-box-content">
                <h3>Inefficient Resource Allocation</h3>
                <p>Mismanaging crews and equipment leads to wasted labor hours and project delays.</p>
                <p>Difficulty in matching the right crew and tools to the right job at the right time.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Manual Documentation & Reporting</h3>
                <p>Paper-based reports are slow, prone to errors, and delay invoicing and decision making.</p>
                <p>Lost or illegible tickets lead to billing disputes and delayed payments.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-eye-slash"></i>
              </div>
              <div className="industry-box-content">
                <h3>Limited Visibility into Operations</h3>
                <p>Fragmented data means you don't know the true status of your projects until it's too late.</p>
                <p>Lack of real-time insights prevents proactive decision making.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Safety and Compliance Risks</h3>
                <p>Meeting strict safety standards is hard when documentation is scattered and tracking is manual.</p>
                <p>Increased risk of accidents and regulatory fines due to poor record keeping.</p>
              </div>
            </div>
            {/* Empty filler if needed, or omit if grid handles it nicely. Flex will stretch, so let's add an empty invisible one or just leave it single if odd count. But here we have 5 items in image? One moment, let me re-check count.
                         Image showed:
                         1. Unplanned Downtime
                         2. Inefficient Resource
                         3. Manual Doc
                         4. Limited Visibility
                         5. Safety Check
                         The user said "only add the boxes for the cards present in the image". 
                         Count is 5.
                         Flex row handles odd numbers by leaving space or stretching. The CSS uses flex:1. 
                         Let's add a placeholder to keep size consistent if we want 2x2 grid look, or just let it expand.
                         Usually 2 per row. 5th will take full width or half. Let's let it be.
                         */}
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>How Orriun Atlas Transforms Operations for Drilling Contractors</h3>
          <p className="section-description">Orriun Atlas integrates all aspects of your drilling operations into a single, easy-to-use platform. We replace manual processes with automated workflows, giving you control and confidence.</p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="industry-box-content">
                <h3>Predictive Maintenance for Equipment Uptime</h3>
                <p>Shift from reactive to predictive maintenance. Track equipment hours and set automated service alerts.</p>
                <p>Prevent costly breakdowns and extend the lifespan of your critical assets.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-users-cog"></i>
              </div>
              <div className="industry-box-content">
                <h3>Smart Scheduling and Resource Management</h3>
                <p>Optimize crew and equipment utilization with drag-and-drop dispatching tools.</p>
                <p>Ensure the right resources are always available for the job, reducing idle time.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <div className="industry-box-content">
                <h3>Automated Field Ticketing and Invoicing</h3>
                <p>Digitize field tickets for fast approval and instant invoicing.</p>
                <p>Accelerate cash flow effectively allowing you to get paid faster and reduce admin work.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="industry-box-content">
                <h3>Real-Time Operational Visibility</h3>
                <p>Access centralized dashboards for real-time insights into project performance.</p>
                <p>Monitor progress, costs, and safety metrics from anywhere.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="industry-box-content">
                <h3>Improved Compliance and Safety Management</h3>
                <p>Digitize safety forms and audits to ensure compliance with industry standards.</p>
                <p>Keep your crews safe and your documentation audit-ready at all times.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Mobile Connectivity for Field Teams</h3>
                <p>Equip your field crews with a mobile app that works offline to capture data at the source.</p>
                <p>Eliminate double entry and ensure data accuracy from the field to the office.</p>
              </div>
            </div>
          </div>


          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>Why Choose Orriun Atlas for Drilling Contractors?</h3>
          <div className="metary-text-content scroll-animate" data-animate="fade-up">
            <p>
              Orriun Atlas is more than just software; it's a strategic partner in your success. We understand the unique demands of the drilling industry and have built a platform that scales with your growth. With Orriun Atlas, you can bid with confidence, knowing you have the operational backbone to deliver on time and on budget.
            </p>
            <p>
              Experience the digital revolution in drilling operations. Let us help you optimize your workflows, reduce costs, and improve safety outcomes across your entire fleet.
            </p>
          </div>

        </main>
      </div>

    </div>
  );
};

export default DrillingContractors;
