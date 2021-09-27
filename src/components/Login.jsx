import React from 'react';
import './css/Login.css';
import Logo from '../images/nike_32px.svg';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="login">
            <aside>
                <img src={Logo} alt="Nike Logo" className="logo" />
                <h1>SUA CONTA</h1>
                <form action="" className="formulario">
                <label htmlFor="">
                    <input type="email" name="email" id="email-Login" placeholder="Endereço de e-mail" required/> <br /></label>
                <label htmlFor="">
                    <input type="password" name="senha" id="senha-Login" placeholder="Senha" required /></label>
                    <p>Ao fazer login, você concorda com a <Link to="/politica-de-privacidade"><b>Política de privacidade</b></Link> e com os <br /> <Link to="/Termos-de-uso"><b>Termos de uso</b></Link> do Nike.com.</p>
                    <button className="buttonLogin">ENTRAR</button>
                    <p>Não está registrado? <Link to="/inscreva-se"><b>Inscreva-se</b></Link>.</p>
                </form>
            </aside>                 
        </div>
      
    )
}

export default Login;
