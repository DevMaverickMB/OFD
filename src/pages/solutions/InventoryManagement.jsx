import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

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
                        <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=400&fit=crop" alt="Inventory and Parts Management" />
                    </div>

                    <section className="solution-intro">
                        <h1>Inventory and Parts Management</h1>
                        <p className="subtitle">Maintain Control Over Every Part and Supply in Your Operation</p>
                        <p className="description">
                            Managing inventory across multiple warehouses, field trucks, and well sites is a constant challenge
                            for oilfield operators. Stockouts delay critical jobs while excess inventory ties up capital.
                            Orriun Atlas delivers comprehensive inventory management that ensures the right parts are always
                            available where and when they're needed, optimizing costs and operational efficiency.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Inventory Challenges in Oilfield Operations</h2>
                        <p className="section-description">
                            Without modern inventory management, oilfield companies face significant operational and financial challenges:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-box-open"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Stockouts and Delays</h3>
                                    <ul>
                                        <li>Critical jobs delayed because parts aren't available when needed.</li>
                                        <li>Emergency procurement at premium prices impacts profitability.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-warehouse"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Excess Inventory</h3>
                                    <ul>
                                        <li>Overstocking ties up working capital in slow-moving parts.</li>
                                        <li>Parts expire or become obsolete before they can be used.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Poor Visibility</h3>
                                    <ul>
                                        <li>Unable to track parts across multiple locations in real-time.</li>
                                        <li>Field truck inventory often unknown until technician reports shortage.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-calculator"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Manual Counting Errors</h3>
                                    <ul>
                                        <li>Spreadsheet-based tracking leads to inaccurate inventory counts.</li>
                                        <li>Annual physical counts reveal significant discrepancies.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Transforms Inventory Management</h2>
                        <p className="section-description">
                            Orriun Atlas provides end-to-end inventory visibility and control across your entire operation:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-barcode"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Barcode and RFID Tracking</h3>
                                    <ul>
                                        <li>Scan parts for instant check-in/check-out and location updates.</li>
                                        <li>Reduce counting errors and improve inventory accuracy to 99%+.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-exclamation-circle"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Automated Reorder Alerts</h3>
                                    <ul>
                                        <li>Smart par levels trigger automatic reorder notifications.</li>
                                        <li>Never run out of critical parts with predictive demand planning.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-truck"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Mobile Truck Inventory</h3>
                                    <ul>
                                        <li>Track parts on every field service truck in real-time.</li>
                                        <li>Technicians update inventory directly from mobile app during jobs.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-exchange-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Transfer Management</h3>
                                    <ul>
                                        <li>Easy parts transfers between warehouses, trucks, and job sites.</li>
                                        <li>Complete audit trail of all inventory movements.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Vendor Integration</h3>
                                    <ul>
                                        <li>Connect directly with suppliers for streamlined ordering.</li>
                                        <li>Compare pricing and availability across multiple vendors.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-chart-bar"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Usage Analytics</h3>
                                    <ul>
                                        <li>Track consumption patterns to optimize inventory levels.</li>
                                        <li>Identify slow-moving items for liquidation or return.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas for Inventory Management?</h2>
                        <p className="section-description">
                            Orriun Atlas delivers measurable improvements to inventory efficiency and cost control:
                        </p>
                        <ul className="why-choose-list">
                            <li>Reduce stockouts by 80% with intelligent reorder management.</li>
                            <li>Decrease inventory carrying costs by 25% through optimization.</li>
                            <li>Achieve 99%+ inventory accuracy with barcode/RFID tracking.</li>
                            <li>Eliminate emergency procurement costs with predictive planning.</li>
                            <li>Complete visibility across all locations including field trucks.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default InventoryManagement;
