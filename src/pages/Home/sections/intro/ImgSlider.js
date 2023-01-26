import React, { useEffect, useState } from 'react'
import classes from './ImgSlider.module.css'


const images = [
    { img: '/assets/images/background/home-bg.webp', title: 'home', id: 0 },
    { img: '/assets/images/background/home-bg-2.webp', title: 'home2', id: 1},
    { img: '/assets/images/background/home-bg-3.webp', title: 'home3', id: 2},
    { img: '/assets/images/background/home-bg-4.webp', title: 'home4', id: 3},
];

function ImgSlider() {
    let [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=> {
        setTimeout(() => {
            setCurrentIndex(prev =>{
                if(prev >= 0 && prev !== images.length - 1) {
                    return prev + 1;
                }
                if(prev === images.length - 1) {
                    return 0;
                }
            });
        }, 5000)
    }, [currentIndex])


    return (
        <div className={classes.slider}>
            {images.map(img => {
                return <img className={currentIndex === img.id ? classes.animate : ''} src={img.img} alt={img.title} key={img.id} />
            })}
        </div>
    )
}

export default ImgSlider