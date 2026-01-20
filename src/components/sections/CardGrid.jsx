import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * CardGrid - Grid of cards with images, icons, titles, and descriptions
 * Used for: Solutions, Industries, Case Studies, Blog posts
 */
const CardGrid = ({
  cards = [],
  columns = 3,
  cardType = 'default', // 'default', 'solution', 'industry', 'case-study', 'blog'
  showIcon = true,
  showImage = true,
  showLink = true,
  className = ''
}) => {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'md:grid-cols-3';

  const renderCard = (card, index) => {
    const cardContent = (
      <div className="h-full bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
        {/* Image */}
        {showImage && card.image && (
          <div className="relative overflow-hidden aspect-video">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {card.tag && (
              <span className="absolute top-4 left-4 bg-[#ff6b35] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {card.tag}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Icon */}
          {showIcon && card.icon && (
            <div className="text-4xl mb-4">
              {typeof card.icon === 'string' ? (
                <i className={card.icon} style={{ color: '#ff6b35' }}></i>
              ) : (
                card.icon
              )}
            </div>
          )}

          {/* Title */}
          {card.title && (
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff6b35] transition-colors">
              {card.title}
            </h3>
          )}

          {/* Description */}
          {card.description && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {card.description}
            </p>
          )}

          {/* Meta info (for blog cards) */}
          {card.date && (
            <p className="text-sm text-gray-500 mb-2">
              {card.date}
            </p>
          )}

          {/* Link */}
          {showLink && card.link && (
            <div className="text-[#ff6b35] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              {card.linkText || 'Learn More'}
              <i className="fas fa-arrow-right"></i>
            </div>
          )}
        </div>
      </div>
    );

    const wrapperClasses = `scroll-animate`;

    if (showLink && card.link) {
      return (
        <Link
          to={card.link}
          key={card.id || index}
          className={wrapperClasses}
          data-animate="fade-up"
          data-delay={index * 100}
        >
          {cardContent}
        </Link>
      );
    }

    return (
      <div
        key={card.id || index}
        className={wrapperClasses}
        data-animate="fade-up"
        data-delay={index * 100}
      >
        {cardContent}
      </div>
    );
  };

  return (
    <div className={`grid grid-cols-1 ${gridColsClass} gap-8 ${className}`}>
      {cards.map((card, index) => renderCard(card, index))}
    </div>
  );
};

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      linkText: PropTypes.string,
      tag: PropTypes.string,
      date: PropTypes.string
    })
  ).isRequired,
  columns: PropTypes.oneOf([2, 3, 4]),
  cardType: PropTypes.oneOf(['default', 'solution', 'industry', 'case-study', 'blog']),
  showIcon: PropTypes.bool,
  showImage: PropTypes.bool,
  showLink: PropTypes.bool,
  className: PropTypes.string
};

export default CardGrid;
