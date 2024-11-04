import React from 'react';
import Sidebar from '../../Components/Home/Sidebar';
import Profile from '../../Components/Home/Profile';
import Footer from '../../Components/Home/Footer';

function Perfil() {
  return (
    <div className="app-container">
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  );
}

export default Perfil;
