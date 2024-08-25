import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/Components/Login/Login'
import Register from './assets/Components/Register/Index';
function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} /> {/* Página principal (Login) */}
          <Route path="/register" element={<Register />} /> {/* Página de cadastro */}
        </Routes>
    </Router>
  );
}

export default App
