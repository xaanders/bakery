import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import Container from '../../common/components/UI/Container'
import StoreFilter from './components/StoreFilter';
import StoreItems from './components/StoreItems';
import LoadingSpinner from '../../common/components/LoadingSpinner';

import classes from './Store.module.css'
import useHttp from '../../hooks/use-http';
import getAllItems from '../../api/api';
import { Outlet } from 'react-router-dom';


function Store({ isMessage, onMessage }) {
  const dispatch = useDispatch();
  const { sendRequest, loading } = useHttp(getAllItems);

  useEffect(() => {
    sendRequest(dispatch);
  }, [dispatch, sendRequest]);

  return (
    <section>
      <Container classes="store__container">
        <div className={classes.message}>
          <span className={`${classes.content} ${isMessage ? classes.active : ''}`}>Successfully added to cart!</span>
        </div>

        <div className={classes.store}>
          <StoreFilter />
          {loading ? <LoadingSpinner /> :
            <StoreItems setMessage={onMessage} />}
          <Outlet />
        </div>
      </Container>

    </section >

  )
}

export default React.memo(Store)
