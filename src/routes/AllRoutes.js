import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Description from '../pages/Store/components/description/Description';
import Cart from '../common/components/cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import NotFound from '../pages/Not Found/NotFound';

const Store = React.lazy(() => import('../pages/Store/Store'));
const Home = React.lazy(() => import('../pages/Home/Home'));
const About = React.lazy(() => import('../pages/About/About'));
const Contacts = React.lazy(() => import('../pages/Contacts/Contacts'));


function AllRoutes({
    windowSize,
    messageHandler,
    isMessage,
    
}) {
    return (
        <Routes>
            <Route path="/home" element={<Home windowSize={windowSize} />}>
                <Route path="cart" element={<Cart/>} />
            </Route>
            <Route path="/about" element={<About />}>
                <Route path="cart" element={<Cart/>} />
            </Route>

            <Route path="/store/:filterName" element={<Store onMessage={messageHandler} isMessage={isMessage} />}>
                <Route path="cart" element={<Cart/>} />
                <Route path="/store/:filterName/:itemName" element={<Description messageHandler={messageHandler} />} />
            </Route>

            <Route path="/store/*" element={<Navigate to='/store/all' replace />} />

            <Route path="/contacts" element={<Contacts />}>
                <Route path="cart" element={<Cart/>} />
            </Route>
            <Route path="/checkout" element={<Checkout />}>
                <Route path="cart" element={<Cart/>} />
            </Route>


            <Route path="*" element={<Navigate to='/home' replace />} />
        </Routes>
    )
}

export default AllRoutes