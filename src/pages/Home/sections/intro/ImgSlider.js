import React, { useState } from 'react'
import classes from './ImgSlider.module.css'


const images = [
    { img: '/assets/images/background/home-bg.jpg', title: 'home', id: 0 },
    { img: '/assets/images/background/home-bg-2.jpg', title: 'home2', id: 1},
    { img: '/assets/images/background/home-bg-3.jpg', title: 'home3', id: 2},
    { img: '/assets/images/background/home-bg-4.jpg', title: 'home4', id: 3},
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