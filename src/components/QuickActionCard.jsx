import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.jsx';

const QuickActionCard = ({ title, description, icon }) => (
  <article className="quick-card">
    <div className="quick-card__icon">
      <Icon name={icon} size={20} />
    </div>
    <div className="quick-card__content">
      <h3 className="quick-card__title">{title}</h3>
      <p className="quick-card__description">{description}</p>
    </div>
  </article>
);

QuickActionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['trending', 'pie', 'credit']).isRequired
};

export default QuickActionCard;
