import React from 'react';
import feminino from './Data/DataFeminino';

const CardFeminino = () => {

        const femininoSlice = feminino.slice(0, 3);
        const femininoSlice1 = feminino.slice(4, 7);
        const femininoSlice2 = feminino.slice(7, 8);

    
        return (
            <div className="card">
            <h1 className="voce">VOÇÊ É MAIS QUE UM <b className="padrao">PADRÃO</b></h1>
                <section>{femininoSlice.map(item => {
                    return  <aside className="produto">
                            <img src={item.image} alt="" />
                            <h2 className="name">{item.name}</h2>
                            <p><b>R$ </b>{item.preço}</p>
                            <b className="cor">{item.cor}</b>
                            <div><button>Comprar</button></div>  
                    </aside>
                    
                })}
                </section>
                <section>{femininoSlice1.map(item => {
                    return <aside className="produto">
                            <img src={item.image} alt="" />
                            <h2 className="name">{item.name}</h2>
                            <p><b>R$ </b>{item.preço}</p>
                            <b className="cor">{item.cor}</b>
                            <div><button>Comprar</button></div>  
                    </aside>
                })}
                </section>
                <section>{femininoSlice2.map(item => {
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


export default CardFeminino;
