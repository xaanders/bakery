import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './FooterContacts.module.css'
import { menuItems, gInT, hours } from '../../Contact-data';

function FooterContacts() {
    return (
        <div className={classes.contacts}>
            <div className={`${classes['footer-item']} ${classes['menu-item']}`}>
                <h3 className={classes['item-title']}>Menu</h3>
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
                <h3 className={classes['item-title']}>Hours</h3>
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
                <h3 className={classes['item-title']}>Get In Touch</h3>
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
                <h3 className={classes['item-title']}>Follow us</h3>
                <div className={classes.social}>
                    <a href="https://instagram.com/xaanders1" className={`${classes.icon} _icon-inst`} target="_blank" rel="noreferrer noopener">
                    </a>
                    <a href="https://facebook.com/" className={`${classes.icon} _icon-fb`} target="_blank" rel="noreferrer noopener">
                    </a>
                </div>
            </div>

        </div>
    )
}

export default FooterContacts