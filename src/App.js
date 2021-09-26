import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './components/css/Header.css';
import './App.css';

import CartImg from './images/shopping-cart-solid.svg';


import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import LoginRegister from './components/LoginRegister.jsx';
import Cart from './components/Cart';



function App() {
  // const { produtos } = Data;
  return (
    <Router>
      <div>
      <header className="header">
            <Link to="/"><h1>Amazon</h1></Link>
            <aside>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/loginResgister"><li>Login - Register</li></Link>
                </ul>
            </aside>
                    <Link to="/cart"><img src={CartImg} alt="Carrinho de compras" className="cart"/></Link>
                    <b>0</b>
        </header>
        
          <Switch>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/loginResgister" exact component={LoginRegister}/>
            <Route path="/cart" exact component={Cart}/>
          </Switch>
      </div>      
    </Router>

  )
}

export default App;
