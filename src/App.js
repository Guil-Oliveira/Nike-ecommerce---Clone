import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import detectZoom from 'detect-zoom';
import './components/css/Header.css';
import './App.css';

import Modal from './components/Modal.jsx';

import Logo from './images/nike_32px.svg';
import Menu from './images/bars-solid.svg';
import CartImg from './images/shopping-cart-solid.svg';



import Feminino from './components/Feminino';
import Masculino from './components/Contact.jsx';
import Infantil from './components/Infantil';
import Ajuda from './components/Ajuda.jsx';
import Login from './components/Login';
import Cart from './components/Cart';
import Inscreva from './components/Inscreva';
import Footer from './components/Footer';


function App() {
  
  
  const [visible, setVisible] = useState(false);

  return (
    <Router>
      <div>
      <header className="header">
            <img src={Menu} className="menu" alt="Botão de menu" />
            <Link to="/"><img src={Logo} alt="Nike Logo" className="logo" /></Link>
            <aside>
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/feminino"><li>FEMININO</li></Link>
                    <Link to="/masculino"><li>MASCULINO</li></Link>
                    <Link to="/infantil"><li>INFANTIL</li></Link>
                    <Link to="/sobreMim"><li>SOBRE MIM</li></Link>
                </ul>                  
            </aside>
            <aside className="nav">
                    <Link to="/loginInscreva"><p className="login">Login / Inscreva-se</p></Link>
                    <img src={CartImg} alt="Carrinho de compras" className="cart" onClick={() => setVisible(true)}/>
                    <b>0</b>
                    
            </aside> 
            {visible ? (<Cart onClose={() => setVisible(false)} />) : null}
        </header>                

          <Switch>
            <Route path="/sobreMim" exact component={Ajuda}/>
            <Route path="/feminino" exact component={Feminino}/>
            <Route path="/masculino" exact component={Masculino}/>
            <Route path="/infantil" exact component={Infantil}/>
            <Route path="/loginInscreva" exact component={Login}/>
            <Route path="/inscreva-se" component={Inscreva}/>
          </Switch>
      </div>      
    </Router>

  )
}

export default App;
