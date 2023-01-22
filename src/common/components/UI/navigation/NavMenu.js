import React from 'react'
import classes from './NavMenu.module.css';
import NavList from './NavList'
import { Link } from 'react-router-dom';


function NavMenu() {
    return (
        <div className={classes['nav-menu']}>
            <div className={classes.logo}>
                <Link to="/home"><img className={classes['logo-img']} src={'/assets/icons/bakery-logo.svg'} alt="Valeria Bakery Logo" /></Link>
            </div>
            <div className={classes.breaker}></div>
            
           <NavList/>
        </div>

    )
}

export default NavMenu