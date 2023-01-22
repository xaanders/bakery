import React from 'react'
import classes from './Social.module.css';
function Social() {
    return (

        <div className={classes.social}>
            <div className={classes['social-in']}>
                <img src={'/assets/icons/social/inst.svg'} alt="instagram" />
                <img src={'/assets/icons/social/fb.svg'} alt="fb" />
            </div>

        </div>
    )
}

export default Social