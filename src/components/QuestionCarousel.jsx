import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuestionCarousel.css';

const QuestionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  const faqCategories = [
    {
      category: 'Operational Efficiency',
      question: 'How can we reduce downtime and improve equipment utilization?'
    },
    {
      category: 'Maintenance and Asset Management',
      question: 'How can we implement predictive maintenance strategies?'
    },
    {
      category: 'Compliance and Safety',
      question: 'How can we ensure regulatory compliance across all operations?'
    },
    {
      category: 'Workforce and Resource Management',
      question: 'How can we optimize crew scheduling and allocation?'
    },
    {
      category: 'Inventory and Supply Chain',
      question: 'How can we optimize inventory levels across multiple locations?'
    },
    {
      category: 'Financial Management',
      question: 'How can we automate and streamline invoicing processes?'
    },
    {
      category: 'Customer Service and Satisfaction',
      question: 'How can we get customers quickly and accurately updated?'
    },
    {
      category: 'Scheduling and Dispatching',
      question: 'How can we minimize downtime between scheduled tasks?'
    },
    {
      category: 'Predictive Analytics and Insights',
      question: 'What data-driven insights can improve operational decisions?'
    },
    {
      category: 'Reporting and Data Management',
      question: 'How can we generate real-time reports on field activities?'
    },
    {
      category: 'Integration and Scalability',
      question: 'How can Orriun Atlas integrate with our existing systems?'
    },
    {
      category: 'Real-Time Monitoring and Alerts',
      question: 'How can we monitor field operations in real-time?'
    }
  ];

  const cardsPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) {
      setDirection('next');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % faqCategories.length);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setDirection('prev');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + faqCategories.length) % faqCategories.length);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % faqCategories.length;
      cards.push({ ...faqCategories[index], id: index });
    }
    return cards;
  };

  return (
    <section className="question-carousel-section">
      <div className="container">
        <h2 className="section-title">Orriun Atlas <span className="underlined-text">can answer</span></h2>
        <p className="section-subtitle">
          Our AI-powered platform is designed to address your most pressing operational questions and challenges.
        </p>

        <div className="carousel-container">
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={handlePrev}
            aria-label="Previous questions"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-left" style={{ fontSize: '24px' }}></i>
          </button>

          <div className="carousel-wrapper">
            <div
              className={`carousel-track ${isTransitioning ? `sliding-${direction}` : ''}`}
            >
              {getVisibleCards().map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="question-card"
                >
                  <p className="question-category">For {card.category}</p>
                  <h3 className="question-text">{card.question}</h3>
                  <Link to="/faq" className="arrow-circle" aria-label="View FAQ">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-btn carousel-btn-next"
            onClick={handleNext}
            aria-label="Next questions"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-right" style={{ fontSize: '24px' }}></i>
          </button>
        </div>

        <div className="carousel-indicators">
          {faqCategories.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                if (!isTransitioning && index !== currentIndex) {
                  setDirection(index > currentIndex ? 'next' : 'prev');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 600);
                }
              }}
              aria-label={`Go to question ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionCarousel;
