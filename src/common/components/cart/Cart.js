import React from 'react'
import { useSelector } from 'react-redux'
import Modal from '../UI/modal/Modal'
import classes from './Cart.module.css'
import CartItems from './CartItems'
import Button from '../UI/Button'
function Cart() {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    return (
        <Modal classType="cart-modal">

                <form className={classes.form}>
                    <h3 className={classes.title}>Shopping cart</h3>

                    <div className={classes['cart-titles']}>
                        <div className={classes['product-title']}>Product</div>
                        <div className={classes['price-title']}>Price</div>
                        <div className={classes['quantity-title']}>Quantity</div>
                    </div>

                    <CartItems />

                    <div className={classes.breaker}></div>
                    <div className={classes.total}>
                        <span className={classes.Subtotal}>Subtotal</span>
                        <span className={classes.totalPrice}>{totalPrice.toFixed(2) || 0}$</span>
                    </div>
                    <div className={classes.actions}>
                        <button type="button" name="back-btn" className={classes['btn-cancel']} data-close>Continue shopping</button>
                        <Button type="submit" size='btn-small' name="submit-btn">Checkout</Button>
                    </div>
                </form>
        </Modal>
    )
}

export default Cart