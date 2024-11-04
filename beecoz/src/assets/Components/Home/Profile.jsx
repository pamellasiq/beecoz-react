import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.modules.css';

function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Meu Perfil</h1>
      </header>
      
      <div className="profile-info">
        <img src="../../../../public/igor.jpg" alt="User" className="profile-avatar" />
        <div className="profile-details">
          <h2>Igor Lacerda</h2>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>

      <div className="profile-options">
        <div className="profile-option">
          <i className="ri-user-line"></i>
          <div>
            <h4>Minha conta</h4>
            <p>Editar</p>
          </div>
          <i className="ri-arrow-right-s-line"></i>
        </div>
        
        <div className="profile-option">
          <i className="ri-logout-box-r-line"></i>
          <div>
            <h4>Log out</h4>
            <p>Sair da sua conta</p>
          </div>
          <Link to="/" className="link">
          <i className="ri-arrow-right-s-line"></i>
          </Link>
        </div>
        
        <div className="profile-option">
          <i className="ri-information-line"></i>
          <div>
            <h4>Sobre a Beecoz</h4>
          </div>
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>
    </div>
  );
}

export default Profile;
