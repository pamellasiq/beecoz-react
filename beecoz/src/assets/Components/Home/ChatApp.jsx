import React, { useState } from 'react';
import ConversationsList from './ConversationsList';
import ChatWindow from './ChatWindow';
import './ChatApp.modules.css';

function ChatApp() {
  const [selectedChat, setSelectedChat] = useState(null);

  const conversations = [
    { id: 1, name: 'Claudinei Silva', message: 'Opa, fechado então!', time: 'Sáb', src: '../../../../public/claudinei.jpg' },
    { id: 2, name: 'Maria Oliveira', message: 'Como estão as coisas?', time: 'Sex',src: '../../../../public/maria.jpg' },

  ];

  return (
    <div className="chat-app">
      {selectedChat ? (
        <ChatWindow 
          chat={selectedChat} 
          onBack={() => setSelectedChat(null)} 
        />
      ) : (
        <ConversationsList 
          conversations={conversations} 
          onSelectChat={(chat) => setSelectedChat(chat)} 
        />
      )}
    </div>
  );
}

export default ChatApp;
