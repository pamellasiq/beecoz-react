import React from "react";
import "./Analise.modules.css"
import Header from "../Header/Header"
import { Link } from 'react-router-dom';

function Analise() {
    return (
        <>
        <Header/>
        <div className="analise">
        <p>Os dados apresentados estão em análise, quando analisarmos estes, enviaremos uma mensagem ao email informado no cadastro!</p>
        <button><Link to="/" className="link-an">Início</Link></button>
        </div>
        </>
    );

}

export default Analise