import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

const ComplianceSafety = () => {
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
                title="Compliance and Safety Management"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'Compliance and Safety Management' }
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
                                className={solution.name === 'Compliance and Safety Management' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop" alt="Compliance and Safety Management" />
                    </div>

                    <section className="solution-intro">
                        <h1>Compliance and Safety Management</h1>
                        <p className="subtitle">Ensure Regulatory Adherence and Protect Your Workforce</p>
                        <p className="description">
                            Safety is paramount in oilfield operations, and regulatory compliance is non-negotiable.
                            Managing safety protocols, certifications, incident reporting, and audit documentation across
                            multiple sites and crews is a complex challenge. Orriun Atlas provides comprehensive safety
                            and compliance tools that protect workers, ensure regulatory adherence, and minimize liability exposure.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Safety and Compliance Challenges</h2>
                        <p className="section-description">
                            Without integrated safety management, oilfield operators face significant risks and administrative burdens:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-file-signature"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Documentation Gaps</h3>
                                    <ul>
                                        <li>Paper-based safety records are incomplete, lost, or inaccessible during audits.</li>
                                        <li>Inconsistent documentation creates compliance vulnerabilities.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-id-card"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Certification Tracking</h3>
                                    <ul>
                                        <li>Expired certifications and training go unnoticed until audit failures.</li>
                                        <li>No centralized system to track worker qualifications across the organization.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-clipboard-list"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Inconsistent Safety Procedures</h3>
                                    <ul>
                                        <li>Different crews follow different processes, creating safety gaps.</li>
                                        <li>Difficult to enforce standardized safety protocols across all sites.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-hourglass-end"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Slow Incident Response</h3>
                                    <ul>
                                        <li>Delays in reporting and investigating safety incidents.</li>
                                        <li>Root cause analysis takes too long to prevent recurrence.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Enhances Safety and Compliance</h2>
                        <p className="section-description">
                            Orriun Atlas provides integrated tools to protect workers and ensure regulatory compliance:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-clipboard-check"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Digital Safety Checklists</h3>
                                    <ul>
                                        <li>Standardized pre-job and post-job safety checklists on mobile devices.</li>
                                        <li>Ensure every safety step is completed and documented consistently.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-certificate"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Certification Management</h3>
                                    <ul>
                                        <li>Track all worker certifications, licenses, and training records.</li>
                                        <li>Automatic alerts before certifications expire.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-ambulance"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Incident Reporting</h3>
                                    <ul>
                                        <li>Mobile incident reporting with photos, GPS location, and witness statements.</li>
                                        <li>Automated notification workflows for immediate response.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Investigation Tools</h3>
                                    <ul>
                                        <li>Structured root cause analysis workflows.</li>
                                        <li>Track corrective actions to completion.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-book"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Audit-Ready Documentation</h3>
                                    <ul>
                                        <li>All safety records stored securely with complete audit trails.</li>
                                        <li>Generate compliance reports instantly for regulatory inspections.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-hard-hat"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>JSA/JHA Integration</h3>
                                    <ul>
                                        <li>Job Safety Analysis templates for high-risk activities.</li>
                                        <li>Ensure hazards are identified and mitigated before work begins.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas for Safety Management?</h2>
                        <p className="section-description">
                            Orriun Atlas helps you build a culture of safety while simplifying compliance:
                        </p>
                        <ul className="why-choose-list">
                            <li>Reduce workplace incidents by 40% through consistent safety protocols.</li>
                            <li>Achieve 100% audit readiness with complete digital documentation.</li>
                            <li>Eliminate expired certification risks with automated tracking.</li>
                            <li>Reduce incident investigation time by 50% with structured workflows.</li>
                            <li>Meet OSHA, API, and other regulatory requirements with built-in compliance tools.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ComplianceSafety;
