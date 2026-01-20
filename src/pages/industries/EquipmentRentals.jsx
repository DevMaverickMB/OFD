import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './IndustryDetail.css';

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
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" alt="Equipment Rentals" />
          </div>

          <section className="industry-intro">
            <h1>Equipment Rentals</h1>
            <p className="subtitle">Operating Utilization and Efficiency with Orriun Atlas</p>
            <p className="description">
              Equipment rental companies are instrumental to the oil and gas industry, providing specialized tools,
              machinery, and equipment vital for exploration, drilling, and production activities. These companies
              face the challenge of managing vast inventories, ensuring equipment uptime, overseeing seamless logistics,
              and maintaining accurate financial records. As the industry places value in efficiency and reliability,
              equipment rental companies must operate at peak performance. However, they encounter significant hurdles
              due to lack of realtime insight and seamless digital platforms. Orriun Atlas emerges as a comprehensive solution
              built to address these complexities and unlock operational excellence.
            </p>
          </section>

          <section className="challenges-section">
            <h2>Challenges faced by TPE Equipment Rental Industry without Orriun Atlas</h2>
            <p className="section-description">
              The absence of digital solutions introduces significant inefficiencies and risks to equipment rental operations:
            </p>

            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-box"></i>
                </div>
                <div className="challenge-content">
                  <h3>Asset Tracking Challenges</h3>
                  <ul>
                    <li>Lack of visibility into equipment (where) results in inefficient asset allocation and overdeployment.</li>
                    <li>A sufficient tracking leads to confusion about availability, status (rented, idled, repaired, etc.)</li>
                    <li>Insufficient tracking leads to missed rental opportunities.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="challenge-content">
                  <h3>Maintenance Inefficiencies</h3>
                  <ul>
                    <li>Manual or reactionary maintenance leads to unexpected breakdowns and increased downtime.</li>
                    <li>Lack of predictive insights makes scheduling preventive maintenance difficult, resulting
                      in lifetime of equipment and negatively impacting client relationship.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-file-invoice"></i>
                </div>
                <div className="challenge-content">
                  <h3>Manual Documentation and Billing</h3>
                  <ul>
                    <li>Paperwork-intensive processes for contracts, work orders, and invoices lead to errors and delays.</li>
                    <li>Revenue collection is delayed due to inaccurate billing documentation.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div className="challenge-content">
                  <h3>Compliance and Safety Risks</h3>
                  <ul>
                    <li>Ensuring equipment meets regulatory and safety standards becomes a daunting task without
                      proper compliance tracking.</li>
                    <li>Lack of historical safety logs increases liability and increases fines and penalties.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Compliance and Safety Risks</h3>
                  <ul>
                    <li>Equipment-related asset regulatory or physical compliance is challenging without
                      integrated safety standards because they become a daunting task.</li>
                    <li>Lack of historical safety documentation increases audit complexities and potentially
                      even leads to fines.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-wrench"></i>
                </div>
                <div className="challenge-content">
                  <h3>Real-Time Asset Tracking</h3>
                  <ul>
                    <li>Digitize field tickets and automate invoicing for rental, storage, delivery, and other
                      charges.</li>
                    <li>Consolidate disparate data sources into a single, accessible platform that enables visibility
                      into all rental assets.</li>
                    <li>Enhanced payment-cycle time that reduces admin overhead.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-database"></i>
                </div>
                <div className="challenge-content">
                  <h3>Disorganized Inventory and Documentation</h3>
                  <ul>
                    <li>Lack of an availability inventory keeps pricing inventory keeps pricing current, which
                      can inflate damage recovery during drop periods.</li>
                    <li>Manually tracking equipment leads to incorrect availability, hindering responsiveness to
                      market demand and losing prospective clients.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="challenge-content">
                  <h3>Predictive Maintenance and Uptime</h3>
                  <ul>
                    <li>Leverage IoT sensors provides real-time conditional asset data (e.g., wear, hours of operation),
                      predictive maintenance tools.</li>
                    <li>Schedule preventive maintenance intelligently to avoid unexpected breakdowns, minimise operational
                      downtime, and reduce revenue loss.</li>
                    <li>Improved communication increases uptime, which bolsters client satisfaction and trust.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="challenge-content">
                  <h3>Outdated Inventory Management</h3>
                  <ul>
                    <li>Cloud-based inventory keeps pricing inventory keeps which equip current, which may damage
                      revenues during drop periods.</li>
                    <li>Proactive inventory-level alarms based on rental demand ensure right-equipment stocking
                      without over-committing capital expenditures.</li>
                  </ul>
                </div>
              </div>

              <div className="challenge-item">
                <div className="challenge-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="challenge-content">
                  <h3>Integrated Invoicing and Documentation</h3>
                  <ul>
                    <li>Achieve faster contract collection with automated invoicing tied to real-time utilization data.</li>
                    <li>Accurate real-time utilization data eliminates pricing disputes between rental businesses and
                      their customers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-section">
            <h2>Why Choose Orriun Atlas for Equipment Rentals?</h2>
            <p className="section-description">
              Orriun Atlas is designed to revolutionize equipment rental operations by providing a comprehensive, user-friendly
              platform packed with real-time visibility, automation, and actionable insights. This enables more effective
              training; and all affordable. By enabling rental companies to affordably By enable and cost-effectively:
            </p>
            <ul className="why-choose-list">
              <li><strong>With Orriun Atlas</strong>, equipment rental businesses can streamline their operations, reduce costs,
                and solidify their competitive position in a demand-driven, fast-paced market.</li>
              <li><strong>With Orriun Atlas's equipment rental businesses</strong> can streamline their operations reduce costs,
                and solidify will set new benchmarks for operational excellence, customer satisfaction, and scalable business growth.</li>
            </ul>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="benefit-content">
                  <h3>Real-Time Data Reporting and Analytics</h3>
                  <ul>
                    <li>Collect and analyse real-time performance data in real time through user-friendly and
                      sharable formats to enable better forecasts and actionable insights.</li>
                    <li>Provide stakeholders with up-to-date information essential for budget planning and resource
                      optimization.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <div className="benefit-content">
                  <h3>Seamless Integration with Existing Systems</h3>
                  <ul>
                    <li>Integrate Orriun Atlas effortlessly with existing ERP tools and systems like QuickBooks, etc.
                      avoid operational workflow disruption.</li>
                    <li>Eliminate data silos and ensure smooth collaboration across functional business operations.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>Mobile Connectivity and Field Operations</h3>
                  <ul>
                    <li>Equip field techs with a user-friendly mobile app for equipment-time equipment access to
                      order management and offline management.</li>
                    <li>Enable seamless communication between field teams and office staff to ensure customers
                      receive timely updates and field officers have critical information.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="benefit-content">
                  <h3>End-to-End Operational Visibility</h3>
                  <ul>
                    <li>Orriun Atlas provides visibility over field operations and business-level insights that pinpoint
                      inefficiencies and streamline decisions to optimize performance.</li>
                    <li>Monitor asset progress, equipment status, and finances in real-time.</li>
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
                    <li>Orriun Atlas's provides real-time over-level notifications with audit-ready log and
                      customizable checkpoints to notify equipment complies with safety standards and regulations
                      while safety track-and-monitor equipment are digitized.</li>
                    <li>Minimize risks through comprehensive compliance checks from device delivery,
                      inspection and financial measurement in real time.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="benefit-content">
                  <h3>Enhanced Communication Through Mobile Connectivity</h3>
                  <ul>
                    <li>Ensure real-time updates with user-friendly mobile and desktop apps to seamlessly connect
                      between field teams and administrative staff.</li>
                    <li>Ensure your workers and clients stay updated, even from remote operational locations to
                      maintain transparency and efficiency.</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div className="benefit-content">
                  <h3>Digitized Documentation and Invoicing</h3>
                  <ul>
                    <li>Automate rental invoicing and ensure contracts are linked electronically to improve admin oversight.</li>
                    <li>Eliminate errors in invoices or usage and ensure disputes from clients caused by missing
                      rental paperwork</li>
                  </ul>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="benefit-content">
                  <h3>Actionable Data and Predictive Maintenance</h3>
                  <ul>
                    <li>Use predictive analytics to schedule maintenance before breakdowns occur, minimizing downtime
                      and repairing costs.</li>
                    <li>Enhance equipment lifecycle by prioritizing servicing schedules, which delivers timelines and
                      client satisfaction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
};

export default EquipmentRentals;

