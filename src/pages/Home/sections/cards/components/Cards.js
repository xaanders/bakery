import React from 'react'
import classes from './Cards.module.css';


const cards = [
    { icon: '/assets/icons/home-icons/uniq.svg', title: 'Uniqueness', body: 'Offering a variety of uniquely decorated and delicious bakery products', id: 'uniq' },
    { icon: '/assets/icons/home-icons/exp.svg', title: 'Experience', body: 'Experience and passion is what makes us a favourite among our beloved customers', id: 'exp' },
    { icon: '/assets/icons/home-icons/price.svg', title: 'Prices', body: 'We keep our prices reasonable so you can get a perfect cake for all your special occasions within your budget', id: 'price' },
    { icon: '/assets/icons/home-icons/smile.svg', title: 'Ingredients', body: 'We use the finest ingredients to prepare cakes that not only look attractive but taste heavenly', id: 'smile' }
]

function Cards() {
    return (
        <div className={classes.cards}>
            {cards.map(card => {
                return (
                    <div className={`${classes.card} ${classes[card.id]}`} key={card.id}>
                        <div className={classes['card-in']}>
                            <div className={classes['img-box']}>
                                <div className={`_icon-${card.id} ${classes['card-icon']}`}></div>
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