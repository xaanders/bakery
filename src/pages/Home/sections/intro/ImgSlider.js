import React, { useState } from 'react'
import classes from './ImgSlider.module.css'
import homeBg from '../../../../assets/images/background/home-bg.jpg';
import homeBg2 from '../../../../assets/images/background/home-bg-2.jpg';
import homeBg3 from '../../../../assets/images/background/home-bg-3.jpg';
import homeBg4 from '../../../../assets/images/background/home-bg-4.jpg';

const images = [
    { img: homeBg, title: 'home', id: 0 },
    { img: homeBg2, title: 'home2', id: 1},
    { img: homeBg3, title: 'home3', id: 2},
    { img: homeBg4, title: 'home4', id: 3},
];

function ImgSlider() {
    let [currentIndex, setCurrentIndex] = useState(0);
    setTimeout(() => {
        if (currentIndex >= 0 && currentIndex !== images.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        }
    }, 5000)


    return (
        <div className={classes.slider}>
            {images.map(img => {
                return <img className={currentIndex === img.id ? classes.animate : ''} src={img.img} alt={img.title} key={img.id} />
            })}
        </div>
    )
}

export default ImgSlider