import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import AnimationObserver from '../components/AnimationObserver';
import drillingImg from '../assets/industries/drilling-contractors.png';
import rentalsImg from '../assets/industries/equipment-rentals.png';
import midstreamImg from '../assets/industries/mid-upstream.png';
import servicesImg from '../assets/industries/oilfield-services.png';
import wellTestingImg from '../assets/industries/well-testing.png';
import wirelineImg from '../assets/industries/wireline-coiltubing.png';
import '../pages/Home.css';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      image: drillingImg,
      title: 'Drilling Contractors',
      icon: 'fas fa-wrench',
      path: '/industries/drilling-contractors'
    },
    {
      image: rentalsImg,
      title: 'Equipment Rentals',
      icon: 'fas fa-hard-hat',
      path: '/industries/equipment-rentals'
    },
    {
      image: midstreamImg,
      title: 'Mid & Upstream Operations',
      icon: 'fas fa-cogs',
      path: '/industries/mid-upstream-operations'
    },
    {
      image: servicesImg,
      title: 'Oilfield Services',
      icon: 'fas fa-oil-can',
      path: '/industries/oilfield-services'
    },
    {
      image: wellTestingImg,
      title: 'Well Testing and Flowback',
      icon: 'fas fa-chart-line',
      path: '/industries/well-testing-flowback'
    },
    {
      image: wirelineImg,
      title: 'Wireline and Coil Tubing',
      icon: 'fas fa-plug',
      path: '/industries/wireline-coil-tubing'
    }
  ];

  return (
    <div className="industries-page">
      <AnimationObserver />
      <PageBanner title="Industries" />

      {/* Industries Section - Same as Home Page */}
      <section className="industries-section">
        <div className="container">
          <div className="eyebrow-container-center scroll-animate" data-animate="fade-up">
            <span className="eyebrow-line"></span>
            <p className="eyebrow-text">Driving operational simplicity across industries</p>
          </div>
          <h2 className="section-title scroll-animate" data-animate="fade-up">Powerful digital solutions for<br />diverse oilfield needs</h2>
          <p className="section-subtitle scroll-animate" data-animate="fade-up" data-delay="100">
            Orriun Atlas's customizable platform, diverse modules, and seamless integration make it adaptable for various industries, offering streamlined operations, scalability, and real-time insights without the need for extensive training.
          </p>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <Link
                to={industry.path}
                key={index}
                className="industry-card-link scroll-animate"
                data-animate="fade-up"
                data-delay={index * 100}
              >
                <div className="industry-card">
                  <div className="industry-image">
                    <img src={industry.image} alt={industry.title} />
                  </div>
                  <div className="industry-info">
                    <span className="industry-icon"><i className={industry.icon}></i></span>
                    <h3>{industry.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;
