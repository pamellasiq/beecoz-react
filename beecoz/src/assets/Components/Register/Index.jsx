import React from "react";
import "./Index.modules.css"
import { Link } from 'react-router-dom';
import Header from "../Previous/Previous"
import Bee from "../Header/Header"

function Index() {
    return (
        <>
        <Header />
        <Bee/>
        <div className="opcoes">
        <div className="form">
        <h1>
            Bem-vindo à Beecoz!
        </h1>
        <p className="text">
            Para começar, você gostaria de se cadastrar como?
        </p>
        <button className="fisrt-btn">
        <Link  to="/cliente" className="link-f">Cliente</Link>
        </button>
        <button className="last-btn">
        <Link  to="/profissional" className="link">Prestador de Serviços</Link>
        </button>
        <div className="login">
            <p>Já tem uma conta? <Link to="/">Faça login!</Link></p>
        </div>

        </div>
        </div>

        </>
    );
}

export default Index