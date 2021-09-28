import React, { useState } from 'react';
import Data from './Data/DataUnissex';
import Shoes from '../images/Shoes.png';
import './css/Home.css';


const CardUni = () => {
    const uniSlice = Data.slice(0, 3);
    const uniSlice1 = Data.slice(3, 6);
    const uniSlice2 = Data.slice(6, 9);

    return (
        <div className="card">
        <h1 className="conheça">CONHEÇA A NIKE</h1>
        <img src={Shoes} alt="" className="shoes"/>
        <div className="backshoe"></div>
           <div className="backshoe"></div>
            <section>{uniSlice.map(item => {
                return  <aside className="produto">
                        <img src={item.image} alt="" />
                        <h2 className="name">{item.name}</h2>
                        <p><b>R$ </b>{item.preço}</p>
                        <b className="cor">{item.cor}</b>
                        <div><button>Comprar</button></div>  
                </aside>
                
            })}
            </section>
            <section>{uniSlice1.map(item => {
                return  <aside className="produto">
                        <img src={item.image} alt="" />
                        <h2 className="name">{item.name}</h2>
                        <p><b>R$ </b>{item.preço}</p>
                        <b className="cor">{item.cor}</b>
                        <div><button>Comprar</button></div>  
                </aside>
                
            })}
            </section>
            <section>{uniSlice2.map(item => {
                return  <aside className="produto">
                        <img src={item.image} alt="" />
                        <h2 className="name">{item.name}</h2>
                        <p><b>R$ </b>{item.preço}</p>
                        <b className="cor">{item.cor}</b>
                        <div><button>Comprar</button></div>  
                </aside>
                
            })}
            </section>
        </div>
    )
}

export default CardUni;
