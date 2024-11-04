import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/Components/Login/Login'
import Header from './assets/Components/Header/Header'
import Register from './assets/Components/Register/Index';
import Prof from './assets/Components/Register/RegisterProf';
import Clie from './assets/Components/Register/RegisterCli'
import Analise from './assets/Components/Register/Analise'
import Home from './assets/Components/Home/Home'
import Chat from './assets/Components/Home/Chat'
import Perfil from './assets/Components/Home/Perfil'
import Config from './assets/Components/Home/Config'

function App() {

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <div className="login_page">
              <Header />
              <Login />
            </div>
          }
        />
          <Route path="/register" element={<Register />} />
          <Route path="/profissional" element={<Prof />} />
          <Route path="/cliente" element={<Clie />} />
          <Route path="/analise" element={<Analise />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/chat" element={<Chat />}/>
          <Route path= "/perfil" element={<Perfil />}/>
          <Route path= "/config" element={<Config />}/>
        </Routes>
    </Router>
  );
}

export default App
