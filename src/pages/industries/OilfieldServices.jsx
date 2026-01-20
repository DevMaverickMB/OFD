import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';

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

          <div className="sidebar-cta">
            <div className="cta-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Got any Questions? Call us Today!</h3>
            <a href="tel:+18133986692" className="cta-phone">+1 (813) 398-6692</a>
            <p className="cta-subtitle">Schedule Anytime</p>
          </div>
        </aside>

        <main className="industry-content">
          <div className="industry-hero-image">
            <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=400&fit=crop" alt="Oilfield Services" />
          </div>

          <section className="industry-intro">
            <h1>Oilfield Services</h1>
            <p className="subtitle">Driving Efficiency and Growth with Orriun Atlas</p>
            <p className="description">
              Oilfield services encompass a wide range of critical operations that support the exploration, extraction,
              and production of oil and gas. From cementing and well testing to logistics and asset management, oilfield
              services companies must manage high-stakes operations, stringent safety requirements, and tight deadlines.
              However, the complexities of managing varied services across geographically dispersed assets and ensuring
              operational efficiency, safety, compliance, and profitability can be daunting. However, the complexities
              of managing varied service operations across various sites and ensuring operational efficiency, safety,
              compliance, and strong profit ends with the introduction of Orriun Atlas. Orriun Atlas is a unified digital solution that
              streamlines operations and empowers oilfield services companies to seamlessly operations from offshore and
              onshore operations tackle market challenges and thrive going-forward.
            </p>
          </section>

          <section className="challenges-section">
            <h2>Challenges in Oilfield Services without Orriun Atlas</h2>
            <p className="section-description">
              Despite its significance, the oilfield services industry often faces severe operational challenges due to
              the absence of cohesive digital solutions:
            </p>

            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <div className="challenge-content">
                  <h3>Fragmented Operations</h3>
                  <ul>
                    <li>Operating across varied platforms, oil services companies need to leverage various platforms,
                      increasing risk of lost data, and inbound interop errors.</li>
                    <li>Lack of a centralized command leads to missed opportunities for streamlined cross-deployments.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Manual Processes</h3>
                  <ul>
                    <li>Heavy reliance on paper-based workflows for scheduling, field ticketing, and invoicing
                      increases the likelihood of errors and delays.</li>
                    <li>Manual data entry is time-consuming and hinders accurate-revenue reporting.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div className="challenge-content">
                  <h3>Equipment Downtime</h3>
                  <ul>
                    <li>Poor maintenance tracking and resource allocation leads to equipment down and missed downtime
                      for expensive client commitments.</li>
                    <li>Unanticipated breakdowns disrupt operations, hurting productivity and stalk relationships.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Compliance Risks</h3>
                  <ul>
                    <li>Ensuring regulatory and safety standards becomes a daunting task without integrated
                      regulatory compliance and real-time track.</li>
                    <li>Lack of precise documentation increased audit responsibilities; this increases liability and
                      potential regulatory fines and penalties.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <div className="challenge-content">
                  <h3>Inefficient Resource Utilization</h3>
                  <ul>
                    <li>Misallocation of teams, tools, or equipment across projects leads to wasted time, labor,
                      and equipment resources.</li>
                    <li>Lack of real-time allocation visibility results in assets that sit idle or respond to meet labor,
                      and equipment resources.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="how-platform-section">
            <h2>How Orriun Atlas Transforms Oilfield Services?</h2>
            <p className="section-description">
              Orriun Atlas is a cutting-edge digital transformation platform designed to address the unique challenges of the
              oilfield services industry. Built to simplify operations, enhance safety, streamline compliance, and drive growth:
            </p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Mobile App for Field Technicians</h3>
                  <ul>
                    <li>Enable field techs with a user-friendly mobile app for real-time data capture and task management.</li>
                    <li>Allow real-time updates and task assignments and access to digital field tickets.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>GPS Asset Location and Tracking</h3>
                  <ul>
                    <li>Track real-time location via GPS mapping to optimize routes and equipment management,
                      deployment for trucks.</li>
                    <li>Minimize downtime and improve timely response delivery to clients.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <div className="benefit-content">
                  <h3>Automated Invoicing and Reporting</h3>
                  <ul>
                    <li>Eliminate errors and delays with fully automated invoicing systems tied to real-time data capture.</li>
                    <li>Spend less time on financial reconciliation to improve resource allocation faster invoicing and
                      client satisfaction delivery.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <div className="benefit-content">
                  <h3>Integrated Compliance and Safety Management</h3>
                  <ul>
                    <li>Ensure adherence to safety audits standards and regulations by digitizing safety audits and
                      inspection data logs.</li>
                    <li>Conduct inspections easily with checklists and pre-audit trail in ensuring regulatory
                      compliance reducing regulatory fines.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="benefit-content">
                  <h3>End-to-End Operational Visibility</h3>
                  <ul>
                    <li>Orriun Atlas provides real-time dashboards and advance KPIs that provide insights crucial enabling
                      rapid decision-making decisions.</li>
                    <li>Monitor and analyze performance, track revenue, and identify operational insights from data
                      analytics all-from center at any time.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-wrench"></i>
                </div>
                <div className="benefit-content">
                  <h3>Predictive Maintenance and Uptime</h3>
                  <ul>
                    <li>Leverage IoT insights and real-time predictions equipment monitoring to predict equipment
                      failure predict and automate preventive alert timely maintenance maintenance.</li>
                    <li>Extend operational uptime and reliability by planning maintenance proactively, reducing
                      service disruptions, and reducing costs maintenance downtime.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-section">
            <h2>Why Choose Orriun Atlas for Oilfield Services?</h2>
            <p className="section-description">
              Orriun Atlas is designed specifically for the nuanced demands and operational complexity of oilfield services.
              Whether you operate offshore or you manage land-based assets, Orriun Atlas provides the tools you need to ensure
              seamless operation, better profitability, and sustained growth.
            </p>
            <ul className="why-choose-list">
              <li>By choosing Orriun Atlas, oilfield service companies can standout from their competition by providing
                superior efficiency, safety, transparency, and operational responsiveness to their clients. With Orriun Atlas's
                powerful digital solutions, oilfield services companies can:</li>
              <li>Streamline operations integrating data, workflows, and communication across offline and on-site teams.</li>
              <li>Enhance profitability through automation of field tickets, billing, timesheets, and invoicing,
                which improve client relationships and operational responsiveness.</li>
              <li>Maximize asset value with predictive maintenance and intelligent resource allocation, ensuring
                resource resources are deployed effectively efficiently.</li>
              <li>Reduce compliance risk by digitizing safety audits, regulations compliance, inspection checklists
                reducing penalty risk regulatory exposures.</li>
            </ul>
          </section>
        </main>
      </div>

    </div>
  );
};

export default OilfieldServices;

