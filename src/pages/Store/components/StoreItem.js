import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './StoreItem.module.css'
import { addCartHandler } from '../../../api/api';

function StoreItem({ item, onMessage, detailsLink }) {

    const dispatch = useDispatch();

    const onAddHandler = () => {
        addCartHandler(dispatch, item);
        onMessage();
    }

    return (
        <div className={classes.item}>
            <div className={classes.img}>
                <img src={item.img} alt={item.name} />
            </div>

            <div className={classes.info}>
                <h4 className={classes['item-title']}>{item.name}</h4>

                <div className={classes.activities}>
                    <Link className={classes.details} to={detailsLink}>Details...</Link>
                    <button className={classes['add-to-cart']} name="cart-btn" onClick={onAddHandler}>
                        <span></span>
                    </button>
                </div>

            </div>

            <div className={classes.price}>{item.price}$</div>
        </div>
    )
}

export default StoreItem