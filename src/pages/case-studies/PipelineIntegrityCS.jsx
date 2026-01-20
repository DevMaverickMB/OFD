import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import '../industries/IndustryDetail.css';
import heroImg from '../../assets/case-studies/case_study_2_1768069445685.png';

const PipelineIntegrityCS = () => {
    const caseStudies = [
        { name: 'Equipment Rental Management', path: '/case-studies/equipment-rental-management' },
        { name: 'Pipeline Integrity Midstream', path: '/case-studies/pipeline-integrity' },
        { name: 'Smart Scheduling & Dispatching', path: '/case-studies/smart-scheduling' },
        { name: 'Field Service Management', path: '/case-studies/field-service-management' }
    ];

    return (
        <div className="industry-detail-page">
            <PageBanner
                title="Ensuring Pipeline Integrity In Midstream With Orriun Atlas"
                breadcrumbs={[
                    { label: 'Case Studies', path: '/case-studies' },
                    { label: 'Pipeline Integrity Midstream' }
                ]}
            />

            <div className="industry-detail-container">
                <main className="industry-content">
                    <div className="industry-hero-image">
                        <img src={heroImg} alt="Pipeline Integrity" />
                    </div>

                    <section className="industry-intro">
                        <p className="description">
                            A large midstream operator managing an extensive pipeline network faced numerous challenges
                            in monitoring pipeline health, scheduling regular inspections, and ensuring compliance with
                            safety regulations. They turned to Orriun Atlas to centralize operations and implement proactive
                            integrity management practices to safeguard assets and avoid costly incidents.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges</h2>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Risk of Pipeline Failures</h3>
                                    <ul>
                                        <li>Without real-time monitoring, early signs of corrosion or pressure abnormalities often went undetected until significant damage occurred.</li>
                                        <li>Reactive responses increased the likelihood of environmental hazards and regulatory penalties.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-clipboard-list"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Inconsistent Inspection Schedules</h3>
                                    <ul>
                                        <li>Manual spreadsheets and disconnected systems led to missed inspection windows.</li>
                                        <li>Compliance documentation was scattered and difficult to compile during audits.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-database"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Lack of Centralized Data Management</h3>
                                    <ul>
                                        <li>Inspection reports, historical maintenance logs, and sensor data were fragmented across multiple platforms.</li>
                                        <li>Field teams couldn't quickly access the information needed for decision-making.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Regulatory Compliance Difficulties</h3>
                                    <ul>
                                        <li>Federal and state safety regulations required detailed audit trails and frequent updates.</li>
                                        <li>Compiling compliance reports was time-consuming and prone to human errors.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>Solution</h2>
                        <p className="section-description">
                            Orriun Atlas implemented a comprehensive pipeline integrity management system that integrated
                            IoT sensors, field inspection workflows, and compliance tools into a single, unified platform.
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Real-Time Monitoring</h3>
                                    <ul>
                                        <li>IoT sensors continuously monitored pipeline pressure, flow rates, and temperature anomalies.</li>
                                        <li>Alerts instantly notified teams of deviations from normal operational parameters, enabling proactive responses.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Automated Inspection Scheduling and Workflows</h3>
                                    <ul>
                                        <li>Orriun Atlas tracked upcoming inspections and automatically assigned field teams to ensure timely execution.</li>
                                        <li>Mobile-friendly inspection checklists standardized processes and reduced errors during assessments.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-cloud"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Centralized Cloud-Based Repository</h3>
                                    <ul>
                                        <li>All historical inspection reports, maintenance logs, and sensor data were housed in a secure, accessible cloud platform.</li>
                                        <li>Teams could pull reports instantly, reducing bottlenecks during audits or operational decisions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-check-double"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Compliance and Regulatory Support</h3>
                                    <ul>
                                        <li>Automated audit trails documented every inspection, maintenance activity, and sensor reading.</li>
                                        <li>Comprehensive compliance reports were generated with a few clicks, simplifying regulatory submissions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Results</h2>
                        <p className="section-description">
                            With Orriun Atlas, the midstream operator achieved transformative improvements in safety,
                            efficiency, and regulatory compliance:
                        </p>
                        <ul className="why-choose-list">
                            <li><strong>50% Reduction in Pipeline Incidents:</strong> Early detection and real-time monitoring minimized failures and environmental risks.</li>
                            <li><strong>Enhanced Compliance:</strong> Automated documentation streamlined audits, reducing preparation time from weeks to mere days.</li>
                            <li><strong>Improved Team Productivity:</strong> Centralized data and mobile tools gave field teams the information they needed at their fingertips, reducing delays by 30%.</li>
                            <li><strong>Cost Savings:</strong> Predictive analytics and proactive maintenance lowered repair expenditures by 25% and avoided costly regulatory penalties.</li>
                            <li><strong>Increased Operational Transparency:</strong> Leadership gained full visibility into pipeline health and operations, enabling data-driven strategic planning.</li>
                        </ul>
                    </section>

                    <section className="why-choose-section">
                        <h2>Conclusion</h2>
                        <p className="section-description">
                            By adopting Orriun Atlas, the midstream operator transitioned from reactive crisis management to
                            proactive, data-driven integrity oversight. The platform's ability to unify sensor data, automate
                            workflows, and ensure compliance positioned the company as a leader in pipeline safety and operational
                            excellence. With Orriun Atlas, they safeguarded critical infrastructure, protected the environment,
                            and strengthened stakeholder confidence.
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
                                className={study.name === 'Pipeline Integrity Midstream' ? 'sidebar-link active' : 'sidebar-link'}
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

export default PipelineIntegrityCS;
