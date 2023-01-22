import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

const CartContext = createContext({
    closeModal: () => { },
 
});

export function CartContextProvider(props) {

    const navigate = useNavigate();
    const closeModal = (e) => {
        if (e.target.getAttribute('data-close')) {
            navigate(-1);
            document.body.style.overflow = "auto"
        }
    }

    const ctxValue = {
        closeModal: closeModal,       
    }

    return (
        <CartContext.Provider value={ctxValue}>{props.children}</CartContext.Provider>
    )
}

export default CartContext