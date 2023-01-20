import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import ScrollToTop from './common/components/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </BrowserRouter>
);
