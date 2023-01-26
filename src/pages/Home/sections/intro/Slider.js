import React from 'react'
import ImgSlider from './ImgSlider';
import classes from './Slider.module.css';
import Waves from '../../../../common/components/UI/Waves';

function Slider({ windowSize }) {
    const waveOptions = {
        height: +`${windowSize > 480 ? 50 : 30}`,
        amplitude: +`${windowSize > 480 ? 60 : 30}`,
        speed: 0.15,
        points: 4
    }

    return (
        <div className={classes.slider}>
            <Waves options={waveOptions} classesList={classes.wave1} color='#f5f5f5' />
            <ImgSlider />
            <Waves options={waveOptions} classesList={classes.wave2} color='#f5f5f5' />

        </div>
    )
}

export default Slider