import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './FooterContacts.module.css'
import { menuItems, instSvg, fbSvg, gInT, hours } from '../../Contact-data';

function FooterContacts() {
    return (
        <div className={classes.contacts}>
            <div className={`${classes['footer-item']} ${classes['menu-item']}`}>
                <h3>Menu</h3>
                <ul className={classes['menu-info']}>
                    {menuItems.map(item => {
                        return <li key={item.id}>
                            <NavLink className={navData => {
                                return navData.isActive
                                    ? `${classes['link-item']} ${classes.active}`
                                    : classes['link-item'];
                            }} to={item.url}>{item.navTitle}</NavLink>
                        </li>
                    })}
                </ul>
            </div>

            <div className={`${classes['footer-item']} ${classes['hours-item']}`}>
                <h3>Hours</h3>
                <div className={classes['hours-info']}>
                    {hours.map(item => {
                        return <div className={classes.hours} key={item.id}>
                            <span className={classes.day}>{item.day}</span>
                            <span className={classes.time}>{item.time}</span>
                        </div>
                    })}
                </div>
            </div>
            <div className={`${classes['footer-item']} ${classes['get-item']}`}>
                <h3>Get In Touch</h3>
                <div className={classes['contact-info']}>
                    {gInT.map(item => {
                        return <div className={classes.details} key={item.id}>
                            <img src={item.icon} alt="icon" />
                            <span>{item.body}</span>
                        </div>
                    })}
                </div>

            </div>

            <div className={`${classes['footer-item']} ${classes['follow-item']}`}>
                <h3>Follow us</h3>
                <div className={classes.social}>
                    <a href="https://instagram.com/xaanders1" target="_blank" rel="noreferrer noopener"><img src={'/assets/icons/social/footer-social/inst.svg'}  alt="instagram" /></a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><img src={"/assets/icons/social/footer-social/fb.svg"} alt="facebook"/></a>
                </div>
            </div>

        </div>
    )
}

export default FooterContacts