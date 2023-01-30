import React from 'react';
import Container from '../Container';
import classes from './MainNavigation.module.css'

import NavMenu from './NavMenu';
import NavActions from './NavActions';
import Social from './Social';
  
function MainNavigation({wSize}) {
  return (
    <header className={classes.header}>
      <Container classes='header__container'>
        <div className={classes.menu}>
          
          <Social/>
          <NavMenu windowSize={wSize}/>
          <NavActions />

        </div>
      </Container>

    </header>
  )
  }

export default MainNavigation