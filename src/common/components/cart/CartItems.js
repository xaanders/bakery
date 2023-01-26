import React from 'react'
import { useDispatch } from 'react-redux';
import classes from './CartItems.module.css'
import { useSelector } from 'react-redux'
import {addCartHandler} from '../../../api/api';
function CartItems() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

    const onAddHandler = (item) => {
        addCartHandler(dispatch, item)
    }

    const removeCartHandler = (item) => {
        dispatch({type: "MINUS", id: item.id })
    }
    const removeItem = (item) => {
        dispatch({type: "REMOVE", id: item.id })
    }

    return (
        <div className={classes.items}>
            {items.map(item => {
                return (
                    <div key={item.id} className={classes['cart-item']}>
                        <div className={classes['img-box']}>
                            <img src={item.img} alt="cake" />
                        </div>

                        <div className={classes.name}>
                            <p>{item.name}</p>
                        </div>
                        <div className={classes.price}>

                            <p>{item.price}</p>
                        </div>

                        <div className={classes.quantity}>
                            <button type="button" name="remove-btn" onClick={()=> removeCartHandler(item)}>-</button>
                            <span>{item.amount}</span>
                            <button type="button" name="add-btn" onClick={() => onAddHandler(item)}>+</button>
                        </div>
                        <button type="button" name="cross-btn" className={classes.cross} onClick={() => removeItem(item)}>&times;</button>


                    </div>
                )

            })}


        </div>
    )
}

export default CartItems