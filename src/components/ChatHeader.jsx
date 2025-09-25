import React from 'react';
import HeroActionButton from './HeroActionButton.jsx';
import { heroActions } from '../data/quickActions.js';

const ChatHeader = () => (
  <section className="chat-hero">
    <div className="chat-hero__orb" aria-hidden="true">
      <div className="chat-hero__orb-core" />
      <div className="chat-hero__orb-glow" />
    </div>
    <div className="chat-hero__intro">
      <span className="chat-hero__subtitle">Good Evening, Klever.</span>
      <h1 className="chat-hero__title">Can I help you with anything?</h1>
    </div>
    <div className="chat-hero__actions">
      {heroActions.map((action) => (
        <HeroActionButton key={action.id} {...action} />
      ))}
    </div>
  </section>
);

export default ChatHeader;
