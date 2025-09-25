import React from 'react';
import PropTypes from 'prop-types';

const ScheduleItem = ({ time, title, subtitle }) => (
  <article className="schedule-item">
    <span className="schedule-item__time">{time}</span>
    <div className="schedule-item__meta">
      <span className="schedule-item__title">{title}</span>
      <span className="schedule-item__subtitle">{subtitle}</span>
    </div>
  </article>
);

ScheduleItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ScheduleItem;
