import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <nav>
            <ul className={'menu'}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/produtos'}>Produtos</Link>
                </li>
                <li>
                    <Link to={'/sobre-nos'}>Sobre nós</Link>
                </li>
                <li>
                    <Link to={'/moedas'}>Moedas</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
