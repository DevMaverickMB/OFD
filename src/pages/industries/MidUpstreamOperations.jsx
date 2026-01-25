import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import heroImg from '../../assets/industries/mid-upstream.png';

const MidUpstreamOperations = () => {
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
        title="Mid & Upstream Operations"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: 'Mid & Upstream Operations' }
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
                className={industry.name === 'Mid & Upstream Operations' ? 'sidebar-link active' : 'sidebar-link'}
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
            <img src={heroImg} alt="Midstream Operations" />
          </div>

          <section className="industry-intro">
            <h1>Midstream Operations</h1>
            <p className="subtitle">Optimizing Transportation, Storage, and Distribution with Orriun Atlas</p>
            <p className="description">
              Midstream operations are the logistical backbone of the oil and gas industry, focusing on the transportation, storage, and distribution of raw materials and refined products. From overseeing pipelines and tankers to managing storage facilities and monitoring regulatory compliance, midstream operators face numerous challenges that can impact efficiency and profitability.
            </p>
            <p className="description" style={{ marginTop: '20px' }}>
              Orriun Atlas is a cutting-edge digital platform designed to tackle these complex challenges. By consolidating data, enhancing efficiency, and ensuring compliance, we empower operators to maximize asset utilization and maintain a competitive edge.
            </p>
          </section>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px' }}>Challenges Faced by Midstream Operations without Orriun Atlas</h3>
          <p className="section-description">
            Without modern integrated digital solutions, midstream operators often face inefficiencies that result in significant challenges.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="industry-box-content">
                <h3>Inefficient Inventory Management</h3>
                <p>Lack of real-time visibility into tank capacity and operations results in inefficient management of storage assets.</p>
                <p>Manual tracking creates redundancy and missed opportunities during peak-demand periods.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Complex Regulatory Compliance</h3>
                <p>Ensuring adherence to environmental regulations and safety standards is both time-consuming and error-prone.</p>
                <p>Manual record-keeping leads to audit difficulties, penalties, and potential reputational damage.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <div className="industry-box-content">
                <h3>Fragmented Data Systems</h3>
                <p>Siloed data across multiple platforms hampers analytics, reducing the ability to gain complete transparency.</p>
                <p>Delays in analyzing critical information lead to passive operational bottlenecks and disrupted workflows.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-clock"></i>
              </div>
              <div className="industry-box-content">
                <h3>Operational Delays and Downtime</h3>
                <p>Reactive maintenance approaches result in unexpected pipeline or equipment failures, causing downtime.</p>
                <p>Disruptions to the logistics supply chain compromise contracts and negatively impact customer relationships.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>How Orriun Atlas Transforms Midstream Operations</h3>
          <p className="section-description">
            Orriun Atlas provides a unified platform to streamline your midstream value chain, from field to market, ensuring seamless operations.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="industry-box-content">
                <h3>Enhanced Inventory Management</h3>
                <p>Real-time tracking provides up-to-date, scalable insights into storage capacities and asset utilization.</p>
                <p>Automated alerts notify operators of low capacity, pipeline bottlenecks, or operational disruptions.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="industry-box-content">
                <h3>Streamlined Regulatory Compliance</h3>
                <p>Integrated digital records comply with the newest safety standards, meeting legal requirements effortlessly.</p>
                <p>Automated processes reduce human error, ensuring accurate and auditable environmental and safety reporting.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-database"></i>
              </div>
              <div className="industry-box-content">
                <h3>Unified Data Platform</h3>
                <p>Consolidate disparate data sources into a single platform for a unified view of pipeline and transportation networks.</p>
                <p>Enhance communication and operational efficiency, from planning to real-time decision-making.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-tools"></i>
              </div>
              <div className="industry-box-content">
                <h3>Predictive Maintenance & Reduced Downtime</h3>
                <p>IoT-enabled real-time data enables predictive maintenance to identify issues before they become critical.</p>
                <p>Proactive scheduling improves asset reliability and minimizes outages from pipeline or equipment failures.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="industry-box-content">
                <h3>Real-Time Reporting and Analytics</h3>
                <p>Access actionable insights through pre-formed dashboards, reducing decision-making timeframes.</p>
                <p>Use real-time analytics to forecast demands, optimize scheduling, and reduce operational bottlenecks.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Mobile Connectivity and Field Operations</h3>
                <p>Empower field teams with a user-friendly mobile app for real-time access to operational data.</p>
                <p>Ensure synchronized data updates even in remote regions to boost responsive decision-making.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>Why Choose Orriun Atlas for Midstream Operations?</h3>
          <div className="metary-text-content scroll-animate" data-animate="fade-up">
            <p>
              Orriun Atlas is a comprehensive digital solution designed to tackle the complexities of midstream operators. By consolidating data, automating workflows, and ensuring compliance, Orriun Atlas helps transform workflows and boost operations.
            </p>
            <p>
              By choosing Orriun Atlas, midstream operators can not only reduce operational inefficiencies but also better position themselves to scale, improve responsiveness, and drive superior operational productivity that differentiates them competitively.
            </p>
          </div>
        </main>
      </div>

    </div>
  );
};

export default MidUpstreamOperations;

