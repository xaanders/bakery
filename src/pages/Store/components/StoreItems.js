import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom'
import StoreItem from './StoreItem';
import classes from './StoreItems.module.css';

function StoreItems() {
    const cards = useSelector(state => state.allItems);
    const params = useParams();
    let filtredItems = [...cards];

    if(params.filterName !== 'all') {
        filtredItems = cards.filter(item => item.type === params.filterName);
    }

    console.log(filtredItems)
    return (
        <div className={classes['items-container']}>
            <h3 className={classes.title}>Products:</h3>

            <div className={classes.items}>
                {filtredItems.map(item => <StoreItem key={item.id} item={item} />)}
            </div>
            <Outlet />
        </div>
    )
}

export default StoreItems