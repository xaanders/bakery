import React from 'react'
import ImgSlider from './ImgSlider';
import Wave from 'react-wavify';

import classes from './Slider.module.css';

function Slider() {
    return (
        <div className={classes.slider}>

            <Wave className={classes.wave1} fill='#f5f5f5'
                paused={false}
                options={{
                    height: 50,
                    amplitude: 60,
                    speed: 0.15,
                    points: 4
                }} />

            <ImgSlider />

            <Wave className={classes.wave2} fill='#f5f5f5'
                paused={false}
                options={{
                    height: 50,
                    amplitude: 60,
                    speed: 0.15,
                    points: 4
                }} />
        </div>
    )
}

export default Slider