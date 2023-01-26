import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MenuItems.module.css';
const menuItems = [
    { title: 'Home', url: '/home', id: 'm1' },
    { title: 'About', url: '/about', id: 'm2' },
    { title: 'Store', url: '/store', id: 'm3' },
    { title: 'Contacts', url: '/contacts', id: 'm4' }
];

function MenuItems({burgerActive}) {

    return (
        <ul className={`${classes['list-items']} ${burgerActive ? classes.active : ''}`}>
            {menuItems.map(menuItem => {
                return (
                    <li key={menuItem.id}>
                        <NavLink className={navData => {
                            return navData.isActive
                                ? `${classes['link-item']} ${classes.active}`
                                : classes['link-item'];
                        }} to={menuItem.url}>{menuItem.title}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuItems