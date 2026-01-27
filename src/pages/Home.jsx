import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuestionCarousel from '../components/QuestionCarousel';
import { cloudinaryVideos } from '../config/cloudinaryVideos';
import drillingImg from '../assets/industries/drilling-contractors.png';
import rentalsImg from '../assets/industries/equipment-rentals.png';
import midstreamImg from '../assets/industries/mid-upstream.png';
import servicesImg from '../assets/industries/oilfield-services.png';
import wellTestingImg from '../assets/industries/well-testing.png';
import wirelineImg from '../assets/industries/wireline-coiltubing.png';
import workersCutout from '../assets/workers_cutout.png';
import workers from '../assets/workers.png';
import solAssetMgmt from '../assets/solutions/sol_asset_mgmt_1767969099610.png';
import solTicketing from '../assets/solutions/sol_ticketing_1767969119802.png';
import solScheduling from '../assets/solutions/sol_scheduling_1767969136179.png';
import solInventory from '../assets/solutions/sol_inventory_1767969154407.png';
import solIoT from '../assets/solutions/sol_iot_v2_1767969366429.png';
import solSafety from '../assets/solutions/sol_safety_1767969188568.png';
import solReporting from '../assets/solutions/sol_reporting_v2_1767969401744.png';
import solMobileApp from '../assets/solutions/sol_mobile_app_1767969229107.png';
import operationsBannerBg from '../assets/operations_banner_bg.png';
import reviewsBgInterior from '../assets/about/reviews_bg_interior.png';
import IntegrationsCarousel from '../components/IntegrationsCarousel';
import '../components/ReviewsSection.css';
import './Home.css';

const Home = () => {
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
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

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

  const whyOrriunAtlas = [
    {
      icon: 'fas fa-chart-line',
      title: 'Scalable Growth',
      description: 'Our platform grows with your business, from small teams to enterprise-level operations'
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and systems without disrupting current workflows'
    },
    {
      icon: 'fas fa-cog',
      title: 'Flexible SaaS Model',
      description: 'Pay for what you need with our adaptable subscription plans'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'No Training Required',
      description: 'Intuitive interface designed for immediate productivity without extensive training'
    }
  ];

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

  const caseStudies = [
    {
      number: '01',
      title: 'Optimizing Equipment Rental Management',
      description: 'A mid-sized oil and gas contracting company modernized operations and achieved 30% revenue growth with Orriun Atlas.',
      path: '/case-studies/equipment-rental-management'
    },
    {
      number: '02',
      title: 'Ensuring Pipeline Integrity In Midstream',
      description: 'A large midstream operator achieved 50% reduction in pipeline incidents through IoT monitoring and proactive maintenance.',
      path: '/case-studies/pipeline-integrity'
    },
    {
      number: '03',
      title: 'Transforming Field Service Management',
      description: 'An established field service company reduced paperwork by 80% and accelerated billing cycles through digital transformation.',
      path: '/case-studies/field-service-management'
    },
    {
      number: '04',
      title: 'Smart Scheduling & Dispatching',
      description: 'A growing oilfield services provider achieved 40% increase in on-time job completion with intelligent scheduling.',
      path: '/case-studies/smart-scheduling'
    }
  ];

  const partnerLogos = [
    { name: 'MS Teams', logo: 'fab fa-microsoft' },
    { name: 'Zendesk', logo: 'fas fa-comments' },
    { name: 'ATA', logo: 'fas fa-toolbox' },
    { name: 'Schlumberger', logo: 'fas fa-oil-can' },
    { name: 'YouTube', logo: 'fab fa-youtube' }
  ];

  const clientLogos = [
    'HYM', 'HULK', 'INNOVEX', 'KEYSPO', 'KINDER MORGAN'
  ];

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
          typeSpeed = 2500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 300; // Pause before typing next word
        }

        typeTimeout = setTimeout(type, typeSpeed);
      }
    };

    type();

    return () => clearTimeout(typeTimeout);
  }, []);

  // Hero text animation
  const [heroTextIndex, setHeroTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % 2);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
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

            <h1>
              <div className="hero-text-transition scroll-animate" data-animate="slide-up">
                <span className={`hero-text-slide ${heroTextIndex === 0 ? 'active' : 'inactive'}`}>
                  The operating system powering modern
                </span>
                <span className={`hero-text-slide ${heroTextIndex === 1 ? 'active' : 'inactive'}`}>
                  Run smarter, faster and safer
                </span>
              </div>
              <span className="hero-tomorrow scroll-animate" data-animate="slide-up" data-delay="200">Oil & Gas Operations</span>
            </h1>

            <div className="hero-subheadline-transition scroll-animate" data-animate="slide-up" data-delay="400">
              <p className={`hero-subheadline-slide ${heroTextIndex === 0 ? 'active' : 'inactive'}`}>
                Manage field service, equipment rentals, workforce, and assets <br /> all from one intelligent platform.
              </p>
              <p className={`hero-subheadline-slide ${heroTextIndex === 1 ? 'active' : 'inactive'}`}>
                A unified field operations and equipment rental platform built for <br /> real-world oilfield challenges.
              </p>
            </div>

            <Link to="/contact" className="btn-style1 hero-btn scroll-animate" data-animate="slide-up" data-delay="600">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Orriun Atlas Can Answer Section */}
      <QuestionCarousel />

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <div className="eyebrow-container-center scroll-animate" data-animate="clip-right">
            <span className="eyebrow-line"></span>
            <p className="eyebrow-text">Driving operational simplicity across industries</p>
          </div>
          <h2 className="section-title scroll-animate" data-animate="blur-fade" data-delay="100">Powerful digital solutions for<br />diverse <span className="underlined-text">oilfield needs</span></h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <Link
                to={industry.path}
                key={index}
                className="industry-card-link scroll-animate"
                data-animate="skew-up"
                data-delay={100 + (index * 100)}
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

      {/* Why Orriun Atlas Section */}
      <section className="why-orriun-atlas-section">
        <div className="container">
          <div className="why-content-wrapper">
            <div className="why-image-col scroll-animate" data-animate="fade-left">
              <img src={workersCutout} alt="Industry Experts" className="workers-cutout" />
              <img src={workers} alt="Workers Background" className="workers-background" />
            </div>
            <div className="why-text-col">
              <div className="eyebrow-container scroll-animate" data-animate="fade-up">
                <span className="eyebrow-line"></span>
                <p className="eyebrow-text">Specially designed by industry experts</p>
              </div>
              <h2 className="section-title left-align scroll-animate" data-animate="fade-up" data-delay="100">Why Orriun Atlas?</h2>
              <p className="section-description scroll-animate" data-animate="fade-up" data-delay="200">
                At Orriun Atlas, we understand the unique challenges that Oil & Gas companies face. Designed by industry veterans, our platform empowers your business with a plug-and-play solution that is fully customizable to your needs.
              </p>
              <div className="features-grid-small">
                {whyOrriunAtlas.map((feature, index) => (
                  <div key={index} className="feature-card-small scroll-animate" data-animate="fade-up" data-delay={300 + (index * 100)}>
                    <div className="feature-icon-circle"><i className={feature.icon}></i></div>
                    <div className="feature-text">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Values Section */}
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

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <div className="eyebrow-container-center scroll-animate" data-animate="clip-right">
            <span className="eyebrow-line"></span>
            <p className="eyebrow-text">From ground operations to executive decisions</p>
          </div>
          <h2 className="section-title scroll-animate" data-animate="blur-fade">Discover the range of <br />solutions <span className="underlined-text">we offer</span></h2>
          <p className="section-subtitle scroll-animate" data-animate="slide-up" data-delay="100">
            Comprehensive oilfield management tools designed to streamline every aspect of your operations.
          </p>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.path}
                className="solution-card scroll-animate"
                data-animate="scale-up-reveal"
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

      {/* Case Studies Section */}
      <section className="case-studies-section-home">
        <div className="container">
          <div className="eyebrow-container-center scroll-animate" data-animate="fade-up">
            <span className="eyebrow-line"></span>
            <p className="eyebrow-text">Find out more about the Orriun Atlas experience.</p>
          </div>
          <h2 className="section-title">Case Studies</h2>
          <div className="case-studies-grid-home">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-study-card-home scroll-animate"
                data-animate="fade-up"
                data-delay={index * 50}
              >
                <div className="case-study-number">{study.number}</div>
                <h3 className="case-study-title-home">
                  <Link to={study.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {study.title}
                  </Link>
                </h3>
                <p className="case-study-desc-home">{study.description}</p>
                <Link to={study.path} className="case-study-link-home">
                  READ MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Shift Banner */}
      <section className="operations-banner" style={{ backgroundImage: `url(${operationsBannerBg})` }}>
        <div className="operations-banner-overlay"></div>
        <div className="container">
          <div className="operations-banner-content">
            <div className="operations-left scroll-animate" data-animate="slide-left">
              <div className="eyebrow-container-left">
                <span className="eyebrow-line"></span>
                <p className="eyebrow-text">Digital Transformation in Oil & Gas</p>
              </div>
              <h2 className="operations-main-title">An Inevitable Shift in <span className="underlined-text">Operations</span></h2>
              <p className="operations-description">
                The global oil and gas market is growing steadily, while digital transformation in the industry is expanding at a much faster pace. This shift is driving greater efficiency, cost reduction, and sustainability. As digital technologies increasingly shape operations, adopting digital transformation has become essential for oil and gas companies to remain competitive and future-ready.
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

      {/* Integrations Section */}
      <section className="integrations-preview-section">
        <div className="container">
          <div className="eyebrow-container-center scroll-animate" data-animate="fade-up">
            <span className="eyebrow-line"></span>
            <p className="eyebrow-text">Seamless integrations for smarter workflows.</p>
          </div>
          <h2 className="section-title">Integrations</h2>
          <p className="section-subtitle">Powerful integrations built to supercharge your workflows. Orriun Atlas connects with your favorite apps.</p>
          <IntegrationsCarousel />
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews-section-container">
        <div
          className="reviews-bg-image"
          style={{ backgroundImage: `url(${reviewsBgInterior})` }}
        >
          <div className="reviews-overlay"></div>
        </div>
        <div className="reviews-content-box scroll-animate" data-animate="slide-up">
          <div className="reviews-main-content">
            <div className="quote-icon-large">
              "
            </div>
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

    </div>
  );
};

export default Home;

