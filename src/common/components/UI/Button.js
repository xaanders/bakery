import React from 'react'
import { Link } from 'react-router-dom'

function Button({ children, type = 'button', link = null, size, onClick, disabled}) {
  const btnClass = `btn ${size}`;
  return (
    <>
      {link
        ?
        <Link className={btnClass} to={link}>{children}</Link >
        :
        <button type={type} name="content-btn" className={btnClass} onClick={onClick} disabled={disabled} >
          {children}
        </button>}
    </>
  )
}

export default Button