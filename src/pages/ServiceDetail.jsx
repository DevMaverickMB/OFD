import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';
import { cloudinaryVideos } from '../config/cloudinaryVideos';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <h1>Service Not Found</h1>
          <Link to="/solutions" className="btn-style1">View All Solutions</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section with Video */}
      <section className="service-hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          onEnded={(e) => { e.target.currentTime = 0; e.target.play(); }}
        >
          <source src={cloudinaryVideos.heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">OILFIELD OPERATIONS MANAGEMENT SYSTEM</p>
            <h1>{service.title}</h1>
            <h2>{service.heroTitle}</h2>
            <Link to="/solutions" className="btn-style1 hero-btn">
              Discover Our Services +
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="service-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Enhance Efficiency and Maximize Productivity</h2>
            <p>{service.content.intro}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2 className="section-title">Features of Orriun Atlas's {service.title}</h2>
          <div className="features-grid">
            {service.content.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-check-circle feature-check-icon"></i>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  {feature.description && <p>{feature.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="service-problems-section">
        <div className="container">
          <h2 className="section-title">
            Problems Orriun Atlas's {service.title} Solves
          </h2>
          <div className="problems-grid">
            {service.content.problems.map((problem, index) => (
              <div key={index} className="problem-card">
                <div className="problem-icon">⚠️</div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits-section">
        <div className="container">
          <h2 className="section-title">
            Why Choose Orriun Atlas for {service.title}?
          </h2>
          <div className="benefits-grid">
            {service.content.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-check-circle benefit-check-icon"></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <h2>Ready to Transform Your Operations?</h2>
          <p>
            Get started with our {service.title} solution and experience the difference
            that modern technology can make in your oilfield operations.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-style1">Get Started</Link>
            <Link to="/solutions" className="btn-style2">View All Solutions</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
