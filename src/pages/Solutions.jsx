import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import './Solutions.css';
import '../pages/Home.css';

// Import solution images - same as Home page
import solAssetMgmt from '../assets/solutions/sol_asset_mgmt_1767969099610.png';
import solTicketing from '../assets/solutions/sol_ticketing_1767969119802.png';
import solScheduling from '../assets/solutions/sol_scheduling_1767969136179.png';
import solInventory from '../assets/solutions/sol_inventory_1767969154407.png';
import solIoT from '../assets/solutions/sol_iot_v2_1767969366429.png';
import solSafety from '../assets/solutions/sol_safety_1767969188568.png';
import solReporting from '../assets/solutions/sol_reporting_v2_1767969401744.png';
import solMobileApp from '../assets/solutions/sol_mobile_app_1767969229107.png';

const Solutions = () => {
  // Same solutions data as Home page
  const solutions = [
    {
      icon: 'fas fa-industry',
      title: 'Oilfield Asset Management',
      description: 'Track, manage, and optimize oilfield assets for maximum efficiency and uptime.',
      color: 'white',
      image: solAssetMgmt,
      path: '/solutions/asset-management'
    },
    {
      icon: 'fas fa-receipt',
      title: 'Field Ticketing and Invoicing',
      description: 'Streamline job tracking and billing with accurate, automated field ticketing and invoicing.',
      color: 'white',
      image: solTicketing,
      path: '/solutions/field-ticketing'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Job Scheduling and Dispatching',
      description: 'Efficiently assign and manage jobs to ensure timely service and resource utilization.',
      color: 'white',
      image: solScheduling,
      path: '/solutions/job-scheduling'
    },
    {
      icon: 'fas fa-box',
      title: 'Inventory and Parts Management',
      description: 'Maintain control over inventory levels and parts tracking to avoid delays and reduce costs.',
      color: 'white',
      image: solInventory,
      path: '/solutions/inventory-management'
    },
    {
      icon: 'fas fa-satellite-dish',
      title: 'IoT and Predictive Maintenance',
      description: 'Leverage IoT data for real-time monitoring and predictive maintenance to minimize downtime.',
      color: 'white',
      image: solIoT,
      path: '/solutions/iot-predictive'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Compliance and Safety Management',
      description: 'Ensure adherence to regulations and safety protocols with integrated compliance tools.',
      color: 'white',
      image: solSafety,
      path: '/solutions/compliance-safety'
    },
    {
      icon: 'fas fa-chart-bar',
      title: 'Real-Time Reporting and Dashboards',
      description: 'Gain actionable insights with customizable dashboards and real-time reporting.',
      color: 'white',
      image: solReporting,
      path: '/solutions/realtime-reporting'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App for Field Technicians',
      description: 'Empower field technicians with a mobile app for seamless updates and task management on the go.',
      color: 'white',
      image: solMobileApp,
      path: '/solutions/mobile-app'
    }
  ];

  return (
    <div className="solutions-page">
      <PageBanner title="Solutions" />

      {/* <section className="solutions-intro">
        <div className="container">
          <h2>
            From Field Tickets to Executive Dashboards - Orriun Atlas offers end-to-end features that streamline operations, enhance visibility, and drive decision-making.
          </h2>
          <p>
            We understand the unique challenges of oilfield operations. Our platform is designed to solve real-world problems, from inefficient workflows to compliance hurdles, enabling our customers to focus on what matters most—delivering results.
          </p>
        </div>
      </section> */}

      {/* Solutions Section - Copied from Home page */}
      <section className="solutions-section">
        <div className="container">
          <div className="eyebrow-container-center scroll-animate" data-animate="fade-up">
            <span className="eyebrow-line"></span>
            <p className="eyebrow-text">From ground operations to executive decisions</p>
          </div>
          <h2 className="section-title scroll-animate" data-animate="fade-up">Know Our Solutions</h2>
          <p className="section-subtitle scroll-animate" data-animate="fade-up" data-delay="100">
            From field tickets to executive dashboards, Orriun Atlas provides a comprehensive set of capabilities that streamline workflows, increase operational visibility, and enable data-driven decisions.
          </p>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.path}
                className="solution-card scroll-animate"
                data-animate="flip-in-x"
                data-delay={index * 100}
                style={{
                  backgroundImage: `url(${solution.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  textDecoration: 'none'
                }}
              >

                <div className="solution-icon-box">
                  <i className={solution.icon}></i>
                </div>
                <div className="solution-title">{solution.title}</div>
                <p className="solution-description">{solution.description}</p>
                <span className="read-more">
                  <i className="fas fa-arrow-right"></i> Read More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;


