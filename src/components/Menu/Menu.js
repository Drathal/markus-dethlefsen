import React from 'react';
import { Link } from 'react-router-dom'

const MenuItem = ({ link, text }) => (<li key={link}><Link to={link}>{text}</Link></li>)
const MenuItems = ({data}) => data.map(entry => MenuItem(entry))

const Menu = ({data}) => (
    <header>
        <nav>
            <ul>
                <MenuItems data={data}/>
            </ul>
        </nav>
    </header>
);

export default Menu;
