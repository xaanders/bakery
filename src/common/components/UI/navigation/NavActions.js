import React from 'react'
import classes from './NavActions.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function NavActions() {
    const location = useLocation();
    const countItems = useSelector(state => state.cart.items);
    
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
                <span>{countItems.length || 0}</span>
            </Link>
        </div>
    )
}

export default NavActions