import React from 'react'
import Intro from './sections/intro/Intro'
import HomeCards from './sections/cards/HomeCards'
import { Outlet } from 'react-router-dom'

function Home({windowSize}) {
  console.log('home');
  return (
    <React.Fragment>
      <Intro wSize={windowSize}/>
      <HomeCards/>
      <Outlet/>
    </React.Fragment>
  )
}

export default Home