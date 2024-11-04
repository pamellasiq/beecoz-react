import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.modules.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Feed</h2>
      <div className="tabs">
        <a className="tab active">Para Você</a>
        <a className="tab">Seguindo</a>
      </div>
    </div>
  );
}

export default Sidebar;
