import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.css'

function Button({ children, type = 'button', link = null, size, onClick = null, closeModal = false }) {
  const btnClass = `${classes['btn']} ${classes[size]}`;
  return (
    <>
      {link
        ?
        <Link className={btnClass} to={link}>{children}</Link >
        :
        <button type={type} name="content-btn" className={btnClass} data-close={closeModal} onClick={onClick}>
          {children}
        </button>}
    </>
  )
}

export default Button