import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import ScrollToTop from './common/components/ScrollToTop'
import store from './store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <Provider store={store}>
                <App />
        </Provider>
    </BrowserRouter>
);
