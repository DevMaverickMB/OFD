import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import './About.css';
import '../pages/Home.css'; // Import Home CSS for reused sections
import operationsBannerBg from '../assets/operations_banner_bg.png';

// Import images (using placeholders/existing assets where necessary)
import drillingImg from '../assets/industries/drilling-contractors.png';
import rentalsImg from '../assets/industries/equipment-rentals.png';
import midstreamImg from '../assets/industries/mid-upstream.png';


const About = () => {
  // FAQ Logic
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // Default first open

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Where can Orriun Atlas solutions be deployed?",
      answer: "We offer versatile deployment options. Whether you need on-premise solutions for enhanced security or cloud-based deployment for flexibility and scalability, Orriun Atlas has you covered."
    },
    {
      question: "How secure is Orriun Atlas?",
      answer: "Security is our top priority. We employ enterprise-grade encryption and comply with all major industry standards to ensure your data is safe and protected at all times."
    },
    {
      question: "How do you verify the information?",
      answer: "Our system uses multi-step verification processes combining automated checks with manual oversight to ensure the highest level of data accuracy and integrity."
    }
  ];

  // Client Reviews Logic (Reused from Home.jsx)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      text: "Before adopting Orriun Atlas, our operations were fragmented and slow. Now everything is centralized, transparent, and action-driven. Accountability is clear, and tasks actually move forward. It has completely transformed how our teams collaborate.",
      name: "Daniel Whitmore",
      role: "Operations Manager"
    },
    {
      text: "Orriun Atlas has streamlined our workflows in ways we didn’t think were possible. Real-time visibility and data accuracy have helped us cut delays and make faster decisions across departments.",
      name: "Emily Carter",
      role: "Supply Chain Lead"
    },
    {
      text: "From scheduling to reporting, Orriun Atlas has removed friction from our daily operations. Our teams spend less time coordinating and more time executing. The impact on productivity has been immediate.",
      name: "Jason Miller",
      role: "Regional Operations Head"
    },
    {
      text: "What stood out most was how quickly our field teams adapted to Orriun Atlas. The platform is intuitive, powerful, and backed by an excellent support team. It’s now a critical part of our operations stack.",
      name: "Lauren Patel",
      role: "Field Operations Manager"
    },
    {
      text: "Orriun Atlas has given us the operational clarity we were missing. Planning, execution, and reporting are now seamlessly connected, helping us reduce errors and operate with confidence.",
      name: "Robert Nguyen",
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

      {/* Intro Section - Modern Construction */}
      <section className="about-intro-section">
        <div className="container">
          <div className="intro-text-col">
            <span className="intro-label">- ABOUT US</span>
            <h2>The dynamics progress in <span className="about-underlined-text">Oil & Gas sector</span></h2>
            <p className="intro-description">
              From investigation and creation to transportation and refining, we offer a large number of items and administrations that meet the extraordinary requirements of the oil and gas industry.
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

          <div className="intro-images-col">
            <div className="intro-img-wrapper tall">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Oil and Gas Engineer"
              />
            </div>
            <div className="intro-img-wrapper short floating-animate">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Industrial Work"
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
      <section className="stats-banner-section" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')` }}>
        <div className="stats-banner-overlay"></div>
        <div className="container" style={{ justifyContent: 'flex-start', alignItems: 'flex-end', height: '400px', paddingBottom: '0' }}>
          {/* Stats Boxes positioned at the bottom left */}
          <div className="stat-item">
            <span className="stat-number">426</span>
            <span className="stat-label">Equipment Solutions</span>
          </div>
          <div className="stat-item dark">
            <span className="stat-number">4K</span>
            <span className="stat-label">Project Complete</span>
          </div>
        </div>
      </section>

      {/* FAQ / Solutions Section */}
      <section className="about-faq-section">
        <div className="container">
          <div className="faq-left-col">
            <span className="faq-label">- FAQ</span>
            <h2>Solutions for residentials & industries!</h2>
            <p>
              Construction shelter has you covered with services that are tough and true. We build new eras for new businesses.
            </p>
            <Link to="/services" className="learn-more-btn">
              LEARN MORE
            </Link>
          </div>
          <div className="faq-right-col">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-accordion-item">
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
            <div className="operations-left">
              <div className="eyebrow-container-left">
                <span className="eyebrow-line"></span>
                <p className="eyebrow-text">Digital Transformation in Oil & Gas</p>
              </div>
              <h2 className="operations-main-title">An Inevitable Shift in Operations</h2>
              <p className="operations-description">
                The global oil and gas market is growing steadily, while digital transformation in the industry is expanding at a much faster pace. This shift is driving greater efficiency, cost reduction, and sustainability. As digital technologies increasingly shape operations, adopting digital transformation has become essential for oil and gas companies to remain competitive and future-ready.
              </p>
            </div>
            <div className="operations-right">
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
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')` }}
        >
          <div className="reviews-overlay"></div>
        </div>
        <div className="reviews-content-box">
          <div className="reviews-main-content">
            <div className="quote-icon-large">"</div>
            <div className="reviews-heading">What our happy client say about us</div>

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
    </div>
  );
};

export default About;

