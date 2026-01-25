import solAssetMgmt from '../../assets/solutions/sol_asset_mgmt_1767969099610.png';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import AnimationObserver from '../../components/AnimationObserver';

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
            <AnimationObserver />
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
                        <img src={solAssetMgmt} alt="Oilfield Asset Management" />
                    </div>

                    <section className="metary-intro-text scroll-animate" data-animate="fade-up">
                        <h1>Optimize Your Oilfield Operations</h1>
                        <p>
                            Maximize the value of your assets with Orriun Atlas. From rigs and pumps to vehicles and tools, our comprehensive asset management solution gives you complete visibility into the location, condition, and performance of every piece of equipment in your fleet. Move beyond spreadsheets and reactive maintenance.
                        </p>
                        <p>
                            Orriun Atlas empowers you to optimize utilization, extend equipment lifespans, and reduce capital expenditures. With real-time tracking and lifecycle management, you'll know exactly where your assets are, who is using them, and when they need service, all from a single dashboard.
                        </p>
                    </section>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Features of Orriun Atlas’s Asset Management Solution</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-network-wired" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Comprehensive Asset Tracking</h3>
                                <p>Track detailed information for every asset in your fleet. Store specifications, maintenance history, manuals, and warranty documents in one secure digital library.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-calendar-check" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Preventative Maintenance Scheduling</h3>
                                <p>Set automated schedules for routine inspections and service. Receive reminders based on time, usage hours, or mileage to prevent breakdowns.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-chart-line" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Asset Lifecycle Management</h3>
                                <p>Manage assets from procurement to retirement. Calculate depreciation, track ROI, and make data-driven decisions on when to repair or replace.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-map-marked-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>GPS Tracking and Performance Monitoring</h3>
                                <p>Integrate with GPS devices to see real-time locations on a map. Monitor utilization rates to identify underused assets and optimize deployment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-file-invoice-dollar" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Compliance and Certification Management</h3>
                                <p>Never miss a safety inspection again. Track expiration dates for certifications and receive alerts to ensure full regulatory compliance.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-mobile-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Mobile Access (RFID/QR)</h3>
                                <p>Check assets in and out instantly with mobile scanning. Field techs can access service history and update status directly from the job site.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Problems Orriun Atlas's Asset Management Solves</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-search-location" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Lost or Stolen Assets</h3>
                                <p>Prevents costly loss. Know the last known location and custodian of every item. Real-time tracking discourages theft and aids recovery.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-hourglass-end" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Equipment Downtime</h3>
                                <p>Stops unexpected breakdowns. Proactive maintenance ensures equipment is always ready for the job, reducing non-productive time (NPT).</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-exclamation-triangle" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>High Operational Costs</h3>
                                <p>Avoids unnecessary purchases. Optimize your inventory by identifying surplus equipment that can be redeployed instead of buying new.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-gavel" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Regulatory Non-Compliance</h3>
                                <p>Avoids fines and safety risks. Automatic alerts ensure every inspection and certification is up to date and documented for audits.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-eye-slash" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Lack of Visibility</h3>
                                <p>Eliminates blind spots. No more guessing what equipment is available. gain full visibility into your asset availability across the entire organization.</p>
                            </div>
                        </div>
                        {/* Empty box for alignment if needed, or flex handles it */}
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Why Choose Orriun Atlas for Oilfield Asset Management?</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-microchip" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Cutting-Edge Technology</h3>
                                <p>Harness the power of the latest IoT sensors and cloud computing for unparalleled asset intelligence.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-user-friends" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>User-Friendly Interface</h3>
                                <p>Designed for the field. Intuitive and easy to use, ensuring high adoption rates among your crews.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-sliders-h" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Customizable Solutions</h3>
                                <p>Tailored to your needs. Configure fields, reports, and workflows to match your specific operational requirements.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-hand-holding-heart" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Proven ROI</h3>
                                <p>Tangible results. Experience reduced costs, improved efficiency, and higher profitability within months of implementation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-text-content scroll-animate" data-animate="fade-up" style={{ marginTop: '40px' }}>
                        <p>
                            Take control of your assets and stop leaking profit. With Orriun Atlas, you turn your equipment into a competitive advantage, driving efficiency and reliability across your entire operation.
                        </p>
                    </div>

                    <div className="metary-checklist-section scroll-animate" data-animate="slide-up">
                        <h3>Our work benefits</h3>
                        <div className="metary-checklist-grid">
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Reduce Equipment Downtime</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Improve Asset Utilization</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Eliminate Lost Equipment</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Ensure Regulatory Compliance</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> ROI Analysis & Reporting</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Seamless ERP Integration</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AssetManagement;
