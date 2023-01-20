import React, { useRef } from 'react'
import Container from '../Container'
import Contacts from './FooterContacts'
import classes from './Footer.module.css'
import { logoLight } from '../../Contact-data';
import Wave from 'react-wavify';

function Footer() {
  const [windowSize] = useRef([window.innerWidth]).current;

  return (
    <footer className={classes.footer}>

      <Wave className={classes.wave1} fill='#597266'
        paused={false}
        options={{
          height: 50,
          amplitude: +`${+windowSize > 768 ? 76 : 56}`,
          speed: 0.15,
          points: +`${+windowSize > 768 ? 4 : 3}`
        }} />
      <div className={classes.box}>
        <Container classes="footer__container">

          <div className={classes.content}>
            <div className={classes.logo}>
              <img src={logoLight} alt="Valeria Bakery" />
            </div>
            <Contacts />

          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer