import React from 'react'
import Footer from './Footer';
import masculino from './Data/DataMasculino';
import CardMasculino from './CardMasculino';

const Masculino = () => {

    console.log(masculino);

    return (
        <div>
            <CardMasculino />
            <img src="https://media1.giphy.com/media/JPVVb7xCHoxhGym627/giphy.gif?cid=6c09b952af2f3eee1102ab0edf21b378f8fbe5608584ac0c&rid=giphy.gif&ct=s" alt="" className="gif1"/>
            <Footer/>
        </div>
    )
}

export default Masculino;
