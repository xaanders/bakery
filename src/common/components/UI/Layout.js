import React from 'react'
import Footer from './footer/Footer';
import MainNavigation from './navigation/MainNavigation';

function Layout(props) {
    return (
        <>
            <MainNavigation wSize={props.windowSize}/>
            <main>{props.children}</main>
            <Footer wSize={props.windowSize}/>
        </>
    )
}

export default Layout