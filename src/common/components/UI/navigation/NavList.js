import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavList.module.css';
const menuItems = [
    { title: 'Home', url: '/home', id: 'm1' },
    { title: 'About', url: '/about', id: 'm2' },
    { title: 'Store', url: '/store', id: 'm3' },
    { title: 'Contacts', url: '/contacts', id: 'm4' }
];

function NavList() {
    const [burgerActive, setBurgerActive] = useState(false);
    if (burgerActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"

    }
    function btnHandler() {
        setBurgerActive(!burgerActive);

    }


    return (
        <nav className={classes.nav}>
            <button className={`${classes['burger-btn']} ${burgerActive ? classes.active : ''}`} onClick={btnHandler} >
                <span></span>
            </button>

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
        </nav>

    )
}

export default NavList