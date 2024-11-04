import React from 'react';
import { Link } from 'react-router-dom';
import './Settings.modules.css';

function Settings() {
  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Configurações</h1>
      </header>

      <div className="settings-options">
        <div className="settings-option"><a><i className="ri-lock-password-line"></i></a> Alterar Senha</div>
        <div className="settings-option"><a><i class="ri-mail-lock-fill"></i></a> Verificar e-mail</div>
        <div className="settings-option"><a><i class="ri-phone-fill"></i></a> Verificar número de telefone</div>
        <div className="settings-option"><a><i class="ri-customer-service-2-fill"></i></a> Ajuda e suporte</div>
        <div className="settings-option">
        <a>
        <Link to="/" className="link">
        Sair
        </Link>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Settings;
