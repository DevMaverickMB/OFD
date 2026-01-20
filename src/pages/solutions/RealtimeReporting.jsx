import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

const RealtimeReporting = () => {
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
                title="Real-Time Reporting and Dashboards"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'Real-Time Reporting and Dashboards' }
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
                                className={solution.name === 'Real-Time Reporting and Dashboards' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="Real-Time Reporting and Dashboards" />
                    </div>

                    <section className="solution-intro">
                        <h1>Real-Time Reporting and Dashboards</h1>
                        <p className="subtitle">Gain Actionable Insights with Live Data Visualization</p>
                        <p className="description">
                            Data-driven decision making is essential for oilfield operations, but extracting insights from
                            scattered data sources is time-consuming and often too late to be actionable. Orriun Atlas
                            provides powerful reporting and dashboard capabilities that consolidate data from across your
                            operation, delivering real-time visibility and actionable insights to every level of your organization.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges with Traditional Reporting</h2>
                        <p className="section-description">
                            Legacy reporting approaches leave oilfield operators making decisions with outdated or incomplete information:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Delayed Information</h3>
                                    <ul>
                                        <li>Reports generated days or weeks after events, limiting response options.</li>
                                        <li>Decisions made on stale data lead to suboptimal outcomes.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-puzzle-piece"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Data Silos</h3>
                                    <ul>
                                        <li>Information scattered across spreadsheets, emails, and disconnected systems.</li>
                                        <li>No single source of truth for operational performance.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-user-edit"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Manual Report Creation</h3>
                                    <ul>
                                        <li>Staff spend hours compiling data and building reports manually.</li>
                                        <li>Risk of errors and inconsistencies in manual data handling.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-eye-slash"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Limited KPI Visibility</h3>
                                    <ul>
                                        <li>Key performance indicators buried in complex spreadsheets.</li>
                                        <li>Executives lack real-time visibility into field operations.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Transforms Reporting</h2>
                        <p className="section-description">
                            Orriun Atlas delivers powerful analytics and visualization tools that turn data into insights:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Real-Time Dashboards</h3>
                                    <ul>
                                        <li>Live data feeds provide up-to-the-minute operational visibility.</li>
                                        <li>Customizable dashboards for different roles and responsibilities.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-th"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Drag-and-Drop Dashboard Builder</h3>
                                    <ul>
                                        <li>Create custom dashboards without IT support or coding skills.</li>
                                        <li>Wide library of charts, gauges, maps, and data widgets.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Advanced Analytics</h3>
                                    <ul>
                                        <li>Trend analysis, forecasting, and predictive analytics capabilities.</li>
                                        <li>Drill-down functionality from summary to transaction-level detail.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-file-export"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Automated Report Distribution</h3>
                                    <ul>
                                        <li>Schedule reports for automatic generation and email delivery.</li>
                                        <li>Export to PDF, Excel, and other formats as needed.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Mobile Access</h3>
                                    <ul>
                                        <li>Access dashboards and reports from any device, anywhere.</li>
                                        <li>Push notifications for critical KPI threshold breaches.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Data Integration</h3>
                                    <ul>
                                        <li>Consolidate data from multiple sources into unified views.</li>
                                        <li>Connect to ERP, accounting, and other enterprise systems.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas for Reporting?</h2>
                        <p className="section-description">
                            Orriun Atlas empowers data-driven decision making across your organization:
                        </p>
                        <ul className="why-choose-list">
                            <li>Reduce report creation time by 80% with automated data consolidation.</li>
                            <li>Enable faster decisions with real-time operational visibility.</li>
                            <li>Improve KPI performance through continuous monitoring and alerts.</li>
                            <li>Eliminate data silos with centralized reporting platform.</li>
                            <li>Empower all levels of the organization with self-service analytics.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default RealtimeReporting;
