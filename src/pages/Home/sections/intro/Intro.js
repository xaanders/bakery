import React from 'react'
import Button from '../../../../common/components/UI/Button';
import classes from './Intro.module.css';
import Slider from './Slider';

function Intro() {
    return (
        <section id='#intro'>
            <div className={classes['intro-box']}>
                <Slider />
                <div className={classes['intro-info']}>
                    {/* <div className={classes.gradient}><span></span></div> */}

                    <h1 className={classes.title}>The best bakery in Toronto</h1>
                    <Button content={'Order now'} link="/store"/>
                   
                </div>
            </div>
        </section>

    )
}

export default Intro