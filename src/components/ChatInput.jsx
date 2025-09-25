import React from 'react';
import Icon from './Icon.jsx';

const ChatInput = () => (
  <form className="chat-input" aria-label="Send message">
    <label htmlFor="message" className="chat-input__label">
      Message AI Chat...
    </label>
    <div className="chat-input__controls">
      <button type="button" className="chat-input__control" aria-label="Attach image">
        <Icon name="image" size={18} />
        <span>Create an image</span>
      </button>
      <button type="button" className="chat-input__control" aria-label="Open web search">
        <Icon name="globe" size={18} />
        <span>Search the web</span>
      </button>
    </div>
  </form>
);

export default ChatInput;
