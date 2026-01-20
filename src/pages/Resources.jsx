import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import caseStudiesImg from '../assets/resources/case_studies_card_v2_1768064777096.png';
import blogsImg from '../assets/resources/blogs_card_v2_1768064804778.png';
import './Resources.css';

const Resources = () => {
  const items = [
    {
      title: 'Case Studies',
      path: '/case-studies',
      image: caseStudiesImg
    },
    {
      title: 'Blog',
      path: '/blog',
      image: blogsImg
    },
  ];

  return (
    <div className="resources-page">
      <PageBanner title="Resources" />

      <section className="resources-section">
        <div className="container">
          <div className="resources-grid">
            {items.map((item, index) => (
              <Link key={item.path} to={item.path} className="resources-card scroll-animate" data-animate="fade-up" data-delay={index * 100}>
                <div
                  className="resources-card-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="resources-card-overlay"></div>
                  <h3 className="resources-card-title">{item.title}</h3>
                </div>
                <div className="resources-card-footer">
                  <span className="resources-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;
