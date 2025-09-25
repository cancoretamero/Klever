import React from 'react';
import TopBar from './TopBar.jsx';
import ChatHeader from './ChatHeader.jsx';
import ChatInput from './ChatInput.jsx';
import QuickActionCard from './QuickActionCard.jsx';
import { quickActions } from '../data/quickActions.js';

const MainContent = () => (
  <main className="main-content">
    <TopBar />
    <div className="main-content__body">
      <ChatHeader />
      <ChatInput />
      <div className="main-content__grid">
        {quickActions.map((item) => (
          <QuickActionCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  </main>
);

export default MainContent;
