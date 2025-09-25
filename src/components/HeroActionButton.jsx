import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Icon from './Icon.jsx';

const HeroActionButton = ({ label, icon, primary }) => (
  <button
    type="button"
    className={clsx('hero-action', { 'hero-action--primary': primary })}
  >
    <Icon name={icon} size={18} />
    <span>{label}</span>
  </button>
);

HeroActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['image', 'sparkles', 'globe']).isRequired,
  primary: PropTypes.bool
};

HeroActionButton.defaultProps = {
  primary: false
};

export default HeroActionButton;
