import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

const MobileApp = () => {
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
                title="Mobile App for Field Technicians"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'Mobile App for Field Technicians' }
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
                                className={solution.name === 'Mobile App for Field Technicians' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop" alt="Mobile App for Field Technicians" />
                    </div>

                    <section className="solution-intro">
                        <h1>Mobile App for Field Technicians</h1>
                        <p className="subtitle">Empower Your Field Teams with Powerful Mobile Tools</p>
                        <p className="description">
                            Field technicians are the frontline of your oilfield operations, yet they're often disconnected
                            from critical information and forced to rely on paper processes. Orriun Atlas's mobile app puts
                            the power of the entire platform in their hands, enabling real-time data capture, instant
                            communication, and seamless task management, even in areas with no cellular connectivity.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges for Field Technicians</h2>
                        <p className="section-description">
                            Without mobile technology, field technicians face daily frustrations that impact productivity and job quality:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Paper-Based Workflows</h3>
                                    <ul>
                                        <li>Filling out paper forms is slow, error-prone, and delays data entry.</li>
                                        <li>Illegible handwriting causes mistakes in billing and reporting.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-signal"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Connectivity Challenges</h3>
                                    <ul>
                                        <li>Remote well sites often lack cellular coverage for web-based tools.</li>
                                        <li>Technicians can't access critical information when they need it most.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Communication Gaps</h3>
                                    <ul>
                                        <li>Dispatchers and technicians play phone tag to coordinate changes.</li>
                                        <li>Schedule updates don't reach technicians in time.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-book"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Lack of Information Access</h3>
                                    <ul>
                                        <li>Equipment manuals, job history, and specifications unavailable on-site.</li>
                                        <li>Technicians call back to office for information, wasting time.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Mobile Empowers Technicians</h2>
                        <p className="section-description">
                            The Orriun Atlas mobile app is purpose-built for the demanding oilfield environment:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-wifi-slash"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Offline Capability</h3>
                                    <ul>
                                        <li>Full functionality without network connectivity.</li>
                                        <li>Automatic sync when connection is restored.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-tasks"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Job Management</h3>
                                    <ul>
                                        <li>View schedule, job details, and navigation to site locations.</li>
                                        <li>Update job status and completion in real-time.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-receipt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Digital Field Tickets</h3>
                                    <ul>
                                        <li>Create tickets with time, materials, photos, and customer signatures.</li>
                                        <li>Eliminate paper completely with digital capture.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-camera"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Photo and Document Capture</h3>
                                    <ul>
                                        <li>Take photos directly within job records for documentation.</li>
                                        <li>Attach files, voice notes, and annotations to jobs.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-clipboard-check"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Safety Checklists</h3>
                                    <ul>
                                        <li>Complete required safety checklists before starting work.</li>
                                        <li>Report incidents and hazards immediately from the field.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-info-circle"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Equipment Information</h3>
                                    <ul>
                                        <li>Access equipment specs, manuals, and service history on-site.</li>
                                        <li>Scan barcodes/QR codes for instant asset information.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas Mobile?</h2>
                        <p className="section-description">
                            Orriun Atlas mobile transforms field technician productivity and job quality:
                        </p>
                        <ul className="why-choose-list">
                            <li>Increase technician productivity by 30% with streamlined workflows.</li>
                            <li>Eliminate paper completely with 100% digital field data capture.</li>
                            <li>Works offline in remote locations, syncing when connectivity returns.</li>
                            <li>Reduce first-time fix rates with instant access to equipment information.</li>
                            <li>Available on iOS and Android, optimized for rugged field use.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default MobileApp;
