import solTicketing from '../../assets/solutions/sol_ticketing_1767969119802.png';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';
import logo from '../../assets/logo.svg';
import sidebarPromoBg from '../../assets/sidebar_promo_bg.png';
import sidebarCtaBg from '../../assets/sidebar_cta_support_bg.png';
import AnimationObserver from '../../components/AnimationObserver';

const FieldTicketing = () => {
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
                title="Field Ticketing and Invoicing"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'Field Ticketing and Invoicing' }
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
                                className={solution.name === 'Field Ticketing and Invoicing' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src={solTicketing} alt="Field Ticketing and Invoicing" />
                    </div>

                    <section className="metary-intro-text scroll-animate" data-animate="fade-up">
                        <h1>Simplify Operations with Streamlined Field Ticketing and Invoicing</h1>
                        <p>
                            Processing field tickets for payment shouldn't be painful. With Orriun Atlas, you move from signed paper tickets to clean, accurate invoices in minutes, not weeks. Our platform connects your field crews directly to your finance team, ensuring every job is tracked, approved, and billed with zero billing leakage.
                        </p>
                        <p>
                            Chart your course to better cash flow. By digitizing the ticketing process, you eliminate lost paperwork, reduce Days Sales Outstanding (DSO), and gain real-time visibility into your daily revenue.
                        </p>
                    </section>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '20px' }}>Features of Orriun Atlas’s Ticketing and Invoicing Solution</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-file-invoice" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Digital Field Tickets</h3>
                                <p>Field crews create and submit tickets digitally from any device, anywhere. Offline mode ensures work continues even without a signal.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-clock" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Real-Time Job Tracking</h3>
                                <p>Monitor job progress as it happens. Track labor hours, equipment usage, and materials in real-time for accurate job costing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-tags" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Client Master Price Books</h3>
                                <p>Ensure every ticket is priced correctly with automated rate lookups based on client-specific contracts and price books.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-receipt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Integrated Invoicing</h3>
                                <p>Convert approved tickets into invoices with a single click. Seamlessly sync with your accounting software to speed up payment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-magic" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Automated Invoicing</h3>
                                <p>Configure rules to auto-generate invoices for recurring jobs or specific clients. Reduce manual data entry and human error.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-clipboard-check" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Custom Approval Workflows</h3>
                                <p>Define multi-step approval paths to ensure tickets meet all internal and external requirements before they reach the client.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-mobile-alt" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Mobile Accessibility</h3>
                                <p>Empower your field team. Technicians can capture signatures, attaching photos, and submit paperwork directly from their smartphones.</p>
                            </div>
                        </div>
                        {/* Empty box for alignment if needed, or flex handles it */}
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Problems Orriun Atlas's Field Ticketing Solution Solves</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-hourglass-start" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Slow and Delayed Billing</h3>
                                <p>Waiting for paper tickets drives up DSO. Our solution accelerates the billing cycle, getting invoices to customers days or weeks faster.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-file-invoice-dollar" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Disputed Invoices</h3>
                                <p>Billing errors leads to rejected invoices and strained client relationships. Eliminate pricing mistakes with automated rate validation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-funnel-dollar" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Lost Revenue (Revenue Leakage)</h3>
                                <p>Forget to bill for that extra valve or hour of labor? Capturing every billable item in the field ensures you get paid for every penny earned.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-clipboard-list" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Complex Compliance</h3>
                                <p>Meeting rigorous client submission standards is tough. Customize ticket templates to match exact customer specs and avoid rejections.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-stop-circle" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Lack of Visibility</h3>
                                <p>Don't wait until month-end to see your numbers. Track daily revenue production and job costs in real-time dashboard.</p>
                            </div>
                        </div>
                        {/* Empty box for alignment if needed, or flex handles it */}
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px' }}>Why Choose Orriun Atlas for Ticketing and Invoicing?</h3>

                    <div className="metary-feature-boxes">
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-cogs" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Efficiency</h3>
                                <p>Cut administrative overhead by up to 50% by automating data entry and approval processes.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-hand-holding-usd" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Cash Flow Improvement</h3>
                                <p>Get paid faster. Reducing billing lag directly impacts your bottom line and improves working capital.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-check-double" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Accuracy</h3>
                                <p>Build trust with precise, error-free invoices backed by digital field data and photos.</p>
                            </div>
                        </div>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-eye" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Transparency</h3>
                                <p>Give clients the clarity they demand. Customer portals allow them to view and approve tickets online instantly.</p>
                            </div>
                        </div>
                    </div>

                    <div className="metary-feature-boxes" style={{ marginTop: '-20px' }}>
                        <div className="metary-box scroll-animate" data-animate="fade-up">
                            <div className="box-icon-wrapper">
                                <i className="fas fa-chart-bar" style={{ fontSize: '40px', color: 'var(--primary-color)', margin: '20px' }}></i>
                            </div>
                            <div className="box-content">
                                <h3>Scalability</h3>
                                <p>Whether you have 5 crews or 500, our cloud-based platform grows with your business without missing a beat.</p>
                            </div>
                        </div>
                        {/* Empty box for alignment if needed, or flex handles it */}
                    </div>

                    <div className="metary-text-content scroll-animate" data-animate="fade-up" style={{ marginTop: '40px' }}>
                        <p>
                            Orriun Atlas bridges the gap between the field and the office. We help you turn work into revenue faster, easier, and with total precision, so you can focus on growing your business.
                        </p>
                    </div>

                    <div className="metary-checklist-section scroll-animate" data-animate="slide-up">
                        <h3>Our work benefits</h3>
                        <div className="metary-checklist-grid">
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Instant Invoice Generation</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Eliminate Billing Disputes</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Shorten Billing Cycles</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Accurate Time & Materials</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Real-time Revenue Analytics</div>
                            <div className="check-item"><i className="fas fa-check check-icon"></i> Seamless ERP Integration</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FieldTicketing;
