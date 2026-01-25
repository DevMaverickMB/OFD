import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import BookDemoModal from '../components/BookDemoModal';
import './About.css';
import '../pages/Home.css'; // Import Home CSS for reused sections
import operationsBannerBg from '../assets/operations_banner_bg.png';

// Import images (using placeholders/existing assets where necessary)
import drillingImg from '../assets/industries/drilling-contractors.png';
import rentalsImg from '../assets/industries/equipment-rentals.png';
import midstreamImg from '../assets/industries/mid-upstream.png';
import { cloudinaryVideos } from '../config/cloudinaryVideos';
import introEngineerImg from '../assets/about/intro_engineer_inspecting.png';
import introTeamImg from '../assets/about/intro_team_consulting.png';
import oilbig from '../assets/about/oil_gas_stats_banner_big.png';
import reviewsBgInterior from '../assets/about/reviews_bg_interior.png';

const About = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  // FAQ Logic
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // Default first open

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Does Orriun Atlas work in offline environments?",
      answer: "Absolutely. We adhere to a \"Mobile First, Offline First\" architecture. Field techs can access work orders, manuals, and compliance forms without internet, syncing automatically once connectivity is restored."
    },
    {
      question: "How do you ensure data security?",
      answer: "We utilize enterprise-grade encryption and cloud security protocols compliant with global energy standards, ensuring your sensitive operational data remains protected at all times."
    },
    {
      question: "Can it integrate with our existing ERP?",
      answer: "Yes, Orriun Atlas is designed to integrate seamlessly with your existing ERP systems, allowing for a smooth transition and minimal disruption to your workflow."
    }
  ];

  // Client Reviews Logic (Reused from Home.jsx)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      text: "Orriun Atlas didn’t just digitize our paperwork; it fundamentally changed how we forecast revenue. By connecting our field data directly to the boardroom, we slashed our Days Sales Outstanding (DSO) by 35% in the first quarter alone. It’s the single source of truth we’ve been missing.",
      name: "James Caldwell",
      role: "VP of Operations"
    },
    {
      text: "The offline capabilities are the real deal. My guys are out in the Permian Basin with zero signal, and the app never crashes. They log inspections, tag assets, and sync up instantly when they hit the truck wifi. We’ve cut admin time by 10 hours a week per technician.",
      name: "Michael \"Mac\" MacAllister",
      role: "Director of Field Services"
    },
    {
      text: "In our line of work, compliance isn't just a checkbox; it's life or death. Orriun Atlas forces mandatory safety steps before a work order can even be opened. It has completely automated our HSE audit trails and given me total peace of mind during inspections.",
      name: "Jason Miller",
      role: "Senior HSE Manager"
    },
    {
      text: "We used to run on reactive maintenance, fixing things after they broke. Orriun Atlas gave us the asset visibility to switch to predictive maintenance. We’re catching equipment failures weeks before they happen, and our uptime has never been higher.",
      name: "David Thorne",
      role: "Asset Integrity Director"
    },
    {
      text: "I was dreading the integration with our legacy ERP, but the Orriun team made it seamless. The API is robust, and the data flows perfectly. It’s rare to find software this powerful that is actually intuitive enough for our roughnecks to use without complaining.",
      name: "Robert Vance",
      role: "Project Controls Director"
    }
  ];

  // Auto-play reviews carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Typewriter animation for operations banner
  useEffect(() => {
    const words = ['industry', 'operations', 'efficiency', 'future', 'growth'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout;

    const type = () => {
      const currentWord = words[wordIndex];
      const rotatingWordElement = document.querySelector('.rotating-word');

      if (rotatingWordElement) {
        if (isDeleting) {
          rotatingWordElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        } else {
          rotatingWordElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }

        let typeSpeed = 80;

        if (isDeleting) {
          typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 2500;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 300;
        }

        typeTimeout = setTimeout(type, typeSpeed);
      }
    };

    type();

    return () => clearTimeout(typeTimeout);
  }, []);

  const visionValues = [
    {
      icon: 'fas fa-eye',
      title: 'OUR VISION',
      description: 'To be the leading field service platform for oil and gas operators, driving digital transformation across the energy sector.'
    },
    {
      icon: 'fas fa-heart',
      title: 'OUR VALUES',
      description: 'We value innovation, reliability, transparency, and a deep commitment to customer success in everything we do.'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'OUR MISSION',
      description: 'To simplify operations, maximize efficiency, and enhance safety through advanced technology and intuitive tools.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'OUR GOALS',
      description: 'Streamline workflows, drive scalability, ensure safety, deliver insights, and support rapid adoption.'
    }
  ];

  return (
    <div className="about-page">
      <PageBanner title="About Us" />

      {/* Intro Section - Origin Story */}
      <section className="about-intro-section">
        <div className="container">
          <div className="intro-text-col scroll-animate" data-animate="slide-right">
            <span className="intro-label">- OUR ORIGIN</span>
            <h2>Mastering the dynamics of <span className="about-underlined-text">Oil & Gas sector</span></h2>
            <p className="intro-description">
              Generic field service tools fail in the harsh reality of the energy sector. Orriun Atlas was forged to close the gap between remote field operations and corporate decision-making. <br />We replace fragmented legacy systems and paper trails with a unified, intelligent platform designed specifically for the complexities of upstream, midstream, and downstream operations.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
              <Link to="/contact" className="intro-btn">
                Schedule Demo
              </Link>
              <div className="intro-phone">
                <i className="fas fa-envelope"></i> oil.industry12@example.com
              </div>
            </div>
          </div>

          <div className="intro-images-col scroll-animate" data-animate="slide-left">
            <div className="intro-img-wrapper tall">
              <img
                src={oilbig}
                alt="Field Service Engineer Validating Data"
              />
            </div>
            <div className="intro-img-wrapper short floating-animate">
              <img
                src={introTeamImg}
                alt="Field Team Consulting Onsite"
              />
            </div>

            {/* <div className="started-in-badge floating-animate">
              <span className="started-text">STARTED IN</span>
              <span className="year-text">1995</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="stats-banner-section">
        {/* Background Video */}
        <video
          className="stats-video-bg"
          autoPlay
          loop
          muted
          playsInline
          onEnded={(e) => { e.target.currentTime = 0; e.target.play(); }}
        >
          <source src={cloudinaryVideos.bannerVideo} type="video/mp4" />
        </video>
        <div className="stats-banner-overlay"></div>
        <div className="container">
          {/* Stats Boxes positioned at the bottom left */}
          <div className="stat-item scroll-animate" data-animate="slide-up" data-delay="0">
            <span className="stat-number">20+</span>
            <span className="stat-label">Years of Industry Expertise</span>
          </div>
          <div className="stat-item dark scroll-animate" data-animate="slide-up" data-delay="100">
            <span className="stat-number">420+</span>
            <span className="stat-label">Enterprise Assets Managed</span>
          </div>
          <div className="stat-item scroll-animate" data-animate="slide-up" data-delay="200">
            <span className="stat-number">100%</span>
            <span className="stat-label">Audit Trail Visibility</span>
          </div>
          <div className="stat-item dark scroll-animate" data-animate="slide-up" data-delay="300">
            <span className="stat-number">3</span>
            <span className="stat-label">Continents Deployed</span>
          </div>
        </div>
      </section>

      {/* FAQ / Solutions Section */}
      <section className="about-faq-section">
        <div className="container">
          <div className="faq-left-col scroll-animate" data-animate="slide-right">
            <span className="faq-label">- WHY ORRIUN ATLAS?</span>
            <h2>Solves complex field service challenges simply.</h2>
            <p>
              Field technicians deal with low connectivity, hazardous environments, and complex machinery. Orriun Atlas simplifies their workflow, ensuring that critical data is captured accurately, whether they are on an offshore rig or in a corporate office.
            </p>
            <Link to="/services" className="learn-more-btn">
              Explore Features
            </Link>
          </div>
          <div className="faq-right-col">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-accordion-item scroll-animate"
                data-animate="slide-up"
                data-delay={index * 100}
              >
                <button
                  className={`faq-accordion-header ${openFaqIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>
                    <span className="faq-number">{index + 1}.</span> {faq.question}
                  </span>
                  <i className={`fas ${openFaqIndex === index ? 'fa-minus' : 'fa-plus'} plus-icon`}></i>
                </button>
                <div className={`faq-accordion-body ${openFaqIndex === index ? 'open' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Operations Shift Banner (Reused) */}
      <section className="operations-banner" style={{ backgroundImage: `url(${operationsBannerBg})` }}>
        <div className="operations-banner-overlay"></div>
        <div className="container">
          <div className="operations-banner-content">
            <div className="operations-left scroll-animate" data-animate="slide-left">
              <div className="eyebrow-container-left">
                <span className="eyebrow-line"></span>
                <p className="eyebrow-text">Digital Transformation in Oil & Gas</p>
              </div>
              <h2 className="operations-main-title">The Future of Energy <span className="underlined-text">Operations is Digital</span></h2>
              <p className="operations-description">
                The industry is shifting from reactive repairs to predictive maintenance. Digital transformation is no longer optional, it is the key to survival. Orriun Atlas empowers your workforce with the real-time insights needed to reduce downtime, ensure safety, and drive profitability in a volatile market.
              </p>
            </div>
            <div className="operations-right scroll-animate" data-animate="slide-right" data-delay="200">
              <div className="operations-right-top">
                <div className="operations-heading">
                  Let's discuss your<br />
                  <span className="rotating-word"></span> now
                </div>
              </div>
              <div className="operations-right-bottom">
                <div className="operations-icon-circle">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="operations-contact">
                  <p className="contact-label">Looking for any enquiry?</p>
                  <a href="mailto:info@orriun.com" className="contact-email">info@orriun.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Client Reviews Section (Reused logic and classes) */}
      <section className="reviews-section-container">
        <div
          className="reviews-bg-image"
          style={{ backgroundImage: `url(${reviewsBgInterior})` }}
        >
          <div className="reviews-overlay"></div>
        </div>
        <div className="reviews-content-box scroll-animate" data-animate="slide-up">
          <div className="reviews-main-content">
            <div className="quote-icon-large">"</div>
            <div className="reviews-heading">What our <span className="underlined-text">happy client</span> say about us</div>

            <div className="review-carousel-content">
              <div className="review-text-wrapper" key={currentReviewIndex}>
                <p className="review-text">
                  {reviews[currentReviewIndex].text}
                </p>
                <div className="reviewer-info">
                  <div className="reviewer-name">{reviews[currentReviewIndex].name}</div>
                  <div className="reviewer-role">{reviews[currentReviewIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-footer-bar">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`review-dot ${index === currentReviewIndex ? 'active' : ''}`}
                onClick={() => setCurrentReviewIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Values Section (Reused) */}
      <section className="vision-values-section">
        <div className="vision-icons-row">
          <div className="container">
            <div className="vision-grid">
              {visionValues.map((item, index) => (
                <div
                  key={index}
                  className="vision-card scroll-animate"
                  data-animate="scale-pop"
                  data-delay={index * 150}
                  data-vision-index={index}
                  onMouseEnter={(e) => {
                    document.querySelectorAll(`[data-vision-index="${index}"]`).forEach(el => el.classList.add('hovered'));
                  }}
                  onMouseLeave={(e) => {
                    document.querySelectorAll(`[data-vision-index="${index}"]`).forEach(el => el.classList.remove('hovered'));
                  }}
                >
                  <div className="vision-icon-wrapper">
                    <div className="vision-icon-circle">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="vision-content-banner">
          <div className="container">
            <div className="vision-grid">
              {visionValues.map((item, index) => (
                <div
                  key={index}
                  className="vision-card-content scroll-animate"
                  data-animate="slide-up-fade"
                  data-delay={200 + index * 150}
                  data-vision-index={index}
                  onMouseEnter={(e) => {
                    document.querySelectorAll(`[data-vision-index="${index}"]`).forEach(el => el.classList.add('hovered'));
                  }}
                  onMouseLeave={(e) => {
                    document.querySelectorAll(`[data-vision-index="${index}"]`).forEach(el => el.classList.remove('hovered'));
                  }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta-section">
        <div className="container scroll-animate" data-animate="slide-up">
          <h2>Ready to Modernize Your Operations?</h2>
          <p>Join the industry leaders trusting Orriun Atlas for their digital transformation.</p>
          <div className="cta-buttons">
            <button
              className="cta-btn-primary"
              onClick={() => setIsBookDemoOpen(true)}
              style={{ cursor: 'pointer', fontFamily: 'inherit', fontSize: '16px' }}
            >
              Request a Demo
            </button>
            <Link to="/contact" className="cta-btn-secondary">Contact Sales</Link>
          </div>
        </div>
      </section>

      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </div>
  );
};

export default About;

