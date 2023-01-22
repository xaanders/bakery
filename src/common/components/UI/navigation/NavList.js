import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import classes from './NavList.module.css';
const menuItems = [
    { title: 'Home', url: '/home', id: 'm1' },
    { title: 'About', url: '/about', id: 'm2' },
    { title: 'Store', url: '/store', id: 'm3' },
    { title: 'Contacts', url: '/contacts', id: 'm4' }
];

function NavList() {
    const [burgerActive, setBurgerActive] = useState(false);
    const location = useLocation().pathname;
    
    if (burgerActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"

    }
    const btnHandler = useCallback(function handler() {
        setBurgerActive(b => !b);
    }, [setBurgerActive])

    useEffect(() => {
        btnHandler();
    }, [location, btnHandler])
    

    return (
        <nav className={classes.nav}>
            <button className={`${classes['burger-btn']} ${burgerActive ? classes.active : ''}`} onClick={btnHandler} >
                <span></span>
            </button>
        <div className={classes.scroll}>
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
        </div>
        </nav>

    )
}

export default NavList