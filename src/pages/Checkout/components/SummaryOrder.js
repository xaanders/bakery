import React from 'react'
import classes from './SummaryOrder.module.css'


function SummaryOrder({items}) {
    return (
        <div className={classes.order}>
            {items.map(item => {
                return (
                    <div className={classes['order-item']} key={item.name}>
                        <div>{item.name}</div>
                        <div className={classes['order-details-item']}>
                            <span>x {item.amount}</span>
                            <span>{item.price}$</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SummaryOrder