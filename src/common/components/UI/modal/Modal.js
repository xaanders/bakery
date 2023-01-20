import React, { useContext } from 'react'
import ReactDOM from "react-dom";
import CartContext from '../../../../store/CartContext';
import classes from './Modal.module.css'

const Modal = props => {
    document.body.style.overflow = "hidden"
    const ctx = useContext(CartContext);
    
    const content =
        <div className={classes.backdrop} onClick={ctx.closeModal} data-close>
            <div className={classes.modal}>
                <div className={classes.scroll}>
                    <span className={classes.cross} data-close>&times;</span>
                    {props.children}
                </div>

            </div>
        </div>;

    return ReactDOM.createPortal(content, document.getElementById('modals'));


}

export default Modal;