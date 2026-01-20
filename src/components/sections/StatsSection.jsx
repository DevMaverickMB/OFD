import React from 'react';
import PropTypes from 'prop-types';

/**
 * StatsSection - Display statistics/metrics in a grid
 * Used on: Home, About pages
 */
const StatsSection = ({
  stats = [],
  columns = 4,
  className = '',
  backgroundColor = 'transparent'
}) => {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'md:grid-cols-4';

  return (
    <div
      className={`py-12 px-6 ${className}`}
      style={{ backgroundColor }}
    >
      <div className={`grid grid-cols-1 ${gridColsClass} gap-8`}>
        {stats.map((stat, index) => (
          <div
            key={stat.id || index}
            className="text-center scroll-animate"
            data-animate="scale-pop"
            data-delay={index * 100}
          >
            {stat.icon && (
              <div className="text-4xl mb-3">
                {stat.icon}
              </div>
            )}
            <div className="text-4xl md:text-5xl font-bold text-[#ff6b35] mb-2">
              {stat.value}
            </div>
            <div className="text-lg font-semibold text-gray-800 mb-1">
              {stat.label}
            </div>
            {stat.description && (
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

StatsSection.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired,
  columns: PropTypes.oneOf([2, 3, 4]),
  className: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default StatsSection;
