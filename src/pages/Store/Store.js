import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom'
import Container from '../../common/components/UI/Container'
import StoreFilter from './components/StoreFilter';
import StoreItems from './components/StoreItems';
import classes from './Store.module.css'

import getAllItems from '../../api/api';

import useHttp from '../../hooks/use-http';

function Store() {
  const location = useLocation()
  const { sendRequest, status } = useHttp(getAllItems);
  const dispatch = useDispatch();

  useEffect(() => {
    sendRequest(dispatch);
  }, [sendRequest, dispatch])

  return (
    <section>
      <Container classes="store__container">
        <div className={classes.message}>
          <span>Successfully added to cart!</span>
        </div>

        <div className={classes.store}>
          <StoreFilter />
          <StoreItems />
        </div>
      </Container>

    </section >

  )
}

export default Store