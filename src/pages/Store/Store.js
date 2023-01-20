import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Container from '../../common/components/UI/Container'
import StoreFilter from './components/StoreFilter';
import StoreItems from './components/StoreItems';
import classes from './Store.module.css'


function Store() {
  const location = useLocation();

  return (
    <section>
      <Container classes="store__container">
        <div className={classes.message}>
          <span>Successfully added to cart!</span>
        </div>

        <div className={classes.store}>
          <StoreFilter/>
          {location.pathname === '/store' && <StoreItems/>}
          <Outlet />

        </div>
      </Container>

    </section >

  )
}

export default Store