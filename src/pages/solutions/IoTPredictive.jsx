import solIoT from '../../assets/solutions/sol_iot_v2_1767969366429.png';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import AnimationObserver from '../../components/AnimationObserver';

const IoTPredictive = () => {
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
                title="IoT and Predictive Maintenance"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'IoT and Predictive Maintenance' }
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
                                className={solution.name === 'IoT and Predictive Maintenance' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src={solIoT} alt="IoT and Predictive Maintenance" />
                    </div>

                    <section className="metary-intro-text scroll-animate" data-animate="fade-up">
                        <h1>Revolutionize Your Operations with IoT and Predictive Maintenance</h1>
                        <p>
                            In an industry where equipment downtime can cost millions per day, predictive maintenance is the game-changer.
                            Move from reactive "fix-it-when-it-breaks" models to intelligent, data-driven maintenance strategies.
                            Orriun Atlas leverages IoT data to predict failures before they happen, ensuring continuous operation and
                            maximizing asset performance.
                        </p>
                        <p>
                            We bring the data to you. Connect your field assets to the Orriun Atlas cloud to gain real-time visibility into machine health, usage, and efficiency from anywhere in the world.
                        </p>
                    </section>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Features of Orriun Atlas’s IoT and Predictive Maintenance Solution</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-satellite-dish" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Real-Time Asset Monitoring</h3>
                                <p>Collect data from sensors installed on pumps, trucks, and tanks. Monitor critical parameters like temperature, pressure, vibration, and flow rates in real-time.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-exclamation-circle" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Predictive Alerts</h3>
                                <p>Get notified instantly when equipment deviates from normal operating ranges. Avoid catastrophic failures with early warnings sent directly to your phone.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-calendar-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Automated Maintenance Scheduling</h3>
                                <p>Trigger work orders automatically based on actual usage hours or condition data, rather than arbitrary calendar dates.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-search-dollar" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Energy Efficiency Analysis</h3>
                                <p>Monitor fuel consumption (diesel/LNG) and power usage across your fleet. Identify inefficiencies to reduce operational costs and carbon footprint.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-shield-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Mobile Connectivity</h3>
                                <p>Access live asset data from the field via mobile app. empower technicians with real-time insights for faster diagnostics.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-project-diagram" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Centralized Dashboard</h3>
                                <p>View the health of your entire operation on a single pane of glass. Visualize trends and KPIs to make smarter strategic decisions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-plug" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Energy Efficiency Insights</h3>
                                <p>Optimize energy consumption across your facilities and fleets. Track usage patterns to lower utility costs.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-cogs" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Remote Diagnostics</h3>
                                <p>Troubleshoot issues remotely before dispatching a technician. Reduce truck rolls and increase first-time fix rates.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Problems Orriun Atlas's IoT and Predictive Maintenance Solves</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-stopwatch" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Unplanned Downtime</h3>
                                <p>Equipment failure stops production and costs money. Predict failures before they happen to keep your operations running smoothly.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-tools" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>High Maintenance Costs</h3>
                                <p>Reduce unnecessary preventative maintenance. Service equipment only when it actually needs it, extending asset life and saving parts.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-eye-slash" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Blind Spots</h3>
                                <p>Operating without real-time data is like driving blindfolded. Illuminate your operations with granular data visibility from sensor to boardroom.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-clipboard-list" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Compliance Challenges</h3>
                                <p>Regulatory agencies demand data. Automate environmental and equipment reporting to easily meet compliance standards without manual effort.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-user-clock" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Inefficient Resource Allocation</h3>
                                <p>Don't waste skilled labor on routine checks. Direct your technicians exactly where they are needed most based on critical asset health data.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-database" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Data Overload</h3>
                                <p>Data is useless if you can't understand it. Our platform turns raw sensor streams into actionable insights that drive business value.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Why Choose Orriun Atlas for IoT and Predictive Maintenance?</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-bolt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Powerful Analytics</h3>
                                <p>Built on industry-leading algorithms that turn complex data into simple, clear instructions for your team.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-hand-holding-usd" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Immediate ROI</h3>
                                <p>See returns in weeks, not years, by eliminating downtime and extending the life of your expensive capital assets.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-lock" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Security</h3>
                                <p>Industrial-grade security ensures your operational data remains protected and private at all times.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-arrows-alt-h" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Scalability</h3>
                                <p>Start small with critical assets and scale effortlessly to thousands of sensors as your needs grow.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-puzzle-piece" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Easy Integration</h3>
                                <p>Compatible with standard industrial protocols (Modbus, MQTT) for seamless connection to your existing hardware.</p>
                            </div>
                        </div>
                        {/* Empty box for alignment if needed, or flex handles it */}
                    </div>

                    <div className="metary-text-content scroll-animate" data-animate="fade-up" style={{ marginTop: '40px' }}>
                        <p>
                            Orriun Atlas is more than just software; it's a strategic partner in your digital transformation journey. We help you unlock the hidden value in your operational data, driving efficiency, safety, and profitability across your entire enterprise.
                        </p>
                    </div>

                    <div className="metary-checklist-section scroll-animate" data-animate="slide-up">
                        <h3>Key Benefits Summary</h3>
                        <div className="metary-checklist-grid">
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Reduce Unexpected Failures</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Lower Maintenance Costs</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Extend Asset Lifespan</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Improve Safety</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Optimize Resource Allocation</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Data-Driven Decisions</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default IoTPredictive;
