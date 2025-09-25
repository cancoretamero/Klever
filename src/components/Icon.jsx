import React from 'react';
import PropTypes from 'prop-types';

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

const icons = {
  layers: (
    <>
      <path d="M4 12.5 12 17l8-4.5-8-4.5-8 4.5Z" {...strokeProps} />
      <path d="m4 17 8 4.5 8-4.5" {...strokeProps} />
      <path d="m4 8 8 4.5 8-4.5-8-4.5L4 8Z" {...strokeProps} />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" {...strokeProps} />
      <path d="m16 8-2.2 5.8L8 14l2-5.4L16 8Z" {...strokeProps} />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" {...strokeProps} />
      <path d="M12 7v6l3 2" {...strokeProps} />
    </>
  ),
  wallet: (
    <>
      <rect width="16" height="12" x="4" y="6" rx="2.8" {...strokeProps} />
      <path d="M16 12h2" {...strokeProps} />
    </>
  ),
  trending: (
    <>
      <path d="m3 15 6-6 4 4 7-7" {...strokeProps} />
      <path d="M16 6h4v4" {...strokeProps} />
    </>
  ),
  pie: (
    <>
      <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" {...strokeProps} />
      <path d="M15 3.5a9 9 0 0 1 5.5 5.5H15V3.5Z" {...strokeProps} />
    </>
  ),
  credit: (
    <>
      <rect width="18" height="12" x="3" y="6" rx="2.5" {...strokeProps} />
      <path d="M3 10h18" {...strokeProps} />
      <path d="M9 15h1" {...strokeProps} />
      <path d="M6 15h1" {...strokeProps} />
    </>
  ),
  image: (
    <>
      <rect width="18" height="14" x="3" y="5" rx="2.5" {...strokeProps} />
      <path d="m7.5 14 2.5-2.5 3 3 2-2 3 3" {...strokeProps} />
      <circle cx="8.2" cy="9.8" r="1.3" {...strokeProps} />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4.5 13.8 9l4.7 1.8-4.7 1.8L12 18l-1.8-5.4L5.5 10.8 10.2 9 12 4.5Z" {...strokeProps} />
      <path d="M5 4l.8 2 .8-2 .8 2L8.2 4" {...strokeProps} />
      <path d="m18.5 18.8.7 1.7.7-1.7.7 1.7.7-1.7" {...strokeProps} />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" {...strokeProps} />
      <path d="M3 12h18" {...strokeProps} />
      <path d="M12 3c2.5 3 4 6.3 4 9s-1.5 6-4 9c-2.5-3-4-6.3-4-9s1.5-6 4-9Z" {...strokeProps} />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" {...strokeProps} />
      <path d="m16 16 4 4" {...strokeProps} />
    </>
  ),
  chevron: (
    <>
      <path d="m9 6 6 6-6 6" {...strokeProps} />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" {...strokeProps} />
      <path d="M5 12h14" {...strokeProps} />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" {...strokeProps} />
      <path d="M4 12h16" {...strokeProps} />
      <path d="M4 17h10" {...strokeProps} />
    </>
  ),
  bell: (
    <>
      <path d="M18 14V10a6 6 0 0 0-12 0v4" {...strokeProps} />
      <path d="M4 14h16" {...strokeProps} />
      <path d="M12 20a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 20Z" {...strokeProps} />
    </>
  )
};

const Icon = ({ name, size = 20, className = '' }) => {
  const body = icons[name];

  return (
    <span className={`icon ${className}`} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="icon__svg"
      >
        {body}
      </svg>
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.number,
  className: PropTypes.string
};

export default Icon;
