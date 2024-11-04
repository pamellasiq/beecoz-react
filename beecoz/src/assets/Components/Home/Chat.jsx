import React from 'react';
import Sidebar from '../../Components/Home/Sidebar';
import ChatApp from '../../Components/Home/ChatApp'; // Importando o ChatApp
import Footer from '../../Components/Home/Footer';

function Chat() {
  return (
    <div className="app-container">
      <Sidebar />
      <ChatApp />
      <Footer />
    </div>
  );
}

export default Chat;