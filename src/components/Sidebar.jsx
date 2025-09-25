import React from 'react';
import SidebarSection from './SidebarSection.jsx';
import SidebarItem from './SidebarItem.jsx';
import AssistantCard from './AssistantCard.jsx';
import ScheduleItem from './ScheduleItem.jsx';
import Icon from './Icon.jsx';
import { primaryLinks, assistants, scheduleItems } from '../data/navigation.js';
import mark from '../assets/klever-mark.svg';

const Sidebar = () => (
  <aside className="sidebar" aria-label="Primary navigation">
    <div className="sidebar__branding">
      <img src={mark} alt="Klever logo" className="sidebar__logo" />
      <span className="sidebar__brand">klever</span>
    </div>

    <div className="sidebar__search">
      <Icon name="search" size={18} />
      <input type="search" placeholder="Search chats" aria-label="Search chats" />
    </div>

    <SidebarSection title="Tomorrow" action={<button type="button" className="sidebar-section__action">View all</button>}>
      <div className="sidebar__links">
        {primaryLinks.map((link, index) => (
          <SidebarItem
            key={link.id}
            icon={link.icon}
            label={link.label}
            badge={link.badge}
            active={index === 0}
          />
        ))}
      </div>
    </SidebarSection>

    <SidebarSection title="Assistants" action={<button type="button" className="sidebar-section__action sidebar-section__action--muted">Manage</button>}>
      <div className="sidebar__assistants">
        {assistants.map((assistant, index) => (
          <AssistantCard
            key={assistant.id}
            label={assistant.label}
            hint={assistant.hint}
            active={index === 0}
          />
        ))}
      </div>
    </SidebarSection>

    <SidebarSection title="My day" action={<button type="button" className="sidebar-section__action"><Icon name="plus" size={16} />New</button>}>
      <div className="sidebar__schedule">
        {scheduleItems.map((item) => (
          <ScheduleItem key={item.id} {...item} />
        ))}
      </div>
    </SidebarSection>
  </aside>
);

export default Sidebar;
