import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './StoreItem.module.css'
import {addCartHandler} from '../../../api/api';

let timer;



function StoreItem({ item, onMessage }) {

    const dispatch = useDispatch();
    const onAddHandler = () => {
        addCartHandler(dispatch, item);
        message();
    }
    // const cartTotal = useSelector(state => state.cart.totalPrice)

    function message() {
        onMessage(true);

        clearTimeout(timer);
        timer = setTimeout(() => onMessage(false), 5000);
    };




    return (
        <div className={classes.item}>
            <div className={classes.img}>
                <img src={item.img} alt={item.title} />
            </div>

            <div className={classes.info}>
                <h4 className={classes['item-title']}>{item.name}</h4>

                <div className={classes.activities}>
                    <Link className={classes.details} to='/'>Details...</Link>
                    <button className={classes['add-to-cart']} onClick={onAddHandler}>
                        <span></span>
                    </button>
                </div>

            </div>

            <div className={classes.price}>{item.price}$</div>
        </div>
    )
}

export default StoreItem