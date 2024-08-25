import React, { useState, useEffect } from "react";
import "./RegisterProf.modules.css";
import { Link } from 'react-router-dom';
import Header from "../Previous/Previous"

function Prof() {

    const [placeholder, setPlaceholder] = useState("CPF");

    const handleOptionChange = (event) => {
      setPlaceholder(event.target.value);
    };

  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    street: '',
    neighborhood: '',
    city: '',
    state: ''
  });

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            setAddress({
              street: data.logradouro,
              neighborhood: data.bairro,
              city: data.localidade,
              state: data.uf
            });
          } else {
            alert('CEP não encontrado');
          }
        })
        .catch(error => {
          console.error('Erro ao buscar o endereço:', error);
        });
    }
  }, [cep]);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  return (
    <>
      <Header />
      
      <div className="all">
      <form className="form-questionary">
        <div className="questionary">
          <h1>Bem-vindo à Beecoz!</h1>
          <p>Para começar, qual o seu nome?</p>
          <input type="text" className="input-re" placeholder="Nome completo" />
        </div>

        <div className="questionary">
          <p>Gênero</p>
          <div className="radio">
          <label>
            <input type="radio" name="gender" value="Feminino"/>
            Feminino
          </label>
          <label>
            <input type="radio" name="gender" value="Masculino"/>
            Masculino
          </label>
          <label>
            <input type="radio" name="gender" value="outro"/>
            Prefiro não dizer
          </label>
          </div>
        </div>

        <div className="questionary">
          <p>E-mail</p>
          <input type="email" className="input-re" placeholder="nome@example.com" />
        </div>
        <div className="questionary">
          <p>Telefone</p>
          <input type="tel" className="input-re" placeholder="(00) 0 0000-0000" />
        </div>
        <div className="questionary">
          <p>Crie uma senha</p>
          <span>*Para sua segurança, crie uma senha com letras maiúsculas, minúsculas e símbolos, etc.</span>
          <input type="password" className="input-re" placeholder="*****" />
        </div>
        <div className="questionary">
          <p>Digite seu CEP</p>
          <input
            type="text"
            className="input-re"
            placeholder="00000-000"
            value={cep}
            onChange={handleCepChange}
            maxLength="8"
          />
        </div>
        <div className="questionary">
          <p>Rua</p>
          <input
            type="text"
            className="input-re"
            placeholder="Rua"
            value={address.street}
            readOnly
          />
        </div>
        <div className="questionary">
          <p>Bairro</p>
          <input
            type="text"
            className="input-re"
            placeholder="Bairro"
            value={address.neighborhood}
            readOnly
          />
        </div>
        <div className="questionary">
          <p>Cidade</p>
          <input
            type="text"
            className="input-re"
            placeholder="Cidade"
            value={address.city}
            readOnly
          />
        </div>
        <div className="questionary">
          <p>Estado</p>
          <input
            type="text"
            className="input-re"
            placeholder="Estado"
            value={address.state}
            readOnly
          />
        </div>
        <div className="questionary">
          <p>Escolha o tipo de documento</p>
          <div className="radio">
          <label>
            <input
              type="radio"
              name="document"
              value="CPF"
              checked={placeholder === "CPF"}
              onChange={handleOptionChange}
            />
            CPF
          </label>
          <label>
            <input
              type="radio"
              name="document"
              value="RG"
              checked={placeholder === "RG"}
              onChange={handleOptionChange}
            />
            RG
          </label>
          </div>
        </div>

        <div className="questionary">
          <p>Digite seu {placeholder}</p>
          <input
            type="text"
            className="input-re"
            placeholder={placeholder}
          />
        </div>
      </form>
      <button><Link to="/analise" className="link">Cadastrar </Link></button>
      </div>
    </>
  );
}

export default Prof;
