import React from 'react'
import { Outlet } from 'react-router-dom'
import StoreItem from './StoreItem';
import classes from './StoreItems.module.css';
// import cartSvg from '../../../assets/icons/cart.svg';
const cards = [
    {
        title: 'Tiramisu',
        img: require('../../../assets/images/products/1.jpg'),
        price: 35,
        id: Math.random() * 10000
    },
    {
        title: 'Gelato',
        img: require('../../../assets/images/products/2.jpg'),
        price: 39,
        id: Math.random() * 10000

    },
    {
        title: 'Basio',
        img: require('../../../assets/images/products/3.jpg'),
        price: 24,
        id: Math.random() * 10000

    },
    {
        title: 'Plain',
        img: require('../../../assets/images/products/4.jpg'),
        price: 30,
        id: Math.random() * 10000

    },
    {
        title: 'Rum',
        img: require('../../../assets/images/products/5.jpg'),
        price: 24,
        id: Math.random() * 10000

    },
    {
        title: 'Mixed Berry',
        img: require('../../../assets/images/products/6.jpg'),
        price: 35,
        id: Math.random() * 10000

    },
    {
        title: 'Nutella',
        img: require('../../../assets/images/products/7.jpg'),
        price: 35,
        id: Math.random() * 10000

    },
    {
        title: 'Millefoglie',
        img: require('../../../assets/images/products/8.jpg'),
        price: 35,
        id: Math.random() * 10000

    },
    {
        title: 'Lemon Curd',
        img: require('../../../assets/images/products/9.jpg'),
        price: 25,
        id: Math.random() * 10000

    },
    {
        title: 'Tiramisu',
        img: require('../../../assets/images/products/1.jpg'),
        price: 35,
        id: Math.random() * 10000

    },
    {
        title: 'Gelato',
        img: require('../../../assets/images/products/2.jpg'),
        price: 39,
        id: Math.random() * 10000

    },
    {
        title: 'Basio',
        img: require('../../../assets/images/products/3.jpg'),
        price: 24,
        id: Math.random() * 10000

    },
    {
        title: 'Plain',
        img: require('../../../assets/images/products/4.jpg'),
        price: 30,
        id: Math.random() * 10000

    },
    {
        title: 'Rum',
        img: require('../../../assets/images/products/5.jpg'),
        price: 24,
        id: Math.random() * 10000

    },
    {
        title: 'Mixed Berry',
        img: require('../../../assets/images/products/6.jpg'),
        price: 35,
        id: Math.random() * 10000

    },
    {
        title: 'Nutella',
        img: require('../../../assets/images/products/7.jpg'),
        price: 35,
        id: Math.random() * 10000

    },
    {
        title: 'Millefoglie',
        img: require('../../../assets/images/products/8.jpg'),
        price: 35,
        id: Math.random() * 10000

    },
    {
        title: 'Lemon Curd',
        img: require('../../../assets/images/products/9.jpg'),
        price: 25,
        id: Math.random() * 10000

    },
]
function StoreItems() {
    return (
        <div className={classes['items-container']}>
            <h3 className={classes.title}>Products:</h3>

            <div className={classes.items}>
                {cards.map(item => <StoreItem key={item.id} item={item} />)}
            </div>
            <Outlet />
        </div>
    )
}

export default StoreItems