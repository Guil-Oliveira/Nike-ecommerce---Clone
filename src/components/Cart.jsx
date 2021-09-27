import React from 'react';
import './css/Cart.css';
import { Link } from 'react-router-dom';

import Close from '../images/times-solid copy.svg';

const Cart = ({onClose = () => {}}) => {

    return (
        <div className="modalCa">
            <aside>
                <div>
                    <img src={Close} alt="botão de fecha" className="closecart" onClick={onClose} /><h4>SEU CARRIHO</h4>
                </div>
                <h2>SEU CARRINHO ESTÁ VAZIO</h2>
                <p>Faça uma busca pelo seu produto.</p>
                <button onClick={onClose}>Continuar Comprando</button>
            </aside>
        </div>
    )
}

export default Cart;
