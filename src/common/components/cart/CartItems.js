import React from 'react'
import classes from './CartItems.module.css'

function CartItems() {
    return (
        <div className={classes.items}>
            <div className={classes['cart-item']}>
                <div className={classes['img-box']}>
                    <img src={require('../../../assets/images/products/1.jpg')} alt="cake" />
                </div>

                <div className={classes.name}>
                    <p>Berry Cake</p>
                </div>
                <div className={classes.price}>

                    <p>24$</p>
                </div>

                <div className={classes.quantity}>
                    <button type="button">+</button>
                    <span>{1}</span>
                    <button type="button">-</button>
                </div>
                <button type="button" className={classes.cross}>&times;</button>


            </div>
            <div className={classes['cart-item']}>
                <div className={classes['img-box']}>
                    <img src={require('../../../assets/images/products/1.jpg')} alt="cake" />
                </div>

                <div className={classes.name}>
                    <p>Berry Cake</p>
                </div>
                <div className={classes.price}>

                    <p>24$</p>
                </div>

                <div className={classes.quantity}>
                    <button type="button">+</button>
                    <span>{1}</span>
                    <button type="button">-</button>
                </div>
                <button type="button" className={classes.cross}>&times;</button>


            </div>
            <div className={classes['cart-item']}>
                <div className={classes['img-box']}>
                    <img src={require('../../../assets/images/products/1.jpg')} alt="cake" />
                </div>

                <div className={classes.name}>
                    <p>Berry Cake</p>
                </div>
                <div className={classes.price}>

                    <p>24$</p>
                </div>

                <div className={classes.quantity}>
                    <button type="button">+</button>
                    <span>{1}</span>
                    <button type="button">-</button>
                </div>
                <button type="button" className={classes.cross}>&times;</button>


            </div>
            <div className={classes['cart-item']}>
                <div className={classes['img-box']}>
                    <img src={require('../../../assets/images/products/1.jpg')} alt="cake" />
                </div>

                <div className={classes.name}>
                    <p>Berry Cake</p>
                </div>
                <div className={classes.price}>

                    <p>24$</p>
                </div>

                <div className={classes.quantity}>
                    <button type="button">+</button>
                    <span>{1}</span>
                    <button type="button">-</button>
                </div>
                <button type="button" className={classes.cross}>&times;</button>


            </div>
        </div>
    )
}

export default CartItems