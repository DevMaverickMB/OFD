import solInventory from '../../assets/solutions/sol_inventory_1767969154407.png';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import AnimationObserver from '../../components/AnimationObserver';

const InventoryManagement = () => {
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
                title="Inventory and Parts Management"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'Inventory and Parts Management' }
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
                                className={solution.name === 'Inventory and Parts Management' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src={solInventory} alt="Inventory and Parts Management" />
                    </div>

                    <section className="metary-intro-text scroll-animate" data-animate="fade-up">
                        <h1>Stay Ahead with Streamlined Inventory and Parts Management</h1>
                        <p>
                            Inefficient inventory management leads to costly downtime and wasted capital. Keep your operations
                            running smoothly with Orriun Atlas. We provide real-time visibility into your stock levels, helping
                            you maintain the right balance of critical spares without overstocking. Ensure your field crews
                            always have the parts they need, when they need them.
                        </p>
                        <p>
                            Trace every part from purchase to installation. Orriun Atlas gives you granular control over your supply chain, reducing shrinkage and ensuring accountability at every step of the process.
                        </p>
                    </section>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Features of Orriun Atlas’s Inventory and Parts Management Solution</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-search-location" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Real-Time Inventory Tracking</h3>
                                <p>Track stock levels across multiple warehouses, trucks, and rig sites in real-time. Know exactly what you have and where it is instantly.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-sync-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Automated Reordering</h3>
                                <p>Set minimum and maximum stock levels to trigger automatic purchase requisitions. Never run out of critical spares again.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-barcode" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Barcode & QR Code Scanning</h3>
                                <p>Streamline check-in/check-out processes with mobile scanning. Eliminate manual data entry errors and speed up inventory audits.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-truck-loading" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Multi-Warehouse Management</h3>
                                <p>Manage inventory across unlimited locations effortlessly. Transfer stock between sites with full audit trails and approval workflows.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-clipboard-list" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Parts Usage Tracking</h3>
                                <p>Link parts directly to work orders and assets. Track consumption history to forecast future needs and calculate accurate job costs.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-dollar-sign" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>First-In-First-Out (FIFO) Management</h3>
                                <p>Minimize waste by using older stock first. Ensure optimal inventory turnover and reduce the risk of expired materials.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-puzzle-piece" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Comprehensive Integration</h3>
                                <p>Seamlessly integrates with procurement, maintenance, and accounting modules for a unified view of your operations.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-mobile-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Mobile Access</h3>
                                <p>Give field techs the power to check stock availability and request parts directly from their mobile devices.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Problems Orriun Atlas's Inventory and Parts Management Solves</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-boxes" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Stockouts and Overstocking</h3>
                                <p>Struggle to find the right balance? Our analytics predict demand to keep inventory lean without risking operational availability.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-search-minus" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Lost or Misplaced Parts</h3>
                                <p>Tired of parts disappearing? Detailed tracking history shows exactly who moved what and when, increasing accountability across the board.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-shipping-fast" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Inefficient Ordering</h3>
                                <p>Relying on manual counts and spreadsheets leads to errors. Automate your purchasing workflow to save time and reduce mistakes.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-warehouse" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Disorganized Parts Storage</h3>
                                <p>Messy warehouses slow down operations. Organize your inventory with precise bin locations and layout mapping.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-hand-holding-usd" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Financial Waste</h3>
                                <p>Carrying excess inventory ties up capital. Optimize your stock levels to free up cash flow for other strategic investments.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-bullseye" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Inaccurate Data for Decision Making</h3>
                                <p>Don't make blind decisions. Get precise, real-time inventory valuations and usage reports to drive smarter procurement strategies.</p>
                            </div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Why Choose Orriun Atlas for Inventory and Parts Management?</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-eye" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Total Cost Visibility</h3>
                                <p>Understand the true cost of your inventory, including holding costs, with detailed financial analytics.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-rocket" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Efficiency</h3>
                                <p>Spend less time managing parts and more time getting the job done with streamlined digital workflows.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-piggy-bank" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Cost Control</h3>
                                <p>Reduce waste and prevent theft with strict access controls and digital sign-offs for high-value items.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-chart-bar" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Scalability</h3>
                                <p>Whether managing a single warehouse or regional hubs, Orriun Atlas scales seamlessly to meet your needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-link" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Integration</h3>
                                <p>Seamlessly integrates with major ERP and accounting systems to ensure data consistency across your organization.</p>
                            </div>
                        </div>
                        {/* Empty box for alignment if needed, or flex handles it */}
                    </div>

                    <div className="metary-text-content scroll-animate" data-animate="fade-up" style={{ marginTop: '40px' }}>
                        <p>
                            Orriun Atlas transforms inventory management from a headache into a competitive advantage. Ensure your team has the right tools for the job, every time, while keeping your bottom line healthy.
                        </p>
                    </div>

                    <div className="metary-checklist-section scroll-animate" data-animate="slide-up">
                        <h3>Key Benefits Summary</h3>
                        <div className="metary-checklist-grid">
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Optimize Stock Levels</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Reduce Carrying Costs</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Prevent Stockouts</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Streamline Procurement</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Warehouse Organization</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Multi-Site Visibility</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default InventoryManagement;
