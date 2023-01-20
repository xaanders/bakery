import React, { useContext } from 'react'
import CartContext from '../../../store/CartContext'
import Modal from '../UI/modal/Modal'
import classes from './Cart.module.css'
import CartItems from './CartItems'

function Cart() {
    const ctx = useContext(CartContext);
    function closeHandler() {
        ctx.closeModal();
    }
    return (
        <Modal>
            <form className={classes.form}>
                <h3 className={classes.title}>Shopping cart</h3>

                <div className={classes['cart-titles']}>
                    <div className={classes['product-title']}>Product</div>
                    <div className={classes['price-title']}>Price</div>
                    <div className={classes['quantity-title']}>Quantity</div>
                </div>

                <CartItems/>
                <div className={classes.breaker}></div>
                <div className={classes.total}>
                    <span className={classes.Subtotal}>Subtotal</span>
                    <span className={classes.totalPrice}>{85}$</span>
                </div>
                <div className={classes.actions}>
                    <button type="button" className={classes['btn-cancel']} data-close onClick={closeHandler}>Continue shopping</button>
                    <button type="submit" className={classes['btn-submit']}>Checkout</button>
                </div>
            </form>
        </Modal>
    )
}

export default Cart