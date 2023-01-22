import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Cart from './common/components/cart/Cart'
import LoadingSpinner from './common/components/LoadingSpinner';
import Layout from './common/components/UI/Layout'
// import Home from './pages/Home/Home'
// import About from './pages/About/About'
// import Store from './pages/Store/Store'
// import Contacts from './pages/Contacts/Contacts'

const Store = React.lazy(() => import('./pages/Store/Store'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Contacts = React.lazy(() => import('./pages/Contacts/Contacts'));

function App() {
  return (

    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/store/:filterName" element={<Store />}>
            <Route path="cart" element={<Cart />} />
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