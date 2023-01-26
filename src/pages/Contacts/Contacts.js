import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../../common/components/UI/Button'
import Waves from '../../common/components/UI/Waves'
import classes from './Contacts.module.css';
import ContactInfo from './components/ContactInfo';

function Contacts() {
  console.log('contacts');
  const [windowSize] = useRef([window.innerWidth]).current;

  const waveOptions = {
    height: +`${+windowSize > 768 ? 50 : 50}`,
    amplitude: +`${+windowSize > 768 ? 76 : 46}`,
    speed: 0.15,
    points: +`${+windowSize > 768 ? 4 : 3}`
  }

  return (
    <section id="contacts">
      <div className='contacts__container'>
        <div className={classes.box}>
          <ContactInfo/>
          <div className={classes.map}>
            <img src={'/assets/images/map.webp'} alt="map" />
          </div>
        </div>
      </div>
      <div className={classes['wave-box']}>
        <div className={classes.actions}>
          <Button link='/store' size="btn-big">Get Started</Button>
        </div>
        <Waves classesList={classes.wave1} color='#F5F5F5' options={waveOptions}/>
        <div className={classes.img}>
          <img src={'/assets/images/background/contact-us-bg.webp'} alt="contacts-bg"/>
        </div>
      </div>

      <Outlet />
    </section>)
}

export default Contacts