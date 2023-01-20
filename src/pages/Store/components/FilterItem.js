import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './FilterItem.module.css'

function FilterItem(props) {
  return (
    <div className={classes.box}>
      <NavLink className={navData =>
        navData.isActive ? `${classes.link} ${classes.active}` : classes.link}
        to={`filter/${props.item}`}>
        {props.item}
      </NavLink>
    </div>
  )
}

export default FilterItem