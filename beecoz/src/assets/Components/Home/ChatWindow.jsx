import React from 'react';

function ChatWindow({ chat, onBack }) {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <button onClick={onBack} className="back-button"><i class="ri-arrow-left-line"></i></button>
        <img src={chat.src} alt="User" className="avatar-chat" />
        <h4>{chat.name}</h4>
      </div>
      <div className="messages">
      <div className="message user-message">
          <div className="message-content">Olá, boa tarde! Gostaria de solicitar um orçamento para um guarda-roupa planejado.</div>
      </div>
      <div className="message">
          <img src={chat.src} alt="User" className="avatar" />
          <div className="message-content"> Boa tarde! Claro, fazemos sim! Podemos conversar um pouco sobre o projeto para entender melhor o que você precisa?</div>
        </div>
        <div className="message user-message">
          <div className="message-content">Vou pesquisar mais e já te retorno ok?</div>
      </div>
        <div className="message">
          <img src={chat.src} alt="User" className="avatar" />
          <div className="message-content">{chat.message}</div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Digite algo..." />
        <button className='btn-icon'><i class="ri-mic-fill"></i></button>
        <button className='btn-icon'><i class="ri-camera-fill"></i></button>
        <button className='btn-icon'><i class="ri-send-plane-fill"></i></button>
      </div>
    </div>
  );
}

export default ChatWindow;
