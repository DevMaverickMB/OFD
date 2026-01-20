import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';

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
      <PageBanner
        title="Drilling Contractors"
        breadcrumbs={[
          { label: 'Industries', path: '/industries' },
          { label: 'Drilling Contractors' }
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
          <div className="industry-hero-image scroll-animate" data-animate="fade-up">
            <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=400&fit=crop" alt="Drilling Contractors" />
          </div>

          <section className="industry-intro scroll-animate" data-animate="fade-up" data-delay="100">
            <h1>Drilling Contractors</h1>
            <p className="subtitle">Empowering Precision and Efficiency with Orriun Atlas</p>
            <p className="description">
              Drilling contractors are pivotal to the oil and gas industry, responsible for providing the equipment,
              personnel, and expertise needed for oil and gas wells drilling. However, the complexities of drilling
              operations— from managing rig schedules and crew assignments to ensuring safety compliance and optimizing
              costs—can be overwhelming. Orriun Atlas, a comprehensive field management solution, addresses these challenges
              by providing the tools to streamline operations, enhance safety, and drive project success effectively.
            </p>
          </section>

          <section className="challenges-section scroll-animate" data-animate="fade-up">
            <h2>Challenges faced by Drilling Contractors without Orriun Atlas</h2>
            <p className="section-description">
              Despite their critical role, drilling contractors encounter significant challenges often stem without
              adequate digital solutions:
            </p>

            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="challenge-content">
                  <h3>Unplanned Equipment Downtime</h3>
                  <ul>
                    <li>Equipment breakdowns can grind operations to a halt, causing costly delays and missed deadlines.</li>
                    <li>Without real-time equipment monitoring and predictive maintenance, expensive repairs catch
                      drilling teams off guard.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="challenge-content">
                  <h3>Inefficient Resource Allocation</h3>
                  <ul>
                    <li>Managing crew, rig, and material manually reduces responsiveness and operational effectiveness.</li>
                    <li>Poor coordination often leads to underutilization of assets or resource shortages.</li>
                    <li>Drilling rigs are resource-deployment-load-intensive and real-time adjustments.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Manual Documentation and Reporting</h3>
                  <ul>
                    <li>Paper-based workflows for daily logs, safety inspections, and compliance reports create delays
                      and inaccuracies.</li>
                    <li>Siloed record-keeping makes data retrieval time-consuming and error-prone.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-eye-slash"></i>
                </div>
                <div className="challenge-content">
                  <h3>Limited Visibility and Data Insights</h3>
                  <ul>
                    <li>Absence of centralized analytics hinders decision-making at both site levels and executives.</li>
                    <li>Real-time KPI tracking is not available, resulting in reactive (not proactive) decisions-making.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Safety and Compliance Challenges</h3>
                  <ul>
                    <li>Ensuring worker safety amid drilling activities and regulatory compliance is challenging
                      without integrated tools.</li>
                    <li>Inconsistent safety protocols and lack of training documentation can lead to accidents
                      and regulatory fines.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="how-platform-section scroll-animate" data-animate="fade-up">
            <h2>How Orriun Atlas transforms operations for Drilling Contractors?</h2>
            <p className="section-description">
              Orriun Atlas is a suite of end-to-end digital transformation platform specifically designed to address the unique
              challenges faced by drilling contractors. Built to simplify operations, increase efficiency, and ensure compliance:
            </p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="benefit-content">
                  <h3>Predictive Maintenance for Equipment</h3>
                  <ul>
                    <li>Leverages IoT sensors and real-time data to predict equipment failures and optimize maintenance
                      schedules.</li>
                    <li>Minimize unexpected downtime and extend asset lifecycles significantly.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="benefit-content">
                  <h3>Optimized Project and Resource Management</h3>
                  <ul>
                    <li>Centralizes crew assignments, rig utilization, and material distribution data in real-time.</li>
                    <li>Intelligently allocates resources across operations, reducing waste and boosting productivity.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <div className="benefit-content">
                  <h3>Automated Field Ticketing and Invoicing</h3>
                  <ul>
                    <li>Digitize field tickets for accurate and real-time billing.</li>
                    <li>Eliminate the risk of misplacement and reduce administrative paperwork.</li>
                    <li>Generate real-time invoices powered by precision on-site data and improve financial accuracy.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Real-Time Operational Visibility</h3>
                  <ul>
                    <li>Access customizable dashboards that provide insights to enable real-time progress monitoring.</li>
                    <li>Track key performance indicators, such as rig utilization and cost per operation.</li>
                    <li>Monitor project progress, equipment status, and workforce allocation in real-time.</li>
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
                    <li>Ensure adherence to safety standards and industry guidelines by digitalizing safety audits and
                      inspection logs.</li>
                    <li>Automated checklists and audit trails simplify regulatory compliance, reducing risks of
                      penalties and accidents.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Mobile Connectivity for Field Teams</h3>
                  <ul>
                    <li>Enable field teams with a user-friendly mobile app for real-time data capture and task management.</li>
                    <li>Offline capability ensures uninterrupted operations, even in remote locations, while
                      data synchronizes automatically when connectivity resumes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-section scroll-animate" data-animate="fade-up">
            <h2>Why Choose Orriun Atlas for Drilling Contractors?</h2>
            <p className="section-description">
              Orriun Atlas is innovative platform is tailored to the specific needs of drilling contractors, offering a value-add
              integrated solution that simplifies workflows, empowers data-driven decisions, and drives operational excellence.
              By adoption Orriun Atlas, drilling contractors can standout from their competition by providing:
            </p>
            <ul className="why-choose-list">
              <li>Enhanced efficiency with intelligent automation and real-time insights.</li>
              <li>By choosing Orriun Atlas, drilling contractors can standout from their competition by providing their
                clients with superior operational efficiency, improved transparency, and better compliance management.
                Orriun Atlas's tools empower drilling contractors to:
                <ul>
                  <li>Boost operational uptime while reducing unforeseen downtime through predictive maintenance
                    and proactive management.</li>
                  <li>By addressing all aspects of field management—from predictive maintenance to crew
                    scheduling—Orriun Atlas creates a more competitive, efficient, and compliant operation.</li>
                </ul>
              </li>
            </ul>
          </section>
        </main>
      </div>

    </div>
  );
};

export default DrillingContractors;

