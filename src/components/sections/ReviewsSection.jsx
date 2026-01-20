import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * ReviewsSection - Testimonial carousel with auto-rotation
 * Used on: Home page
 */
const ReviewsSection = ({
  reviews = [],
  autoRotate = true,
  rotationInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || reviews.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [autoRotate, rotationInterval, reviews.length]);

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  if (reviews.length === 0) return null;

  const currentReview = reviews[currentIndex];

  return (
    <div className={`reviews-section py-16 ${className}`}>
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Quote Icon */}
        <div className="text-6xl text-[#ff6b35] mb-6 scroll-animate" data-animate="fade-up">
          "
        </div>

        {/* Review Text */}
        <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-8 scroll-animate" data-animate="fade-up" data-delay="100">
          {currentReview.text}
        </blockquote>

        {/* Reviewer Info */}
        <div className="scroll-animate" data-animate="fade-up" data-delay="200">
          <p className="font-semibold text-lg text-gray-900">
            {currentReview.name}
          </p>
          <p className="text-gray-600">
            {currentReview.role}
            {currentReview.company && `, ${currentReview.company}`}
          </p>
        </div>

        {/* Dots Navigation */}
        {reviews.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#ff6b35] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string
    })
  ).isRequired,
  autoRotate: PropTypes.bool,
  rotationInterval: PropTypes.number,
  className: PropTypes.string
};

export default ReviewsSection;
