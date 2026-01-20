import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import './CaseStudies.css';

// Import case study images
import caseStudy1 from '../assets/case-studies/case_study_1_1768069429940.png';
import caseStudy2 from '../assets/case-studies/case_study_2_1768069445685.png';
import caseStudy3 from '../assets/case-studies/case_study_3_1768069462958.png';
import caseStudy4 from '../assets/case-studies/case_study_4_1768070505878.png';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: 'fas fa-receipt',
      title: 'Optimizing Equipment Rental Management',
      description: 'A mid-sized oil and gas contracting company modernized operations with Orriun Atlas.',
      image: caseStudy1,
      path: '/case-studies/equipment-rental-management'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Ensuring Pipeline Integrity In Midstream',
      description: 'A large midstream operator centralized operations for proactive integrity management.',
      image: caseStudy2,
      path: '/case-studies/pipeline-integrity'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Transforming Field Service Management',
      description: 'An established field service company modernized with digital transformation.',
      image: caseStudy3,
      path: '/case-studies/field-service-management'
    },
    {
      icon: 'fas fa-calendar-check',
      title: 'Smart Scheduling & Dispatching',
      description: 'A growing oilfield services provider optimized scheduling workflows.',
      image: caseStudy4,
      path: '/case-studies/smart-scheduling'
    },
  ];

  return (
    <div className="case-studies-page">
      <PageBanner
        title="Case Studies"
        breadcrumbs={[
          { label: 'Resources', path: '/resources' },
          { label: 'Case Studies' }
        ]}
      />

      <section className="case-studies-section-page">
        <div className="container">
          <h2 className="section-title scroll-animate" data-animate="fade-up">Our Success Stories</h2>
          <p className="section-subtitle scroll-animate" data-animate="fade-up" data-delay="100">
            Discover how Orriun Atlas has transformed operations for leading oil and gas companies worldwide.
          </p>
          <div className="case-studies-grid-page">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-study-card-page scroll-animate"
                data-animate="flip-in-x"
                data-delay={index * 100}
                style={{
                  backgroundImage: `url(${study.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="case-study-icon-box">
                  <i className={study.icon}></i>
                </div>
                <Link to={study.path} className="case-study-title" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {study.title}
                </Link>
                <p className="case-study-description">{study.description}</p>
                <Link to={study.path} className="read-more">
                  <i className="fas fa-arrow-right"></i> Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudies;
