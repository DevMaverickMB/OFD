import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

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
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop" alt="Field Ticketing and Invoicing" />
                    </div>

                    <section className="solution-intro">
                        <h1>Field Ticketing and Invoicing</h1>
                        <p className="subtitle">Streamline Job Tracking and Billing with Digital Precision</p>
                        <p className="description">
                            In the fast-paced oilfield environment, accurate and timely billing is critical to cash flow and
                            customer satisfaction. Traditional paper-based ticketing systems create delays, errors, and disputes
                            that impact your bottom line. Orriun Atlas revolutionizes field ticketing with a fully digital
                            solution that captures work details in real-time and converts them into accurate invoices instantly.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Challenges with Traditional Field Ticketing</h2>
                        <p className="section-description">
                            Paper-based and legacy ticketing systems create significant operational and financial challenges:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Billing Delays and Errors</h3>
                                    <ul>
                                        <li>Paper tickets often get lost, damaged, or delayed in transit to the office.</li>
                                        <li>Manual data entry introduces errors that lead to billing disputes.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-hourglass-half"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Extended Billing Cycles</h3>
                                    <ul>
                                        <li>Days or weeks pass before field tickets reach accounting for processing.</li>
                                        <li>Delayed invoicing negatively impacts cash flow and working capital.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-gavel"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Customer Disputes</h3>
                                    <ul>
                                        <li>Unclear documentation leads to disagreements over work performed and hours billed.</li>
                                        <li>Lack of digital signatures and timestamps creates verification challenges.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-eye-slash"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Limited Visibility</h3>
                                    <ul>
                                        <li>Managers lack real-time insight into work being performed in the field.</li>
                                        <li>Unable to track job progress or identify issues until after completion.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Transforms Field Ticketing</h2>
                        <p className="section-description">
                            Orriun Atlas provides a comprehensive digital ticketing platform that accelerates billing while
                            improving accuracy and transparency:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Mobile Ticket Creation</h3>
                                    <ul>
                                        <li>Field technicians create digital tickets directly from their mobile devices.</li>
                                        <li>Capture photos, notes, and equipment details in real-time.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-signature"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Digital Signatures and Approvals</h3>
                                    <ul>
                                        <li>Obtain customer signatures on-site for immediate work verification.</li>
                                        <li>Multi-level approval workflows ensure proper authorization.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Instant Invoice Generation</h3>
                                    <ul>
                                        <li>Automatic conversion of approved tickets to invoices within minutes.</li>
                                        <li>Pre-configured pricing rules ensure accurate billing calculations.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-sync-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>ERP Integration</h3>
                                    <ul>
                                        <li>Seamless synchronization with QuickBooks, SAP, and other accounting systems.</li>
                                        <li>Eliminate duplicate data entry and reconciliation headaches.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Time and Materials Tracking</h3>
                                    <ul>
                                        <li>Accurate capture of labor hours, equipment usage, and materials consumed.</li>
                                        <li>GPS-verified timestamps prevent time inflation disputes.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Revenue Analytics</h3>
                                    <ul>
                                        <li>Real-time dashboards show billing status, outstanding invoices, and revenue trends.</li>
                                        <li>Identify high-performing services and customers for strategic focus.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas for Field Ticketing?</h2>
                        <p className="section-description">
                            Orriun Atlas delivers measurable improvements to your billing operations and financial performance:
                        </p>
                        <ul className="why-choose-list">
                            <li>Reduce billing cycles from weeks to hours with real-time ticket processing.</li>
                            <li>Eliminate 95% of billing disputes through accurate digital documentation.</li>
                            <li>Improve cash flow with faster invoice generation and delivery.</li>
                            <li>Reduce administrative overhead by 60% through automation.</li>
                            <li>Complete audit trail for compliance and dispute resolution.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default FieldTicketing;
