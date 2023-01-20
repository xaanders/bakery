import React from 'react'
import { Link } from 'react-router-dom'
import classes from './StoreItem.module.css'

function StoreItem({item}) {
    return (
        <div className={classes.item}>
            <div className={classes.img}>
                <img src={item.img} alt={item.title} />
            </div>

            <div className={classes.info}>
                <h4 className={classes['item-title']}>{item.title}</h4>

                <div className={classes.activities}>
                    <Link className={classes.details} to='/'>Details...</Link>
                    <button className={classes['add-to-cart']}>
                        <span></span>
                    </button>
                </div>

            </div>

            <div className={classes.price}>{item.price}$</div>
        </div>
    )
}

export default StoreItem