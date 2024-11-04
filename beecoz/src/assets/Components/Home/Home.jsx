import React from 'react';
import Sidebar from '../../Components/Home/Sidebar';
import Feed from '../../Components/Home/Feed';
import Footer from '../../Components/Home/Footer';

function Home() {
  return (
    <div className="app-container">
      <Sidebar />
      <Feed />
      <Footer />
    </div>
  );
}

export default Home;