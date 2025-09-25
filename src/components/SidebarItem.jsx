import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.jsx';
import clsx from 'clsx';

const SidebarItem = ({ icon, label, badge, active }) => (
  <button
    type="button"
    className={clsx('sidebar-item', { 'sidebar-item--active': active })}
  >
    <span className="sidebar-item__icon">
      <Icon name={icon} size={18} />
    </span>
    <span className="sidebar-item__label">{label}</span>
    {badge && <span className="sidebar-item__badge">{badge}</span>}
  </button>
);

SidebarItem.propTypes = {
  icon: PropTypes.oneOf([
    'layers',
    'compass',
    'clock',
    'wallet'
  ]).isRequired,
  label: PropTypes.string.isRequired,
  badge: PropTypes.string,
  active: PropTypes.bool
};

SidebarItem.defaultProps = {
  badge: undefined,
  active: false
};

export default SidebarItem;
