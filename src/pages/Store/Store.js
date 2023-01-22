import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Container from '../../common/components/UI/Container'
import StoreFilter from './components/StoreFilter';
import StoreItems from './components/StoreItems';
import classes from './Store.module.css'
import useHttp from '../../hooks/use-http';
import getAllItems from '../../api/api';


function Store() {
  const dispatch = useDispatch();
  const { sendRequest, loading, error } = useHttp(getAllItems);
  const [isMessage, setIsMessage] = useState(false);
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
          <StoreItems setMessage={setIsMessage} loading={loading} error={error} />
    
        </div>
      </Container>

    </section >

  )
}

export default Store
