import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import './FAQ.css';

const FAQ = () => {
  const [openCategories, setOpenCategories] = useState({});

  const faqCategories = [
    {
      id: 'operational-efficiency',
      title: 'Operational Efficiency',
      questions: [
        'How can we reduce downtime and improve equipment utilization?',
        'What are the best practices for optimizing field operations?',
        'How can we streamline our workflow processes?',
        'What metrics should we track to measure operational efficiency?'
      ]
    },
    {
      id: 'maintenance-asset',
      title: 'Maintenance and Asset Management',
      questions: [
        'How can we implement predictive maintenance strategies?',
        'What is the best way to track equipment maintenance history?',
        'How can we optimize our asset lifecycle management?',
        'What are the key indicators for equipment replacement decisions?'
      ]
    },
    {
      id: 'compliance-safety',
      title: 'Compliance and Safety',
      questions: [
        'How can we ensure regulatory compliance across all operations?',
        'What safety protocols should be implemented in the field?',
        'How do we manage safety documentation and reporting?',
        'What are the best practices for incident management and prevention?'
      ]
    },
    {
      id: 'workforce-resource',
      title: 'Workforce and Resource Management',
      questions: [
        'How can we optimize crew scheduling and allocation?',
        'What is the best approach to track employee certifications and training?',
        'How can we improve field technician productivity?',
        'What strategies work best for managing remote workforce?'
      ]
    },
    {
      id: 'inventory-supply',
      title: 'Inventory and Supply Chain',
      questions: [
        'How can we optimize inventory levels across multiple locations?',
        'What is the best way to track parts and materials usage?',
        'How can we reduce inventory carrying costs?',
        'What strategies help prevent stockouts and delays?'
      ]
    },
    {
      id: 'financial-management',
      title: 'Financial Management',
      questions: [
        'How can we automate and streamline invoicing processes?',
        'What are the best practices for cost tracking and control?',
        'How can we improve profit margins on field operations?',
        'What financial metrics are most important to track?'
      ]
    },
    {
      id: 'customer-service',
      title: 'Customer Service and Satisfaction',
      questions: [
        'How can we get customers quickly and accurately updated?',
        'What is the best way to handle customer communications in the field?',
        'How can we improve response times to customer requests?',
        'What strategies increase customer satisfaction and retention?'
      ]
    },
    {
      id: 'scheduling-dispatching',
      title: 'Scheduling and Dispatching',
      questions: [
        'What is the most efficient schedule for the field workforce today?',
        'How can we adjust schedules in real time to address urgent tasks?',
        'Are there any conflicts or overlaps in the current job assignments?',
        'How can we minimize downtime between scheduled tasks?',
        'What are we using to automate scheduling based on technician availability and skills?',
        'How can we ensure technicians arrive on site with the necessary tools and parts?'
      ]
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics and Insights',
      questions: [
        'What data-driven insights can improve operational decisions?',
        'How can we leverage analytics to predict equipment failures?',
        'What trends should we monitor for business optimization?',
        'How can we use historical data to improve future planning?'
      ]
    },
    {
      id: 'reporting-data',
      title: 'Reporting and Data Management',
      questions: [
        'How can we generate real-time reports on field activities?',
        'What is the best way to centralize operational data?',
        'How can we ensure data accuracy across all systems?',
        'What reporting capabilities help with decision-making?'
      ]
    },
    {
      id: 'integration-scalability',
      title: 'Integration and Scalability',
      questions: [
        'How can Orriun Atlas integrate with our existing systems?',
        'What APIs and integrations are available?',
        'How does the platform scale as our business grows?',
        'Can we customize the system to meet our specific needs?'
      ]
    },
    {
      id: 'real-time-monitoring',
      title: 'Real-Time Monitoring and Alerts',
      questions: [
        'How can we monitor field operations in real-time?',
        'What alert systems help prevent operational issues?',
        'How can we track equipment location and status?',
        'What notifications are available for critical events?'
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <div className="faq-page">
      <PageBanner title="Orriun Atlas Can Answer" breadcrumb="FAQs" />

      <section className="faq-intro">
        <div className="container">
          <h2 className="scroll-animate" data-animate="fade-up">Exploring the questions that impact your oilfield operations</h2>
          <p className="faq-description scroll-animate" data-animate="fade-up" data-delay="100">
            Discover how Orriun Atlas transforms complex challenges into actionable insights,
            empowering you to address the key questions of modern operations.
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-column">
              {faqCategories.slice(0, 6).map((category, index) => (
                <div key={category.id} className="faq-category scroll-animate" data-animate="fade-up" data-delay={index * 100}>
                  <button
                    className={`category-header ${openCategories[category.id] ? 'active' : ''}`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <span className="category-title">{category.title}</span>
                    <i
                      className={`fas fa-chevron-right chevron-icon ${openCategories[category.id] ? 'rotated' : ''}`}
                      style={{ fontSize: '20px' }}
                    ></i>
                  </button>
                  {openCategories[category.id] && (
                    <div className="category-questions">
                      <ul>
                        {category.questions.map((question, index) => (
                          <li key={index}>{question}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="faq-column">
              {faqCategories.slice(6).map((category, index) => (
                <div key={category.id} className="faq-category scroll-animate" data-animate="fade-up" data-delay={index * 100}>
                  <button
                    className={`category-header ${openCategories[category.id] ? 'active' : ''}`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <span className="category-title">{category.title}</span>
                    <i
                      className={`fas fa-chevron-right chevron-icon ${openCategories[category.id] ? 'rotated' : ''}`}
                      style={{ fontSize: '20px' }}
                    ></i>
                  </button>
                  {openCategories[category.id] && (
                    <div className="category-questions">
                      <ul>
                        {category.questions.map((question, index) => (
                          <li key={index}>{question}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container">
          <div className="cta-content scroll-animate" data-animate="fade-up">
            <p className="section-label">— Don't see your question?</p>
            <h2>Send us your question</h2>
            <p className="cta-description">
              Orriun Atlas helps you uncover the critical questions behind efficiency, safety,
              and customer satisfaction to fuel your success.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQ;

