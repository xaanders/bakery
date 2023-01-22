import React from 'react'
import classes from './NavActions.module.css';
import { Link, useLocation } from 'react-router-dom';


function NavActions() {
    const location = useLocation();
    // const basePage = location.pathname.split('/')[1];
    return (
        <div className={classes['nav-actions']}>
            <form className={classes['form-search']}>
                <input className={classes.input} name="search" type='text' />

                <div className={classes.search}>
                    <img src={'/assets/icons/search.svg'} alt="search" />

                </div>
            </form>
            <Link to={`${location.pathname}/cart`} className={classes.cart}>
                <img src={'/assets/icons/cart.svg'} alt="cart" />
                <span>{1}</span>
            </Link>
        </div>
    )
}

export default NavActions