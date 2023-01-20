import React from 'react'
import classes from './NavMenu.module.css';
import logo from '../../../../assets/icons/bakery-logo.svg';
import NavList from './NavList'



function NavMenu() {
    return (
        <div className={classes['nav-menu']}>
            <div className={classes.logo}>
                <img src={logo} alt="Valeria Bakery Logo" />
            </div>
            <div className={classes.breaker}></div>
            
           <NavList/>
        </div>

    )
}

export default NavMenu