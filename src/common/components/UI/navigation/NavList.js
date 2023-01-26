import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MenuItems from './MenuItems';
import classes from './NavList.module.css';


function NavList({ windowSize }) {
    const [burgerActive, setBurgerActive] = useState(false);

    const location = useLocation().pathname;
    const btnHandler = useCallback(function handler() {
        if (windowSize < 480) {
            setBurgerActive(b => {
                if (b) {
                    document.body.classList.remove('of-hidden')
                } else if (!b) {
                    document.body.classList.add('of-hidden');
                }
                return !b;
            });
        }

    }, [setBurgerActive, windowSize])

    useEffect(() => {
        setBurgerActive(b => b ? false : b);
    }, [location]);

    useEffect(() => {
        if (windowSize > 480 && burgerActive) {
            document.body.classList.remove('of-hidden')
        }
    }, [windowSize, burgerActive])

    const activeClass = burgerActive ? classes.active : '';
    return (
        <nav className={classes.nav}>
            <button className={`${classes['burger-btn']} ${activeClass}`} name="burger-btn" onClick={btnHandler} >
                <span></span>
            </button>
            <div className={`${classes.scroll} ${activeClass}`} onClick={btnHandler}>
               <MenuItems burgerActive={burgerActive}/>

            </div>
        </nav>

    )
}

export default NavList