import React from 'react'
import Button from '../../../../common/components/UI/Button';
import classes from './Intro.module.css';
import Slider from './Slider';

function Intro({wSize}) {
    return (
        <section id='#intro'>
            <div className={classes['intro-box']}>
                <Slider windowSize={wSize}/>
                <div className={classes['intro-info']}>
                    <h1 className={classes.title}>The best bakery in Toronto</h1>
                    <Button link="/store" size="btn-big">ORDER NOW</Button>
                    
                </div>
            </div>
        </section>

    )
}

export default React.memo(Intro);