import React from 'react'
import FilterItem from './FilterItem';
import classes from './StoreFilter.module.css';

const filters = ['bread', 'croissants', 'cakes', 'cupcakes', 'pies', 'danishes', 'donuts'];

function StoreFilter() {
    return (

        <div className={classes['filter-container']}>
            <h3 className={classes.title}>Filters:</h3>
            <div className={classes.filter}>
                {filters.map((item, i) => <FilterItem key={i} item={item}/>)}
            </div>
        </div>
    )
}

export default StoreFilter