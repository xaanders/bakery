import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom'
import StoreItem from './StoreItem';
import classes from './StoreItems.module.css';
import LoadingSpinner from '../../../common/components/LoadingSpinner';

function StoreItems({setMessage, error, loading}) {
    const cards = useSelector(state => state.allItems);
    const params = useParams();
    let filtredItems = [...cards];

    if(params.filterName !== 'all') {
        filtredItems = cards.filter(item => item.type === params.filterName);
    }   

    return (
        <div className={classes['items-container']}>
            <h3 className={classes.title}>Products:</h3>
            {loading && <LoadingSpinner/>}
            <div className={classes.items}>
                {filtredItems.map(item => <StoreItem onMessage={setMessage} key={item.id} item={item} />)}
            </div>
            <Outlet />
        </div>
    )
}

export default StoreItems