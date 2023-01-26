import React from 'react'
import classes from './Social.module.css';
function Social() {
    return (

        <div className={classes.social}>
            <div className={classes['social-in']}>
                <a href='https://instagram.com/valleriapriima' target="_blank" rel="noreferrer noopener"><img src={'/assets/icons/social/inst.svg'} alt="instagram" /></a>
                <a href='https://facebook.com/' target="_blank" rel="noreferrer noopener"><img src={'/assets/icons/social/fb.svg'} alt="fb" /></a>
            </div>

        </div>
    )
}

export default Social