import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';

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
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=400&fit=crop" alt="Midstream Operations" />
          </div>

          <section className="industry-intro">
            <h1>Midstream Operations</h1>
            <p className="subtitle">Optimizing Transportation, Storage, and Distribution with Orriun Atlas</p>
            <p className="description">
              Midstream operations are the logistical backbone of the oil and gas industry, focusing on the
              transportation, storage, and distribution of raw materials and refined products. From overseeing pipelines
              and tankers to managing storage facilities and monitoring regulatory compliance, midstream operators face
              numerous challenges that can impact efficiency and profitability. Manual systems and fragmented processes
              can often hinder real-time decision-making and expose operators to errors and compliance risks. Orriun Atlas is a
              cutting-edge digital platform designed to tackle the complex challenges of midstream operators. By
              consolidating data, enhancing efficiency, automating asset utilization, and ensuring compliance with regulatory
              standards.
            </p>
          </section>

          <section className="challenges-section">
            <h2>Challenges faced by Midstream Operations without Orriun Atlas</h2>
            <p className="section-description">
              Without modern integrated digital solutions, midstream operators often face inefficiencies that result in
              significant challenges:
            </p>

            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-database"></i>
                </div>
                <div className="challenge-content">
                  <h3>Inefficient Inventory Management</h3>
                  <ul>
                    <li>Lack of real-time visibility into tank capacity and real-time operations may result in
                      inefficient management of storage assets.</li>
                    <li>Automation in pipeline scheduling can create redundancy to avoid delays or missed-out opportunities
                      to profit from peak-demand periods.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Complex Regulatory Compliance</h3>
                  <ul>
                    <li>Ensuring adherence to environmental regulations and safety standards is both time-consuming and
                      error-prone.</li>
                    <li>Manual record-keeping often leads to audit difficulties resulting in penalties and reputational
                      damage.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-database"></i>
                </div>
                <div className="challenge-content">
                  <h3>Fragmented Data Systems</h3>
                  <ul>
                    <li>Siloed data across multiple platforms hampers data analytics, reducing a team's ability to gain
                      complete transparency and troubleshoot.</li>
                    <li>Delays in analyzing critical information leads to passive operational bottlenecks, disrupting
                      workflow and increasing inefficiency.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="challenge-content">
                  <h3>Operational Delays and Downtime</h3>
                  <ul>
                    <li>Reactive maintenance approaches lead to result in unexpected pipeline or equipment failures,
                      causing downtime and delays.</li>
                    <li>Disruptive-to the time-critical logistics supply chain Negative impacts on resource fulfillment
                      compromise contracts and negatively impact customer relationships.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="challenge-content">
                  <h3>Inefficient Transportation & Related Downtime</h3>
                  <ul>
                    <li>A manual lack-of-tracking-or real-time route-by-route update increases transportation costs and
                      leads to inefficient asset management.</li>
                    <li>Discrepancies in documentation related to result inaccurate tracking routes can lead to
                      compliance non-fulfillment or asset overruns that cost money.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="how-platform-section">
            <h2>How Orriun Atlas Transforms Midstream Operations?</h2>
            <p className="section-description">
              Orriun Atlas is a cutting-edge digital platform that addresses the complex challenges of midstream operators. By
              consolidating data, automating workflows, and ensuring compliance, Orriun Atlas empowers midstream operators to
              optimize asset management, streamline operations, and ensure efficiency effectively, and ensure compliance
              with regulatory standards.
            </p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="benefit-content">
                  <h3>Enhanced Inventory Management</h3>
                  <ul>
                    <li>Real-time tracking provides up-to-date, scalable insights into storage capacities and asset
                      utilization.</li>
                    <li>Automated alerts notify operators of low capacity, pipeline bottlenecks, or operational disruptions.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Streamlined Regulatory Compliance</h3>
                  <ul>
                    <li>Integrated digital records track comply to the newest safety standards, helping midstream companies
                      meet legal requirements.</li>
                    <li>Automated processes reduce the risk of human error and ensure that all environmental and safety
                      reporting is accurate that and environmental and auditable.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Unified Pipeline Management & Related Downtime</h3>
                  <ul>
                    <li>Consolidate disparate data sources into a single, accessible platform for a unified view of
                      pipeline and transportation networks.</li>
                    <li>Enhanced communication platforms that benefit operational efficiency from accessible platform
                      planning to real-time operational decisions.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="benefit-content">
                  <h3>Proactive Maintenance & Reduced Downtime</h3>
                  <ul>
                    <li>IoT-enabled real-time data enables predictive maintenance to identify predictive maintenance
                      issues before they become critical.</li>
                    <li>Scheduling maintenance plans improve asset reliability and minimize asset outage by pipeline outage
                      and transportation delays.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Real-Time Reporting and Analytics</h3>
                  <ul>
                    <li>Access actionable insights through pre-formed dashboards, reducing decision-making timeframes
                      for operational planning.</li>
                    <li>Use real-time data analytics to forecast demands, optimize scheduling, and reduce operational
                      bottlenecks.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Mobile Connectivity for Field Operations</h3>
                  <ul>
                    <li>Enable field teams with a user-friendly mobile app for real-time operational access to
                      operational data and offline management.</li>
                    <li>Ensure synchronized data updates, even in remote regions, to boost responsive operational decisions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-section">
            <h2>Why Choose Orriun Atlas for Midstream Operations?</h2>
            <p className="section-description">
              Orriun Atlas is a comprehensive digital solution designed to tackle the complexities of midstream operators. By
              consolidating data, automating workflows, and ensuring compliance, Orriun Atlas helps transform workflows, boost
              operations.
            </p>
            <ul className="why-choose-list">
              <li>By choosing Orriun Atlas, midstream operators can not only reduce operational inefficiencies but also better
                position to scale digital operational efficiency, improve responsiveness, and drive superior operational
                productivity that will support their business in ways that differentiate them competitively.</li>
            </ul>
          </section>
        </main>
      </div>

    </div>
  );
};

export default MidUpstreamOperations;

