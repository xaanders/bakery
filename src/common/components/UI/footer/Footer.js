import React from 'react'
import Container from '../Container'
import Contacts from './FooterContacts'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom';
import Waves from '../Waves';

function Footer({ wSize }) {
  const waveOptions = {
    height: wSize > 480 ? 50 : 30,
    amplitude: wSize > 768 ? 76 : 36,
    speed: 0.15,
    points: wSize > 768 ? 4 : 3
  }


  return (
    <footer className={classes.footer}>


      <Waves classesList={classes.wave1} opitons={waveOptions} color='#597266' />
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