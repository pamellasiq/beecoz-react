import React from 'react';
import Sidebar from '../../Components/Home/Sidebar';
import Settings from '../../Components/Home/Settings'; // Importando o Settings
import Footer from '../../Components/Home/Footer';

function Config() {
  return (
    <div className="app-container">
      <Sidebar />
      <Settings />
      <Footer />
    </div>
  );
}

export default Config;
