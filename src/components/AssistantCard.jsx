import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.jsx';
import clsx from 'clsx';

const AssistantCard = ({ label, hint, active }) => (
  <button
    type="button"
    className={clsx('assistant-card', { 'assistant-card--active': active })}
  >
    <div className="assistant-card__glyph">
      <Icon name="sparkles" size={18} />
    </div>
    <div className="assistant-card__content">
      <span className="assistant-card__label">{label}</span>
      <span className="assistant-card__hint">{hint}</span>
    </div>
    <Icon name="chevron" size={18} className="assistant-card__arrow" />
  </button>
);

AssistantCard.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  active: PropTypes.bool
};

AssistantCard.defaultProps = {
  active: false
};

export default AssistantCard;
