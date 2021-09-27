import React from 'react';
import './css/Ajuda.css';
import { Link } from 'react-router-dom';

import Me from '../images/me.jpeg';
import Footer from './Footer';

export const Ajuda = () => {
    return (
        <div className="sobre">
           <aside className="foto">
               <img src={Me} alt="Minha Foto ( criador )" className="me" />
               <div className="text">
                <h1>OLÁ,<br /> ME CHAMO <br /> GUILHERME ARAUJO</h1>
                <p className="dev">Sou Desenvolvedor Fullstack MERN, e estou empenhado em lhes mostrar meus projetos <br /> para desmontrar o meu valor no mercado de trabalho. <br /></p>
               </div>
           </aside>
           <div className="text1">
                <p>Aqui está meu Portifolio: </p>
                <p className="git">E meu Github:   <a target="_blank" href="https://github.com/Azaeell">github.com/Azaeell</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default Ajuda;
