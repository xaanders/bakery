import React from 'react'
import instSvg from '../../../../assets/icons/social/inst.svg';
import fbSvg from '../../../../assets/icons/social/fb.svg';
import classes from './Social.module.css';
function Social() {
    return (

        <div className={classes.social}>
            <div className={classes['social-in']}>
                <img src={instSvg} alt="instagram" />
                <img src={fbSvg} alt="fb" />
            </div>

        </div>
    )
}

export default Social