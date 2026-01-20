import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import '../industries/IndustryDetail.css';
import heroImg from '../../assets/case-studies/case_study_1_1768069429940.png';

const EquipmentRentalCS = () => {
    const caseStudies = [
        { name: 'Equipment Rental Management', path: '/case-studies/equipment-rental-management' },
        { name: 'Pipeline Integrity Midstream', path: '/case-studies/pipeline-integrity' },
        { name: 'Smart Scheduling & Dispatching', path: '/case-studies/smart-scheduling' },
        { name: 'Field Service Management', path: '/case-studies/field-service-management' }
    ];

    return (
        <div className="industry-detail-page">
            <PageBanner
                title="Optimizing Equipment Rental Management With Orriun Atlas"
                breadcrumbs={[
                    { label: 'Case Studies', path: '/case-studies' },
                    { label: 'Equipment Rental Management' }
                ]}
            />

            <div className="industry-detail-container">
                <main className="industry-content">
                    <div className="industry-hero-image scroll-animate" data-animate="fade-up">
                        <img src={heroImg} alt="Equipment Rental Management" />
                    </div>

                    <section className="industry-intro">
                        <p className="description">
                            A mid-sized oil and gas contracting company was struggling with its traditional, paper-based
                            system for managing equipment rentals. Manual processes led to errors, revenue leakage, and
                            challenges in tracking asset availability. They turned to Orriun Atlas to modernize operations
                            and unlock new efficiency gains across the board.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges</h2>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-file-invoice"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Revenue Leakage</h3>
                                    <ul>
                                        <li>Delays in invoicing and manual field tickets resulted in missed billing and revenue shortfalls.</li>
                                        <li>Difficulty tracking rental durations and equipment return dates led to undercharging or overbilling customers.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-sync-alt"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Asset Availability</h3>
                                    <ul>
                                        <li>Equipment status wasn't tracked in real time, leading to double-bookings and underutilization.</li>
                                        <li>Clients faced delays due to incorrect availability information.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-users-cog"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Operational Inefficiency</h3>
                                    <ul>
                                        <li>Office teams spent valuable hours consolidating field notes and creating invoices.</li>
                                        <li>Crews wasted time trying to access equipment schedules or completing repetitive forms.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-tools"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Reactive Maintenance</h3>
                                    <ul>
                                        <li>Equipment failures surprised teams due to a lack of preventive maintenance oversight.</li>
                                        <li>Costly downtime and penalties from clients became frequent occurrences.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>Solution</h2>
                        <p className="section-description">
                            Orriun Atlas provided a comprehensive, cloud-based system to centralize all aspects of equipment rental
                            operations. With its integrated modules, the company could now track every rental, automate processes,
                            and gain real-time visibility across equipment availability.
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Real-Time Equipment Tracking</h3>
                                    <ul>
                                        <li>GPS-powered tracking systems allowed visibility into equipment location and status at any moment.</li>
                                        <li>Automated updates eliminated the risk of double bookings and gave customers accurate availability information.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Automated Invoicing</h3>
                                    <ul>
                                        <li>Field technicians completed digital field tickets via the Orriun Atlas mobile application.</li>
                                        <li>Invoices were generated instantly with accurate rental durations and charges, reducing revenue leakage.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-cog"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Predictive Maintenance Management</h3>
                                    <ul>
                                        <li>IoT devices monitored equipment health, flagging issues before they escalated into costly failures.</li>
                                        <li>Automated reminders ensured timely preventive servicing, minimizing operational downtime.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Data-Driven Decision Making</h3>
                                    <ul>
                                        <li>Analytics dashboards provided clear insights into rental trends, utilization rates, and profitability.</li>
                                        <li>Leadership leveraged this data to optimize inventory, phase out underperforming assets, and forecast demand.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Results</h2>
                        <p className="section-description">
                            After implementing Orriun Atlas, the equipment rental company witnessed significant operational improvements:
                        </p>
                        <ul className="why-choose-list">
                            <li><strong>30% Revenue Growth:</strong> Automated and accurate field ticketing recovered lost revenue and improved billing cycles.</li>
                            <li><strong>Reduced Equipment Downtime:</strong> Predictive maintenance cut unplanned downtime by 40%, leading to greater customer satisfaction and fewer penalties.</li>
                            <li><strong>Higher Asset Utilization:</strong> Real-time tracking and optimized scheduling boosted equipment utilization rates to 85%.</li>
                            <li><strong>Enhanced Customer Experience:</strong> Faster response times and better equipment availability strengthened client relationships and retention.</li>
                            <li><strong>Operational Efficiency Gains:</strong> Office teams saved 15+ hours per week previously spent on manual invoice preparation and scheduling adjustments.</li>
                        </ul>
                    </section>

                    <section className="why-choose-section">
                        <h2>Conclusion</h2>
                        <p className="section-description">
                            The shift to Orriun Atlas transformed the company's equipment rental operations, enabling it to compete effectively
                            in a demanding industry. By focusing on automation, real-time tracking, and predictive insights, it achieved higher
                            profitability, better utilization of resources, and stronger customer relationships. Orriun Atlas proved to be the
                            catalyst for smarter, more efficient equipment rental management.
                        </p>
                    </section>
                </main>

                <aside className="industry-sidebar scroll-animate" data-animate="fade-left">
                    <div className="sidebar-section">
                        <h3>Case Studies</h3>
                        {caseStudies.map((study, index) => (
                            <Link
                                key={index}
                                to={study.path}
                                className={study.name === 'Equipment Rental Management' ? 'sidebar-link active' : 'sidebar-link'}
                            >
                                {study.name}
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        ))}
                    </div>

                    <div className="sidebar-material">
                        <h3>Resources</h3>
                        <Link to="/contact" className="material-link">
                            <i className="fas fa-file-pdf"></i>
                            <span>Download PDF</span>
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
            </div>

        </div>
    );
};

export default EquipmentRentalCS;
