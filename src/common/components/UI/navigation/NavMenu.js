import React from 'react'
import classes from './NavMenu.module.css';
import NavList from './NavList'


function NavMenu() {
    return (
        <div className={classes['nav-menu']}>
            <div className={classes.logo}>
                <img src={'/assets/icons/bakery-logo.svg'} alt="Valeria Bakery Logo" />
            </div>
            <div className={classes.breaker}></div>
            
           <NavList/>
        </div>

    )
}

export default NavMenu