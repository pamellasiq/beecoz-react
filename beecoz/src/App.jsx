import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/Components/Login/Login'
import Header from './assets/Components/Header/Header'
import Register from './assets/Components/Register/Index';
import Prof from './assets/Components/Register/RegisterProf';
import Clie from './assets/Components/Register/RegisterCli'
import Analise from './assets/Components/Register/Analise'
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
        </Routes>
    </Router>
  );
}

export default App
