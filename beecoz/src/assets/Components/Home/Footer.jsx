import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.modules.css"

function Footer() {
  return (
    <div className="footer-nav">
      <span className='i active'>
      <Link to="/home" className="link">
        <i class="ri-home-2-fill"></i>
      </Link>
      </span>

      <span className='i'>
      <Link to="/chat" className="link">
      <i class="ri-chat-2-fill"></i>
      </Link>
      </span>
      
      <span className='i'>
      <Link to="/perfil" className="link">
      <i class="ri-user-fill"></i>
      </Link>
      </span>
      <span className='i'>
      <Link to="/config" className="link">
      <i class="ri-settings-3-fill"></i>
      </Link>
      </span>
    </div>
  );
}

export default Footer;
