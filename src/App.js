import React, { Suspense, useEffect, useState } from 'react'
import LoadingSpinner from './common/components/LoadingSpinner';
import Layout from './common/components/UI/Layout'
import { useDispatch, useSelector } from 'react-redux';
import AllRoutes from './routes/AllRoutes';

let messageTimer;

function App() {
  const [isMessage, setIsMessage] = useState(false);
  const [windowSize, setWindowState] = useState(window.innerWidth);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  function messageHandler() {

    setIsMessage(true);
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => setIsMessage(false), 5000);
    
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowState(window.innerWidth));
    dispatch({ type: "STORAGE" });
  }, [dispatch]);

  return (
    <Layout windowSize={windowSize}>
      <Suspense fallback={<LoadingSpinner />}>
        <AllRoutes
          windowSize={windowSize}
          messageHandler={messageHandler}
          isMessage={isMessage}
          totalPrice={totalPrice} />
      </Suspense>
    </Layout >
  )
}

export default App