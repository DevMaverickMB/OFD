import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';

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
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop" alt="Wireline and Coil Tubing" />
          </div>

          <section className="industry-intro">
            <h1>Wireline and Coil Tubing</h1>
            <p className="subtitle">Revolutionizing Well Intervention with Orriun Atlas</p>
            <p className="description">
              Wireline and coil tubing services are critical to oilfield well interventions, offering precise solutions
              for well diagnostics, perforation, and maintenance activities. Wireline operations involve lowering various
              tools into the wellbore to collect critical data, intervene at specific depths, and maintain well performance.
              Coil tubing services use continuous, flexible pipe for procedures such as well cleaning, fracturing,
              cementing, and fluid circulation. Flexible applications are endless, but coordinating fluid-efficient
              operations, tracking maintenance, documentation, and meeting safe operational standards demand advanced
              coordination and advanced-level tracking and to ensure digital solutions optimal coordination and precision.
              Companies in both industries are significantly influenced through challenges complicated by a challenge like
              lack of real-time insights and seamless digital platforms. Orriun Atlas emerges as a robust comprehensive solution
              designed to transform operations for the advanced operational digitized and wireline and coil tubing
              industries.
            </p>
          </section>

          <section className="challenges-section">
            <h2>Challenges faced by Wireline and Coil Tubing Industry without Orriun Atlas</h2>
            <p className="section-description">
              Beyond their significance, the wireline and coil tubing industries offer greater common-various-industries due
              to their absence of comprehensive digital tools:
            </p>

            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="challenge-content">
                  <h3>Operational Inefficiencies</h3>
                  <ul>
                    <li>Manual-based management leads to miscommunication and coordination challenges.</li>
                    <li>Ineffective scheduling and dispatching disrupt brand operations.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Equipment and Asset Tracking</h3>
                  <ul>
                    <li>Inability-real-hard/time-time results in real-time tracking results in inadequate equipment
                      deployment or collaboration.</li>
                    <li>Difficulties in maintaining asset records for proper allocation maintenance proper all allocation.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Safety/Environmental Risks</h3>
                  <ul>
                    <li>Noncompliant Wireline/oil-operations protections and offers simple/untracked safe risk
                      higher higher incidents/accidents/risks.</li>
                    <li>Lack/checklists/safety log increases risk of incidents/during equipment intervention well
                      intervention procedures.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Manual Documentation</h3>
                  <ul>
                    <li>Paper-based workflows for ticketing and invoicing delay revenue collection and are
                      error-consuming.</li>
                    <li>Efficient record/keepability makes in retrieval and well-round operational/and inefficiency.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-wrench"></i>
                </div>
                <div className="challenge-content">
                  <h3>Equipment Maintenance</h3>
                  <ul>
                    <li>Reactionable-reuseactionable/maintenance preventively-Monitoring results/equipment downtime/
                      breakdown-revenue operational-costs revenue/delay.</li>
                    <li>Prediction/monitoring lifecycle-reduce extends costly asset extensions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="how-platform-section">
            <h2>How Orriun Atlas transforms operations for Wireline and Coil Tubing Operations?</h2>
            <p className="section-description">
              Orriun Atlas is a robust operational platform tailored to address the challenges of wireline and coil
              tubing operations. Built to optimize operations, reduce risk, and ensure profitability:
            </p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="benefit-content">
                  <h3>Smart Scheduling and Dispatching</h3>
                  <ul>
                    <li>Optimize crew allocation and manage intelligent scheduling tools to ensure timely job execution.</li>
                    <li>Real-time updates keep operations synchronized and responsive.</li>
                    <li>Reduce downtime and improve operational-responsive-and improve resource service efficiencies
                      downtime and boost/allocation efficiency.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Real-Time Equipment Tracking</h3>
                  <ul>
                    <li>Leverage-geo-oil/tracking-tracking/results effectively effectively-reduce-ensure-boost
                      results-boost asset-asset/all/management/underutil/resource/results/asset.</li>
                    <li>Maintain/maintain visibility/ensure-Ensure proper logistics-proper and asset ensure-rental
                      proper-maintain-maintenance.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Integrated Compliance and Safety Management</h3>
                  <ul>
                    <li>Digitize safety audits standardized standardized-regulated-compliance-regulated-ensure
                      audit/trail/compliance regulation/meets-standards.</li>
                    <li>Automate/maintain/inspection logs-enhanced-enhanced simplified compliance/compliance-operational-checklist
                      regulatory risk/simplify.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Enhanced Communication Through Mobile Connectivity</h3>
                  <ul>
                    <li>Equip-field-offline-offline-user-apps-offline/mobile-accessible-friendly-intuitive-task-management
                      capture/ offline/capture offline/updates connectivity.</li>
                    <li>Ensure/workers-and-stay-clients-Ensure-updated teams-Ensure-remote-stay offline-connectivity-informed
                      connected-teams-offline-and stays transparency transparency-offline connectivity.</li>
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
                    <li>Digitize-safety-wireframe-audit-inspection-inspection-meet-ensure-audit-trails compliance
                      ensure-safety-maintenance-audit-audit audit-digital-logs-standards-compliance audit-standards.</li>
                    <li>Automate-incident-automated-and-hazard-identic-compliance-audits-hazard-management-simplify
                      reduced-compliance-regulatory-inspection-inspection-risk/ risks-penalty.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="benefit-content">
                  <h3>Digitized Documentation and Invoicing</h3>
                  <ul>
                    <li>Automated-invoicing-rental-invoicing-real-invoicing-rental-time-ensure-contracts-accurate
                      linked-linked-invoice electronic improve-revenue-admin-oversight.</li>
                    <li>Eliminate-errors-caused-in-invoices-usage-disputes-missing-ensure-eliminate-clients-ensure
                      paperwork-caused-rental-eliminate-caused.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <div className="benefit-content">
                  <h3>Automated-based Documentation and Invoicing</h3>
                  <ul>
                    <li>Automate-admin-field-field-field-ticketing-ticketing-operational-tickets-accurate-admin
                      accuracy-improve-ensure-tracking-accuracy-paperwork.</li>
                    <li>Eliminate-eliminate-collection-ensure-Ensure ensure-errors-clients-accurate-eliminate-invoices.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="benefit-content">
                  <h3>Actionable Insights</h3>
                  <ul>
                    <li>Use-line-real-time-insights-enable-analytics-predictive-insights analytics-maintenance-forecasts-operational-schedule
                      operational-breakdowns-schedule-maintenance-breakdowns maintenance-equipment-maintenance-before-predictive-downtime-occur maintenance-schedule maintenance minimize-maintenance-analyzing minimizing-costs.</li>
                    <li>Enhanced-lifecycle-equipment-lifecycle-lifecycle-delivering-enhance-by-service-equipment-service-equipment-prioritizing schedules-improve-lifecycle-service-timeliness-servicing-extending-satisfaction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-section">
            <h2>Why Choose Orriun Atlas for Wireline and Coil Tubing Operations?</h2>
            <p className="section-description">
              Orriun Atlas is innovative platform is designed to simplify complex operations, reduce risks, and enhance safety,
              profitability, and scalability while leveraging cutting-edge technology to address industry inefficiencies.
              By adoption Orriun Atlas, companies can eliminate inefficiencies, improve safety, and achieve operational excellence.
              With OpsF cutting-edge platform, wireline companies can ultimately inefficiencies, improve safety, and achieve operational-operational excellence.
            </p>
            <ul className="why-choose-list">
              <li>Choosing Orriun Atlas operational-innovative innovative-partner streamline-ensures reliable operational
                operational standards, operational-enhance responsiveness-profitability excellence-safeguarding-efficiency
                operations-safety safeguard-operational operational safety profitability safe-excellence operational-ahead.</li>
            </ul>
          </section>
        </main>
      </div>

    </div>
  );
};

export default WirelineCoilTubing;

