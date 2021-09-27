import React from 'react';
import { Link } from 'react-router-dom';
import './css/Modal.css';

import Close from '../images/times-solid.svg';
import Logo from '../images/nike_32px.svg'


const Modal = ({onModal = () => {}}) => {

    return (
        <div className="modal-pt">
            <aside className="modal">
                <ul>
                    <img src={Logo} alt="" className="logo" />
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/feminino"><li>FEMININO</li></Link>
                    <Link to="/masculino"><li>MASCULINO</li></Link>
                    <Link to="/sobreMim"><li>SOBRE MIM</li></Link>
                    <img src={Close} alt="Botão de fechar" className="close" onClick={onModal} />
                </ul>                  
            </aside>
        </div>
    )
}

export default Modal;
