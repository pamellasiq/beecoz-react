import React from "react";
import "./Index.modules.css"
import Header from "../Previous/Previous"

function Index() {
    return (
        <>
        <Header />
        <div className="opcoes">
        <p className="text">
            Bem-vindo à Beecoz!
        </p>
        <p className="text">
            Para começar, você gostaria de se cadastrar como:
        </p>
        <button><a>Cliente</a></button>
        <button><a>Prestador de Serviços</a></button>
        <div className="login">
            <p>Já tem uma conta? <a href="../../../../index.html">Faça login!</a></p>
        </div>

        </div>
        
        </>
    );
}

export default Index