import solSafety from '../../assets/solutions/sol_safety_1767969188568.png';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import AnimationObserver from '../../components/AnimationObserver';

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
            <AnimationObserver />
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

                    
                    <div className="sidebar-promo" style={{backgroundImage: `url(${sidebarPromoBg})`}}>
                        <div className="promo-content">
                            <div className="promo-logo">
                                <img src={logo} alt="OpsFlo" />
                            </div>
                            <h3>Optimizing Operations across Industries</h3>
                            <p>Discover how we're improving quality of Industries</p>
                            <Link to="/industries" className="promo-btn">
                                <i className="fas fa-arrow-right"></i> READ MORE
                            </Link>
                        </div>
                    </div>

                    <div className="sidebar-cta">
                        <div className="sidebar-cta-image" style={{backgroundImage: `url(${sidebarCtaBg})`}}></div>
                        <div className="sidebar-cta-content">
                            <div className="cta-icon">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3>How Can We Help?</h3>
                            <a href="tel:+44123456789" className="cta-phone">
                                <i className="fas fa-phone-alt"></i>
                                (+44) 123 456 789
                            </a>
                            <a href="mailto:addyour@emailhere" className="cta-email">
                                <i className="fas fa-envelope"></i>
                                addyour@emailhere
                            </a>
                        </div>
                    </div>
                </aside>

                <main className="solution-content">
                    <div className="solution-hero-image scroll-animate" data-animate="blur-fade">
                        <img src={solSafety} alt="Compliance and Safety Management" />
                    </div>

                    <section className="metary-intro-text scroll-animate" data-animate="fade-up">
                        <h1>Ensure Workforce Safety with Compliance and Safety Management</h1>
                        <p>
                            In the fast-moving and evolving landscape of oil and gas production, safety isn't just a priority—it's a core value.
                            Managing complex operations while ensuring the safety of every worker requires more than just checklists;
                            it demands a proactive, integrated approach. Orriun Atlas empowers your team with tools to monitor compliance
                            in real-time, enforce safety protocols, and maintain a culture of excellence.
                        </p>
                        <p>
                            The Orriun Atlas platform is designed to seamlessly integrate safety into every operational workflow, ensuring that production goals never come at the expense of personnel well-being or environmental stewardship.
                        </p>
                    </section>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Features of Orriun Atlas’s Compliance and Safety Management Solution</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-tasks" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Real-time Compliance Management</h3>
                                <p>Simplified processes allowing for real-time tracking of compliance metrics and personnel qualifications across all sites, ensuring no expired certifications go unnoticed.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-exclamation-triangle" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Incident Reporting and Analysis</h3>
                                <p>Report incidents or near-misses immediately from the field using mobile devices. Analyze root causes to prevent recurrence and improve safety protocols.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-user-graduate" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Safety Training Management</h3>
                                <p>Manage and track employee training records and certifications centrally. Automate reminders for upcoming expirations to maintain a qualified workforce.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-clipboard-check" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Form-Based Audit Trails</h3>
                                <p>Create digital audit reports automatically as work is performed. Maintain a complete, immutable history of all safety checks and inspections for effortless auditing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-shield-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Risk Assessment and Mitigation</h3>
                                <p>Identify potential hazards before work begins with digital Job Safety Analysis (JSA) tools. Implement mitigation strategies directly into work orders.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-leaf" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Environmental Monitoring</h3>
                                <p>Monitor environmental parameters and emissions in real-time to ensure compliance with strict environmental regulations and sustainability goals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-mobile-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Mobile Accessibility for Field Teams</h3>
                                <p>Equip field workers with safety tools in their pocket. Access safety manuals, report hazards, and complete checklists from any mobile device, online or offline.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-chart-pie" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Real-Time Dashboard and Reporting</h3>
                                <p>Monitor safety KPIs and compliance status at a glance. Generate detailed reports for management reviews and regulatory submissions instantly.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Problems Orriun Atlas's Compliance and Safety Management Solves</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-gavel" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Regulatory Compliance</h3>
                                <p>Difficult to keep up with changing regulations? Our platform updates automatically to reflect the latest standards, reducing the risk of non-compliance fines.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-biohazard" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Safety Risks and Incidents</h3>
                                <p>High risk of accidents without proper protocols? We enforce mandatory safety checks and provide real-time hazard alerts to prevent incidents.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-file-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Disorganized Records</h3>
                                <p>Managing safety records across multiple sites is chaotic. Centralize all safety documentation in one secure, searchable cloud repository.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-search" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Audit Failures</h3>
                                <p>Difficulty proving compliance during audits? Generate comprehensive audit trails instantly, demonstrating due diligence and full compliance history.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-user-check" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Lack of Accountability</h3>
                                <p>Hard to track who did what? Digital signatures and user timestamps create an undeniable record of accountability for every safety action.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-eye-slash" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Limited Visibility</h3>
                                <p>Lack of real-time view of safety status? Gain 360-degree visibility into your safety performance across all assets and teams from a single dashboard.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Why Choose Orriun Atlas for Compliance and Safety Management?</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-thumbs-up" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Proactive Safety Culture</h3>
                                <p>Foster a culture where safety is everyone's responsibility by making tools accessible and easy to use for every employee.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-layer-group" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Comprehensive Coverage</h3>
                                <p>Covers all aspects of safety management from training and compliance to incident reporting and risk assessment in one platform.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-stopwatch" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Improved Efficiency</h3>
                                <p>Streamline safety processes and reduce administrative work, allowing safety officers to focus on field coaching and prevention.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-chart-line" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Data-Driven Decisions</h3>
                                <p>Make informed safety decisions based on real-time data and trends analysis rather than gut feeling or outdated reports.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-text-content scroll-animate" data-animate="fade-up" style={{ marginTop: '40px' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Scalable Solution</h3>
                        <p>
                            Whether you have ten employees or ten thousand, Orriun Atlas grows with your business. Our flexible architecture adapts to your evolving safety needs, new regulations, and organizational changes without requiring a system overhaul.
                        </p>
                    </div>

                    <div className="metary-checklist-section scroll-animate" data-animate="slide-up">
                        <h3>Our Commitment</h3>
                        <p style={{ color: 'var(--text-color)', marginBottom: '20px' }}>Every employee deserves to go home safe at the end of the day. Orriun Atlas helps you make that a reality.</p>
                        <div className="metary-checklist-grid">
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Proactive Safety Culture</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Seamless Operations</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Improved Efficiency</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Data-Driven Decisions</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> 100% Audit Readiness</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Reduced Incident Rates</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ComplianceSafety;
