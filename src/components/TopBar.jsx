import React from 'react';
import Icon from './Icon.jsx';

const TopBar = () => (
  <header className="top-bar">
    <div className="top-bar__left">
      <button type="button" className="top-bar__icon-button" aria-label="Toggle menu">
        <Icon name="menu" size={20} />
      </button>
      <div className="top-bar__assistant">
        <span className="top-bar__assistant-label">AI Assistant</span>
        <span className="top-bar__assistant-badge">v2.4</span>
      </div>
    </div>

    <div className="top-bar__right">
      <button type="button" className="top-bar__icon-button" aria-label="Notifications">
        <Icon name="bell" size={20} />
      </button>
      <div className="top-bar__profile">
        <img
          src="https://i.pravatar.cc/48?img=32"
          alt="User avatar"
          className="top-bar__avatar"
        />
        <div className="top-bar__identity">
          <span className="top-bar__name">Johana Rey</span>
          <span className="top-bar__role">Product Lead</span>
        </div>
      </div>
    </div>
  </header>
);

export default TopBar;
