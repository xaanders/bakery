import React, { useState } from 'react';
import { Form, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../../common/components/UI/Container';
import classes from './Checkout.module.css';
import CheckoutForm from './components/CheckoutForm';
import Summary from './components/Summary';


function Checkout() {
    const storage = localStorage.getItem('checkout')
    const [isSubmitBtn, setIsSubmitBtn] = useState(false);
    const [guest, setGuest] = useState();
    const {items, totalPrice} = useSelector(state => state.cart);


    if (storage === 'true') {

        const getGuestData = (orderDetails) => {
            const newGuest = [];
            orderDetails.forEach(item => {
                const input = {
                    name: item.inputName,
                    value: item.value
                }
                newGuest.push(input);
            })
            setGuest(newGuest);
            setIsSubmitBtn(true);
        }

        const submitHandler = (e) => {
            e.preventDefault();
            const data = new FormData(e.target);

            console.log(...data);
        }

        return (
            <section id="checkout">
                <Container classes="checkout__container">
                    <h4 className={classes.title}>Guest Checkout</h4>
                    <form className={classes.content} onSubmit={submitHandler}>
                        <CheckoutForm sendData={getGuestData} />
                        <Summary submitBtn={isSubmitBtn} items={items} totalPrice={totalPrice}/>
                    </form>
                </Container>
                <Outlet />
            </section>
        )
    } else {
        return <Navigate to="/store/all" replace />
    }
}

export default Checkout