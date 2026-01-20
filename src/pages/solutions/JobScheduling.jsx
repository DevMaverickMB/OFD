import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import './SolutionDetail.css';

const JobScheduling = () => {
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
                title="Job Scheduling and Dispatching"
                breadcrumbs={[
                    { label: 'Solutions', path: '/solutions' },
                    { label: 'Job Scheduling and Dispatching' }
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
                                className={solution.name === 'Job Scheduling and Dispatching' ? 'sidebar-link active' : 'sidebar-link'}
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
                        <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop" alt="Job Scheduling and Dispatching" />
                    </div>

                    <section className="solution-intro">
                        <h1>Job Scheduling and Dispatching</h1>
                        <p className="subtitle">Efficiently Assign and Manage Jobs for Maximum Productivity</p>
                        <p className="description">
                            Coordinating field crews, equipment, and job assignments across multiple well sites is a complex
                            logistics challenge. Poor scheduling leads to idle crews, missed appointments, and customer
                            dissatisfaction. Orriun Atlas provides intelligent scheduling and dispatching tools that optimize
                            resource allocation, reduce travel time, and ensure every job is completed on time.
                        </p>
                    </section>

                    <section className="challenges-section">
                        <h2>Scheduling Challenges in Oilfield Operations</h2>
                        <p className="section-description">
                            Without smart scheduling tools, oilfield service companies struggle with inefficiencies that impact
                            profitability and customer relationships:
                        </p>

                        <div className="challenges-grid">
                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-random"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Inefficient Route Planning</h3>
                                    <ul>
                                        <li>Crews waste hours driving between distant job sites due to poor route optimization.</li>
                                        <li>Increased fuel costs and vehicle wear from unnecessary mileage.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-user-clock"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Resource Conflicts</h3>
                                    <ul>
                                        <li>Double-booking of crews or equipment leads to missed jobs and overtime costs.</li>
                                        <li>Lack of visibility into crew availability causes scheduling conflicts.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-calendar-times"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Last-Minute Changes</h3>
                                    <ul>
                                        <li>Emergency jobs disrupt planned schedules with no efficient way to reassign.</li>
                                        <li>Poor communication leads to crews arriving at wrong locations or times.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="challenge-item">
                                <div className="challenge-icon">
                                    <i className="fas fa-balance-scale"></i>
                                </div>
                                <div className="challenge-content">
                                    <h3>Unbalanced Workloads</h3>
                                    <ul>
                                        <li>Some crews are overworked while others sit idle due to poor distribution.</li>
                                        <li>Skill mismatches result in jobs assigned to underqualified personnel.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how-platform-section">
                        <h2>How Orriun Atlas Optimizes Scheduling and Dispatching</h2>
                        <p className="section-description">
                            Orriun Atlas combines intelligent algorithms with real-time visibility to revolutionize how you
                            schedule and manage field operations:
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-brain"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>AI-Powered Scheduling</h3>
                                    <ul>
                                        <li>Intelligent algorithms consider skills, location, equipment, and priorities.</li>
                                        <li>Automatic optimization of daily schedules for maximum efficiency.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-route"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Smart Route Optimization</h3>
                                    <ul>
                                        <li>Minimize travel time with optimized routing between job sites.</li>
                                        <li>Real-time traffic integration adjusts routes dynamically.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-th-large"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Drag-and-Drop Dispatching</h3>
                                    <ul>
                                        <li>Intuitive visual scheduling board for easy job assignment and rescheduling.</li>
                                        <li>Real-time updates sync instantly to field technicians' mobile devices.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Live Crew Tracking</h3>
                                    <ul>
                                        <li>GPS tracking shows real-time location of all field crews and vehicles.</li>
                                        <li>Dispatchers can quickly identify nearest available resources for urgent jobs.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-bell"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Automated Notifications</h3>
                                    <ul>
                                        <li>Automatic alerts to crews about schedule changes and new assignments.</li>
                                        <li>Customer notifications for appointment confirmations and technician arrival.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <i className="fas fa-tasks"></i>
                                </div>
                                <div className="benefit-content">
                                    <h3>Workload Balancing</h3>
                                    <ul>
                                        <li>Visual dashboards show crew utilization and workload distribution.</li>
                                        <li>Ensure fair and efficient distribution of jobs across your workforce.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="why-choose-section">
                        <h2>Why Choose Orriun Atlas for Scheduling?</h2>
                        <p className="section-description">
                            Orriun Atlas delivers measurable improvements to your scheduling efficiency and service delivery:
                        </p>
                        <ul className="why-choose-list">
                            <li>Increase on-time job completion by 40% with intelligent scheduling.</li>
                            <li>Reduce travel time and fuel costs by 25% through route optimization.</li>
                            <li>Handle 30% more jobs per day with improved resource utilization.</li>
                            <li>Respond to emergency jobs in minutes instead of hours.</li>
                            <li>Improve customer satisfaction with reliable appointment management.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default JobScheduling;
