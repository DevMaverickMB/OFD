import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import heroImg from '../../assets/industries/oilfield-services.png';

const OilfieldServices = () => {
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
        title="Oilfield Services"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: 'Oilfield Services' }
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
                className={industry.name === 'Oilfield Services' ? 'sidebar-link active' : 'sidebar-link'}
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
            <img src={heroImg} alt="Oilfield Services" />
          </div>

          <section className="industry-intro">
            <h1>Oilfield Services</h1>
            <p className="subtitle">Driving Efficiency and Growth with Orriun Atlas</p>
            <p className="description">
              Oilfield services encompass a wide range of critical operations that support the exploration, extraction, and production of oil and gas. From cementing and well testing to logistics and asset management, oilfield services companies must manage high-stakes operations, stringent safety requirements, and tight deadlines.
            </p>
            <p className="description" style={{ marginTop: '20px' }}>
              However, the complexities of managing varied service operations across geographically dispersed assets and ensuring operational efficiency, safety, and compliance can be daunting. Orriun Atlas is a unified digital solution that streamlines these operations, empowering oilfield services companies to seamless operations from offshore to onshore.
            </p>
          </section>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px' }}>Challenges in Oilfield Services without Orriun Atlas</h3>
          <p className="section-description">
            Despite its significance, the oilfield services industry often faces severe operational challenges due to the absence of cohesive digital solutions.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <div className="industry-box-content">
                <h3>Fragmented Operations</h3>
                <p>Operating across varied platforms increases the risk of lost data and integration errors.</p>
                <p>Lack of a centralized command leads to missed opportunities for streamlined cross-deployments.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-eye-slash"></i>
              </div>
              <div className="industry-box-content">
                <h3>Limited Visibility</h3>
                <p>A lack of real-time visibility hampers the ability to make timely, informed decisions.</p>
                <p>Poor tracking of assets and personnel leads to usage disputes and operational inefficiencies.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Manual Processes</h3>
                <p>Reliance on manual, paper-based workflows for field ticketing and invoicing causes errors.</p>
                <p>Manual data entry is time-consuming and hinders accurate revenue reporting and billing.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Compliance Risks</h3>
                <p>Ensuring adherence to regulatory and safety standards is difficult without integrated tracking.</p>
                <p>Lack of precise compliance documentation increases liability and potential regulatory fines.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-clock"></i>
              </div>
              <div className="industry-box-content">
                <h3>Equipment Downtime</h3>
                <p>Poor maintenance tracking and resource allocation lead to equipment breakdowns.</p>
                <p>Unanticipated downtime disrupts operations, hurting productivity and client relationships.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-user-clock"></i>
              </div>
              <div className="industry-box-content">
                <h3>Inefficient Field Coordination</h3>
                <p>Misallocation of teams and tools across projects leads to wasted time and resources.</p>
                <p>Lack of real-time visibility results in idle assets or delayed responses to client needs.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>How Orriun Atlas Transforms Oilfield Services</h3>
          <p className="section-description">
            Orriun Atlas is a cutting-edge digital transformation platform designed to address the unique challenges of the oilfield services industry. Built to simplify operations, enhance safety, streamline compliance, and drive growth.
          </p>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up">
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Mobile App for Field Technicians</h3>
                <p>Empower field techs with a user-friendly mobile app for real-time data capture and task management.</p>
                <p>Enable offline updates and digital field tickets to keep operations running smoothly anywhere.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="industry-box-content">
                <h3>Smart Scheduling & Dispatching</h3>
                <p>Efficiently schedule personnel and assets with tools that ensure the right resources are available.</p>
                <p>Minimize downtime and improve service delivery with real-time operational synchronization.</p>
              </div>
            </div>
          </div>

          <div className="industry-feature-boxes scroll-animate" data-animate="fade-up" style={{ marginTop: '-20px' }}>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <div className="industry-box-content">
                <h3>Automated Field Ticketing & Invoicing</h3>
                <p>Eliminate errors and delays with fully automated invoicing systems tied to real-time field data.</p>
                <p>Speed up financial reconciliation and improve cash flow with instant digital ticket processing.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="industry-box-content">
                <h3>Advanced Fleet Management</h3>
                <p>Track real-time location via GPS mapping to optimize routes and equipment deployment.</p>
                <p>Ensure timely response to client requests and minimize non-productive travel time.</p>
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
                <p>Ensure adherence to safety standards by digitizing audits, checklists, and inspection logs.</p>
                <p>Reduce regulatory fines and risks with comprehensive, easily accessible compliance trails.</p>
              </div>
            </div>
            <div className="industry-box">
              <div className="industry-box-icon-wrapper">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="industry-box-content">
                <h3>End-to-End Operational Visibility</h3>
                <p>Orriun Atlas provides real-time dashboards that offer insights enabling rapid decision-making.</p>
                <p>Monitor performance, track revenue, and identify operational improvements from a central hub.</p>
              </div>
            </div>
          </div>

          <h3 className="section-heading-dash" style={{ fontSize: '24px', fontWeight: '900', color: 'var(--secondary-color)', marginBottom: '20px', marginTop: '40px' }}>Why Choose Orriun Atlas for Oilfield Services?</h3>
          <div className="metary-text-content scroll-animate" data-animate="fade-up">
            <p>
              Orriun Atlas is designed specifically for the nuanced demands and operational complexity of oilfield services. Whether you operate offshore or manage land-based assets, Orriun Atlas provides the tools you need to ensure seamless operation, better profitability, and sustained growth.
            </p>
            <p>
              By choosing Orriun Atlas, oilfield service companies can stand out from their competition by providing superior efficiency, safety, transparency, and operational responsiveness. Maximize asset value, reduce compliance risk, and enhance profitability with our powerful digital solutions.
            </p>
          </div>
        </main>
      </div>

    </div>
  );
};

export default OilfieldServices;

