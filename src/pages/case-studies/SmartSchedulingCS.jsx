import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import '../industries/IndustryDetail.css';
import heroImg from '../../assets/case-studies/case_study_4_1768070505878.png';

const SmartSchedulingCS = () => {
    const caseStudies = [
        { name: 'Equipment Rental Management', path: '/case-studies/equipment-rental-management' },
        { name: 'Pipeline Integrity Midstream', path: '/case-studies/pipeline-integrity' },
        { name: 'Smart Scheduling & Dispatching', path: '/case-studies/smart-scheduling' },
        { name: 'Field Service Management', path: '/case-studies/field-service-management' }
    ];

    return (
        <div className="industry-detail-page">
            <PageBanner
                title="Smart Scheduling & Dispatching For Better Oilfield Operations"
                breadcrumbs={[
                    { label: 'Case Studies', path: '/case-studies' },
                    { label: 'Smart Scheduling & Dispatching' }
                ]}
            />

            <div className="industry-detail-container">
                <main className="industry-content">
                    <div className="industry-hero-image">
                        <img src={heroImg} alt="Smart Scheduling & Dispatching" />
                    </div>

                    <section className="industry-intro">
                        <p className="description">
                            A growing oilfield services provider struggled with inefficiencies in job scheduling and crew
                            dispatching. Delays, miscommunication, and last-minute changes were commonplace, leading to
                            customer dissatisfaction and operational bottlenecks. Orriun Atlas was implemented to optimize
                            scheduling workflows and provide real-time visibility into field operations.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges</h2>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-calendar-times"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Inefficient Job Scheduling</h3>
                                    <ul>
                                        <li>Schedulers relied on whiteboards and phone calls to coordinate crew assignments and job allocations.</li>
                                        <li>Double bookings and scheduling conflicts frequently disrupted operations and disappointed clients.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-hourglass-half"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Lack of Real-Time Tracking</h3>
                                    <ul>
                                        <li>Supervisors had no visibility into crew location or job progress, creating uncertainty about task completion times.</li>
                                        <li>Clients frequently called to inquire about service status due to lack of transparent communication.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-user-times"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Resource Misallocation</h3>
                                    <ul>
                                        <li>The company struggled to balance workload evenly across crews, leading to some teams being overburdened while others sat idle.</li>
                                        <li>Last-minute schedule changes created chaos, reducing overall operational efficiency.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Poor Communication</h3>
                                    <ul>
                                        <li>Field crews often missed updates about job changes or new assignments due to delayed or fragmented communication channels.</li>
                                        <li>Miscommunication resulted in wasted trips, idle time, and frustrated customers.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>Solution</h2>
                        <p className="section-description">
                            Orriun Atlas introduced an intelligent scheduling and dispatching system that automated
                            crew assignments, provided real-time visibility, and streamlined communication between
                            office teams and field workers.
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Optimized Job Scheduling</h3>
                                    <ul>
                                        <li>AI-powered algorithms analyzed crew availability, location, and skillset to assign jobs intelligently.</li>
                                        <li>Automated scheduling minimized conflicts and ensured optimal resource allocation across operations.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Live GPS Tracking</h3>
                                    <ul>
                                        <li>Real-time GPS tracking allowed supervisors to monitor crew locations and job progress dynamically.</li>
                                        <li>Route optimization tools reduced travel time between job sites, improving crew productivity.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-bell"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Instant Notifications</h3>
                                    <ul>
                                        <li>Field crews received real-time notifications about job changes, new assignments, or priority updates via the Orriun Atlas mobile app.</li>
                                        <li>Push notifications ensured everyone stayed informed and aligned, reducing miscommunication.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-tachometer-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Enhanced Productivity Dashboard</h3>
                                    <ul>
                                        <li>Managers accessed dashboards that displayed key metrics such as job completion rates, crew utilization, and average response times.</li>
                                        <li>Data-driven insights enabled continuous improvement and resource planning.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Results</h2>
                        <p className="section-description">
                            Orriun Atlas's smart scheduling and dispatching tools delivered measurable improvements:
                        </p>
                        <ul className="why-choose-list">
                            <li><strong>40% Increase in On-Time Job Completion:</strong> Automated scheduling reduced conflicts and enabled faster job turnaround.</li>
                            <li><strong>30% Improvement in Crew Utilization:</strong> Balanced workload distribution minimized idle time and maximized productivity.</li>
                            <li><strong>Enhanced Customer Satisfaction:</strong> Real-time tracking and transparent communication boosted client trust and loyalty.</li>
                            <li><strong>Reduced Travel Time:</strong> Optimized routing cut fuel costs and travel hours by 20%, freeing crews to handle more jobs daily.</li>
                            <li><strong>Streamlined Operations:</strong> Office teams saved 10+ hours weekly on manual scheduling tasks, allowing them to focus on strategic priorities.</li>
                        </ul>
                    </section>

                    <section className="why-choose-section">
                        <h2>Conclusion</h2>
                        <p className="section-description">
                            By leveraging Orriun Atlas for smart scheduling and dispatching, the oilfield services provider
                            overcame operational inefficiencies and positioned itself for sustainable growth. The platform
                            transformed chaotic workflows into streamlined, data-driven processes, enabling the company to
                            delight customers, empower employees, and gain a competitive edge in a demanding industry.
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
                                className={study.name === 'Smart Scheduling & Dispatching' ? 'sidebar-link active' : 'sidebar-link'}
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

export default SmartSchedulingCS;
