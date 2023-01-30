import React from 'react'
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css'

const Modal = props => {
    const navigate = useNavigate();
    document.body.classList.add('of-hidden');
    
    const closeModal = (e) => {
        if (e.target.getAttribute('data-close')) {
            navigate(-1);
            document.body.classList.remove('of-hidden');
        }
    }
    

    const content =
        <div className={classes.backdrop} onClick={closeModal} data-close>
            <div className={`${classes.modal} ${classes[props.classType]}`}>
                <div className={classes.scroll}>
                    <span className={classes.cross} data-close>&times;</span>
                    {props.children}
                </div>

            </div>
        </div>;

    return ReactDOM.createPortal(content, document.getElementById('modals'));


}

export default Modal;