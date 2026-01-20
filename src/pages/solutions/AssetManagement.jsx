import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

const AssetManagement = () => {
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
                title="Oilfield Asset Management"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'Oilfield Asset Management' }
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
                                className={solution.name === 'Oilfield Asset Management' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=400&fit=crop" alt="Oilfield Asset Management" />
                    </div>

                    <section className="solution-intro">
                        <h1>Oilfield Asset Management</h1>
                        <p className="subtitle">Track, Manage, and Optimize Every Asset in Your Operation</p>
                        <p className="description">
                            Effective asset management is the backbone of successful oilfield operations. From drilling rigs and
                            pumping equipment to vehicles and safety gear, managing thousands of assets across multiple locations
                            is a complex challenge. Orriun Atlas provides a comprehensive asset management solution that gives
                            you complete visibility, control, and optimization capabilities for every piece of equipment in your fleet.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Common Challenges in Oilfield Asset Management</h2>
                        <p className="section-description">
                            Without a robust digital solution, oilfield companies face significant hurdles in managing their assets effectively:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Lack of Asset Visibility</h3>
                                    <ul>
                                        <li>Difficulty tracking asset locations across multiple well sites and facilities.</li>
                                        <li>Lost or misplaced equipment leading to unnecessary purchases and delays.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-tools"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Reactive Maintenance Issues</h3>
                                    <ul>
                                        <li>Equipment failures cause unplanned downtime and costly emergency repairs.</li>
                                        <li>No predictive insights to schedule preventive maintenance proactively.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Underutilized Assets</h3>
                                    <ul>
                                        <li>Equipment sitting idle while other sites experience shortages.</li>
                                        <li>Lack of utilization data leads to poor capital allocation decisions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Manual Tracking Processes</h3>
                                    <ul>
                                        <li>Spreadsheet-based tracking is error-prone and time-consuming.</li>
                                        <li>Inconsistent data entry creates discrepancies in asset records.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Transforms Asset Management</h2>
                        <p className="section-description">
                            Orriun Atlas delivers end-to-end asset lifecycle management with powerful features designed specifically
                            for oilfield operations:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-satellite"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Real-Time Asset Tracking</h3>
                                    <ul>
                                        <li>GPS and IoT-enabled tracking provides live location data for all assets.</li>
                                        <li>Instant alerts when assets move outside designated geofences.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Predictive Maintenance Scheduling</h3>
                                    <ul>
                                        <li>AI-driven analytics predict equipment failures before they occur.</li>
                                        <li>Automated maintenance schedules optimize asset uptime and lifespan.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Utilization Analytics</h3>
                                    <ul>
                                        <li>Comprehensive dashboards show asset utilization rates across all sites.</li>
                                        <li>Identify underutilized equipment for redeployment or disposal decisions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-database"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Centralized Asset Registry</h3>
                                    <ul>
                                        <li>Single source of truth for all asset information, documentation, and history.</li>
                                        <li>Complete audit trail of asset transfers, maintenance, and certifications.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-qrcode"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>QR Code and Barcode Integration</h3>
                                    <ul>
                                        <li>Scan assets for instant access to specifications, manuals, and service history.</li>
                                        <li>Streamlined check-in/check-out processes for equipment transfers.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Cost Tracking and ROI Analysis</h3>
                                    <ul>
                                        <li>Track total cost of ownership including acquisition, maintenance, and operation.</li>
                                        <li>Generate ROI reports to inform capital investment decisions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas for Asset Management?</h2>
                        <p className="section-description">
                            Orriun Atlas is purpose-built for the unique demands of oilfield asset management, offering a powerful
                            platform that maximizes asset value while minimizing operational risk:
                        </p>
                        <ul className="why-choose-list">
                            <li>Reduce equipment downtime by up to 40% through predictive maintenance capabilities.</li>
                            <li>Improve asset utilization rates by 25% with real-time visibility and analytics.</li>
                            <li>Eliminate lost equipment and reduce unnecessary capital expenditures.</li>
                            <li>Ensure compliance with regulatory requirements through comprehensive documentation.</li>
                            <li>Seamless integration with existing ERP and financial systems.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AssetManagement;
