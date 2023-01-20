import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Cart from './common/components/cart/Cart'
import Layout from './common/components/UI/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Store from './pages/Store/Store'
import Contacts from './pages/Contacts/Contacts'
import StoreItems from './pages/Store/components/StoreItems'

function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/store" element={<Store />}>
          <Route path="cart" element={<Cart />} />

          <Route path="filter/:filterName" element={<StoreItems />}>
            <Route path="cart" element={<Cart />} />

          </Route>
        </Route>
        <Route path="/contacts" element={<Contacts />}>
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<Navigate to='/home' replace />} />
      </Routes>
    </Layout >
  )
}

export default App