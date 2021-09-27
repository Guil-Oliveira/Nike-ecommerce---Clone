import React from 'react'
import masculino from './Data/DataMasculino';
import './css/Card.css';

export const CardMasculino = (props) => {

    const masculinoSlice = masculino.slice(0, 3);
    const masculinoSlice1 = masculino.slice(3, 6);

    return (
        <div className="card">
            <section>{masculinoSlice.map(item => {
                return  <aside className="produto">
                        <img src={item.image} alt="" />
                        <h2 className="name">{item.name}</h2>
                        <p><b>R$ </b>{item.preço}</p>
                        <b className="cor">{item.cor}</b>
                        <div><button>Comprar</button></div>  
                </aside>
                
            })}
            </section>
            <section>{masculinoSlice1.map(item => {
                return <aside className="produto">
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

export default CardMasculino;