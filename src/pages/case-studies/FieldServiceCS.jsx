import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import '../industries/IndustryDetail.css';
import heroImg from '../../assets/case-studies/case_study_3_1768069462958.png';

const FieldServiceCS = () => {
    const caseStudies = [
        { name: 'Equipment Rental Management', path: '/case-studies/equipment-rental-management' },
        { name: 'Pipeline Integrity Midstream', path: '/case-studies/pipeline-integrity' },
        { name: 'Smart Scheduling & Dispatching', path: '/case-studies/smart-scheduling' },
        { name: 'Field Service Management', path: '/case-studies/field-service-management' }
    ];

    return (
        <div className="industry-detail-page">
            <PageBanner
                title="Transforming Field Service Management With Orriun Atlas"
                breadcrumbs={[
                    { label: 'Case Studies', path: '/case-studies' },
                    { label: 'Field Service Management' }
                ]}
            />

            <div className="industry-detail-container">
                <main className="industry-content">
                    <div className="industry-hero-image">
                        <img src={heroImg} alt="Field Service Management" />
                    </div>

                    <section className="industry-intro">
                        <p className="description">
                            An established oil and gas field service company was burdened by outdated processes that
                            relied heavily on manual data entry and paper-based documentation. Field technicians spent
                            hours each week completing forms, while back-office teams struggled to consolidate and verify
                            information. Seeking a digital transformation, the company adopted Orriun Atlas to modernize
                            field service operations and gain a competitive advantage.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges</h2>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Manual Field Ticketing</h3>
                                    <ul>
                                        <li>Field workers filled out paper tickets for every job, leading to lost documents and billing delays.</li>
                                        <li>Errors in handwriting or incomplete forms resulted in disputes and revenue loss.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Delayed Information Flow</h3>
                                    <ul>
                                        <li>Office staff received field tickets days after job completion, delaying invoicing and client updates.</li>
                                        <li>Real-time job status was unavailable, frustrating customers and reducing operational transparency.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-user-slash"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Limited Crew Accountability</h3>
                                    <ul>
                                        <li>Without mobile tools or GPS tracking, supervisors couldn't verify when technicians arrived at job sites or completed tasks.</li>
                                        <li>Time theft and unproductive work hours went unnoticed, reducing overall efficiency.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>Solution</h2>
                        <p className="section-description">
                            Orriun Atlas deployed a mobile-first field management platform that digitized workflows,
                            enabled real-time data capture, and connected field technicians with back-office teams seamlessly.
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Digital Field Ticketing and Data Capture</h3>
                                    <ul>
                                        <li>Field technicians used the Orriun Atlas mobile app to complete digital field tickets instantly, eliminating paperwork.</li>
                                        <li>Photos, signatures, and job notes were captured on-site and uploaded in real time.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-sync"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Real-Time Data Sync</h3>
                                    <ul>
                                        <li>Job data flowed directly into the central database, providing instant updates to office teams and customers.</li>
                                        <li>Invoices were generated automatically, accelerating billing cycles and improving cash flow.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Enhanced Crew Accountability</h3>
                                    <ul>
                                        <li>GPS tracking and time-stamped job entries provided full transparency into crew activities.</li>
                                        <li>Supervisors could monitor labor hours, verify job completion, and identify productivity trends.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Results</h2>
                        <p className="section-description">
                            Orriun Atlas transformed the company's field service operations, delivering significant benefits:
                        </p>
                        <ul className="why-choose-list">
                            <li><strong>80% Reduction in Paperwork:</strong> Digital field ticketing eliminated manual forms and reduced administrative burden dramatically.</li>
                            <li><strong>Faster Invoicing Cycles:</strong> Automated invoice generation accelerated billing, reducing payment delays by 50%.</li>
                            <li><strong>Improved Data Accuracy:</strong> Real-time data entry eliminated errors from illegible handwriting and incomplete forms.</li>
                            <li><strong>Greater Crew Productivity:</strong> Enhanced accountability and transparency motivated field teams, improving efficiency by 25%.</li>
                            <li><strong>Enhanced Customer Experience:</strong> Instant job updates and faster invoicing strengthened client relationships and increased repeat business.</li>
                        </ul>
                    </section>

                    <section className="why-choose-section">
                        <h2>Conclusion</h2>
                        <p className="section-description">
                            The transition to Orriun Atlas marked a turning point for the field service company. By embracing
                            digital transformation, they eliminated inefficiencies, reduced costs, and positioned themselves as
                            a forward-thinking leader in the oilfield services industry. Orriun Atlas proved to be the catalyst
                            for modernization, empowering teams to work smarter, faster, and with greater confidence.
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
                                className={study.name === 'Field Service Management' ? 'sidebar-link active' : 'sidebar-link'}
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

export default FieldServiceCS;
