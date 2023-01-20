import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.css'

function Button({ content, type = 'button', link = null }) {
  return (
    <>
      {link
        ?
        <Link className={classes['main-btn']} to={link}>{content}</Link >
        :
        <button type={type} className={classes['main-btn']}>
          {content}
        </button>}
    </>
  )
}

export default Button