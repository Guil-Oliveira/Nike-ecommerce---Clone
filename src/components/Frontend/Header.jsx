import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <header>
            <nav>
               <Link to="/"><h1>Amazon img</h1></Link>
               <aside>
                   <ul>
                       <Link to="/"><li>Home</li></Link>
                       <Link to="/about"><li>About</li></Link>
                       <Link to="/contact"><li>Contact</li></Link>
                       <Link to="/cart"><li><img src="." alt="Cart" /></li></Link>
                       <b>O</b>
                   </ul>
               </aside>
            </nav>
        </header>
    );
}

export default Header;