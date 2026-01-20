import { Link } from 'react-router-dom';
import pageBannerBg from '../assets/page_banner_bg.png';
import './PageBanner.css';

const PageBanner = ({ title, breadcrumb, breadcrumbs }) => {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${pageBannerBg})` }}>
      <div className="banner-overlay"></div>
      <div className="container">
        <div className="banner-title">{title}</div>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">›</span>
          {breadcrumbs ? (
            <>
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  {crumb.path ? (
                    <>
                      {crumb.onClick ? (
                        <span onClick={crumb.onClick} className="breadcrumb-link" style={{ cursor: 'pointer' }}>{crumb.label}</span>
                      ) : (
                        <Link to={crumb.path}>{crumb.label}</Link>
                      )}

                      {/* Show separator unless it's the last item */}
                      {index < breadcrumbs.length - 1 && <span className="separator">›</span>}
                    </>
                  ) : (
                    <span className="current">{crumb.label}</span>
                  )}
                </span>
              ))}
            </>
          ) : (
            <span className="current">{breadcrumb || title}</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
