import React from "react";
import "./Login.modules.css"
import Switch from "../Switch/Switch";

function Login() {
    return (
            <div className="login">
                <form className="form-login">
                    <div className="input-login">
                    <i className="ri-user-line"></i><input type="text" placeholder="Seu Login" />
                    </div>
                    <div className="input-login">
                    <i className="ri-lock-password-line"></i><input type="password" placeholder="Sua Senha" />
                    </div>

                    <div className="remember-login">
                    <div className="remember-me">
                    <Switch/>
                    <p>Lembre de mim</p>
                    </div>
                    <a>Esqueceu a senha?</a>
                    </div>

                    <button className="btn-login">Login</button>
                    <div className="icons">
                    <button className="social"><i className="ri-facebook-fill"></i>Facebook</button>
                    <button className="social"><i className="ri-google-fill"></i>Google</button>
                    </div>
                </form>
                <div className="register">
                <p>Não tem uma conta?</p>
                <a>Cadastre-se!</a>
                </div>
            </div>
    );
}

export default Login;
