import React from 'react'
import Footer from './footer/Footer';
import MainNavigation from './navigation/MainNavigation';

function Layout(props) {
    return (
        <>
            <MainNavigation />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout