import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoadingSpinner from './common/components/LoadingSpinner';
import Layout from './common/components/UI/Layout'
import Description from './pages/Store/components/description/Description';
import Cart from './common/components/cart/Cart';


const Store = React.lazy(() => import('./pages/Store/Store'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Contacts = React.lazy(() => import('./pages/Contacts/Contacts'));

let messageTimer;


function App() {

  const [isMessage, setIsMessage] = useState(false);
  const [windowSize, setWindowState] = useState(window.innerWidth);

  function messageHandler() {
    setIsMessage(true);
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => setIsMessage(false), 5000);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowState(window.innerWidth));
  }, []);

  return (
    <Layout windowSize={windowSize}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/home" element={<Home windowSize={windowSize} />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/store/:filterName" element={<Store onMessage={messageHandler} isMessage={isMessage}/>}>
            <Route path="cart" element={<Cart />} />
            <Route path="/store/:filterName/:itemName" element={<Description onMessage={messageHandler}/>} />
          </Route>
          <Route path="/store/*" element={<Navigate to='/store/all' replace />} />
          <Route path="/contacts" element={<Contacts />}>
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<Navigate to='/home' replace />} />
        </Routes>
      </Suspense>
    </Layout >
  )
}

export default App