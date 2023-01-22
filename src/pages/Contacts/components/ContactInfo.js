import React from 'react'
import { gInT, hours } from '../../../common/components/Contact-data';
import classes from './ContactInfo.module.css'

function ContactInfo() {
  return (
    <div className={classes.info}>
    <div className={classes['contact-item']}>
      <h3 className={classes['contact-title']}>Contact Us</h3>
      <div className={classes['contact-info']}>
        {gInT.map(item => {
          return <div className={classes.details} key={item.id}>
            <img src={item.contactIcon} alt="icon" />
            <span className={classes.body}>{item.body}</span>
          </div>
        })}
      </div>

    </div>

    <div className={classes['contact-item']}>

      <h3 className={classes['contact-title']}>Hours</h3>
      <div className={classes['hours-info']}>
        {hours.map(item => {
          return <div className={classes.hours} key={item.id}>
            <span className={classes.day}>{item.fullDay}</span>
            <span className={classes.time}>{item.time}</span>
          </div>
        })}
      </div>
    </div>
  </div>
  )
}

export default ContactInfo