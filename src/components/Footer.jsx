import React from 'react';
import './css/Footer.css';
import Logo from '../images/nike_32pxc.svg'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={Logo} alt="Logo Footer" className="logo" />
            </div>
        </footer>
    )
}

export default Footer;
