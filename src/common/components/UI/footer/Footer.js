import React, { useRef } from 'react'
import Container from '../Container'
import Contacts from './FooterContacts'
import classes from './Footer.module.css'
import { logoLight } from '../../Contact-data';
import Wave from 'react-wavify';
import { Link } from 'react-router-dom';

function Footer() {
  const [windowSize] = useRef([window.innerWidth]).current;

  return (
    <footer className={classes.footer}>

      <Wave className={classes.wave1} fill='#597266'
        paused={false}
        options={{
          height: +`${+windowSize > 480 ? 50 : 30}`,
          amplitude: +`${+windowSize > 768 ? 76 : 56}`,
          speed: 0.15,
          points: +`${+windowSize > 768 ? 4 : 3}`
        }} />
      <div className={classes.box}>
        <Container classes="footer__container">

          <div className={classes.content}>
            <div className={classes.logo}>
              <Link to="/home"><img className={classes['logo-img']} src={'/assets/icons/bakery-logo-light.svg'} alt="Valeria Bakery" /></Link>
            </div>
            <Contacts />

          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer