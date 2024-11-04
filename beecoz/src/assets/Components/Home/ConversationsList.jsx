import React from 'react';

function ConversationsList({ conversations, onSelectChat }) {
  return (
    <div className="conversations-list">
      <h2>Conversas</h2>
      <input type="text" placeholder="Pesquise o nome da pessoa ..." className="search-bar"/>
      {conversations.map((chat) => (
        <div 
          key={chat.id} 
          className="conversation-item" 
          onClick={() => onSelectChat(chat)}
        >
          <img src={chat.src} alt="User" className="avatar" />
          <div className="conversation-info">
            <h4>{chat.name}</h4>
            <p>{chat.message}</p>
          </div>
          <span className="time">{chat.time}</span>
        </div>
      ))}
    </div>
  );
}

export default ConversationsList;
