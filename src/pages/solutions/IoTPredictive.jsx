import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

const IoTPredictive = () => {
    const solutions = [
        { name: 'Oilfield Asset Management', path: '/solutions/asset-management' },
        { name: 'Field Ticketing and Invoicing', path: '/solutions/field-ticketing' },
        { name: 'Job Scheduling and Dispatching', path: '/solutions/job-scheduling' },
        { name: 'Inventory and Parts Management', path: '/solutions/inventory-management' },
        { name: 'IoT and Predictive Maintenance', path: '/solutions/iot-predictive' },
        { name: 'Compliance and Safety Management', path: '/solutions/compliance-safety' },
        { name: 'Real-Time Reporting and Dashboards', path: '/solutions/realtime-reporting' },
        { name: 'Mobile App for Field Technicians', path: '/solutions/mobile-app' }
    ];

    return (
        <div className="solution-detail-page">
            <PageBanner
                title="IoT and Predictive Maintenance"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'IoT and Predictive Maintenance' }
                ]}
            />

            <div className="solution-detail-container">
                <aside className="solution-sidebar scroll-animate" data-animate="fade-left">
                    <div className="sidebar-section">
                        <h3>Our Solutions</h3>
                        {solutions.map((solution, index) => (
                            <Link
                                key={index}
                                to={solution.path}
                                className={solution.name === 'IoT and Predictive Maintenance' ? 'sidebar-link active' : 'sidebar-link'}
                            >
                                {solution.name}
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

                <main className="solution-content">
                    <div className="solution-hero-image">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop" alt="IoT and Predictive Maintenance" />
                    </div>

                    <section className="solution-intro">
                        <h1>IoT and Predictive Maintenance</h1>
                        <p className="subtitle">Leverage Smart Sensors to Predict Failures Before They Happen</p>
                        <p className="description">
                            Unplanned equipment failures are the most costly disruptions in oilfield operations; resulting in
                            lost production, emergency repairs, and safety risks. Orriun Atlas integrates with IoT sensors
                            and leverages advanced analytics to monitor equipment health in real-time, predict potential
                            failures, and schedule maintenance before problems occur, maximizing uptime and equipment longevity.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges with Reactive Maintenance</h2>
                        <p className="section-description">
                            Traditional maintenance approaches leave oilfield operators vulnerable to costly equipment failures:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-times-circle"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Unexpected Breakdowns</h3>
                                    <ul>
                                        <li>Critical equipment fails without warning, halting operations for hours or days.</li>
                                        <li>Emergency repairs cost 3-5x more than planned maintenance.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-money-bill-wave"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Lost Production Revenue</h3>
                                    <ul>
                                        <li>Every hour of downtime translates to significant revenue loss.</li>
                                        <li>Cascade effects impact downstream operations and customer commitments.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-wrench"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Over-Maintenance Waste</h3>
                                    <ul>
                                        <li>Calendar-based maintenance replaces parts that still have useful life.</li>
                                        <li>Unnecessary maintenance activities consume resources and cause disruption.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-user-injured"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Safety Risks</h3>
                                    <ul>
                                        <li>Failing equipment can create dangerous conditions for workers.</li>
                                        <li>Pressure, temperature, and vibration anomalies often go undetected.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Enables Predictive Maintenance</h2>
                        <p className="section-description">
                            Orriun Atlas combines IoT connectivity with AI-powered analytics to transform how you maintain
                            equipment:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-wifi"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>IoT Sensor Integration</h3>
                                    <ul>
                                        <li>Connect to vibration, temperature, pressure, and flow sensors.</li>
                                        <li>Support for major industrial sensor protocols and manufacturers.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-chart-area"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Real-Time Monitoring</h3>
                                    <ul>
                                        <li>Continuous data streaming from equipment across all locations.</li>
                                        <li>Customizable dashboards show equipment health at a glance.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-magic"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>AI-Powered Predictions</h3>
                                    <ul>
                                        <li>Machine learning models detect patterns that precede failures.</li>
                                        <li>Predictive alerts give days or weeks of warning before breakdowns.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Automated Work Order Creation</h3>
                                    <ul>
                                        <li>Predictive alerts automatically generate maintenance work orders.</li>
                                        <li>Integration with scheduling ensures timely preventive action.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-history"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Equipment Health History</h3>
                                    <ul>
                                        <li>Complete historical data for trend analysis and reporting.</li>
                                        <li>Track equipment performance over time to optimize replacement decisions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Threshold Alerts</h3>
                                    <ul>
                                        <li>Instant notifications when parameters exceed safe operating limits.</li>
                                        <li>Escalation workflows ensure critical alerts receive immediate attention.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas for Predictive Maintenance?</h2>
                        <p className="section-description">
                            Orriun Atlas delivers significant ROI through reduced downtime and optimized maintenance:
                        </p>
                        <ul className="why-choose-list">
                            <li>Reduce unplanned downtime by up to 50% with predictive analytics.</li>
                            <li>Extend equipment lifespan by 20-30% through condition-based maintenance.</li>
                            <li>Cut maintenance costs by 25% by eliminating unnecessary scheduled maintenance.</li>
                            <li>Improve safety by detecting dangerous conditions before they cause incidents.</li>
                            <li>Easy integration with existing sensor infrastructure and SCADA systems.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default IoTPredictive;
