import React from 'react';
import PropTypes from 'prop-types';

const SidebarSection = ({ title, action, children }) => (
  <section className="sidebar-section">
    <header className="sidebar-section__header">
      <span className="sidebar-section__title">{title}</span>
      {action}
    </header>
    <div className="sidebar-section__body">{children}</div>
  </section>
);

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.node,
  children: PropTypes.node.isRequired
};

SidebarSection.defaultProps = {
  action: null
};

export default SidebarSection;
