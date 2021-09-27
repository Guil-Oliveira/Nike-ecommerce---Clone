import React from 'react';
import { Link } from 'react-router-dom';
import './css/Modal.css';

import Close from '../images/times-solid.svg';
import Logo from '../images/nike_32px.svg'


const Modal = () => {

    return (
        <div className="modal-pt">
            <aside className="modal">
                <ul>
                    <img src={Logo} alt="" className="logo" />
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/feminino"><li>FEMININO</li></Link>
                    <Link to="/masculino"><li>MASCULINO</li></Link>
                    <Link to="/infantil"><li>INFANTIL</li></Link>
                    <Link to="/ajuda"><li>AJUDA</li></Link>
                    <img src={Close} alt="Botão de fechar" className="close" />
                </ul>                  
            </aside>
        </div>
    )
}

export default Modal;
