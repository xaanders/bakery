import React from 'react'
import classes from './Cards.module.css';

import uniqSvg from '../../../../../assets/icons/home-icons/uniq.svg';
import expSvg from '../../../../../assets/icons/home-icons/exp.svg';
import priceSvg from '../../../../../assets/icons/home-icons/price.svg';
import smileSvg from '../../../../../assets/icons/home-icons/smile.svg';


const cards = [
    { icon: uniqSvg, title: 'Uniqueness', body: 'Offering a variety of uniquely decorated and delicious bakery products', id: 'uniq' },
    { icon: expSvg, title: 'Experience', body: 'Experience and passion is what makes us a favourite among our beloved customers', id: 'exp' },
    { icon: priceSvg, title: 'Prices', body: 'We keep our prices reasonable so you can get a perfect cake for all your special occasions within your budget', id: 'price' },
    { icon: smileSvg, title: 'Ingredients', body: 'We use the finest ingredients to prepare cakes that not only look attractive but taste heavenly', id: 'smile' }
]


function Cards() {
    return (
        <div className={classes.cards}>
            {cards.map(card => {
                return (
                    <div className={`${classes.card} ${classes[card.id]}`} key={card.id}>
                        <div className={classes['card-in']}>
                            <div className={classes['img-box']}>
                                <div className={`_icon-${card.id}`}></div>
                            </div>
                            <h2 className={classes['card-title']}>{card.title}</h2>
                            <p className={classes['card-body']}>{card.body}</p>
                        </div>

                    </div>);

            })}
        </div>
    )
}

export default Cards