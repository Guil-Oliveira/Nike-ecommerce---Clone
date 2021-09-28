import React from 'react';
import './css/Ajuda.css';

import Me from '../images/me.jpeg';
import Footer from './Footer';

export const Ajuda = (props) => {
  
    console.log();
    return (
        <div className="sobre">
            <img src="https://freight.cargo.site/t/original/i/27cf0a6706f822322b54b04dd46bc3d96789b19bf34ee971963178d5b860be7c/MAXINE_WALKING_AM90.gif" alt="" className="gif"/>
           <aside className="foto">
               <img src={Me} alt="Minha Foto ( criador )" className="me" />
               <div className="text">
                <h1>OLÁ,<br /> ME CHAMO <br /> GUILHERME ARAUJO</h1>
                <p className="dev">Sou Desenvolvedor Fullstack MERN, e estou empenhado em lhes mostrar meus projetos <br /> para desmontrar o meu valor no mercado de trabalho. <br /></p>
               </div>
           </aside>
           <div className="text1">
                <p>Aqui está meu Portifolio: </p>
                <p className="git">E meu Github:<a href="https://github.com/Azaeell" target="_blank" rel="noopener noreferrer" >github.com/Azaeell</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default Ajuda;
