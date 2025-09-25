import React from 'react';
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';

const AppLayout = () => (
  <div className="app-shell">
    <div className="app-background" />
    <div className="app-grid">
      <Sidebar />
      <MainContent />
    </div>
  </div>
);

export default AppLayout;
