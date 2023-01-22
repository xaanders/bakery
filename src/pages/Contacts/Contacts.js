import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../../common/components/UI/Button'
import Wave from 'react-wavify';


import classes from './Contacts.module.css';
import ContactInfo from './components/ContactInfo';

function Contacts() {

  const [windowSize] = useRef([window.innerWidth]).current;

  return (
    <section id="contacts">
      <div className='contacts__container'>
        <div className={classes.box}>
          <ContactInfo/>
          <div className={classes.map}>
            <img src={'/assets/images/map.jpg'} alt="map" />
          </div>
        </div>
      </div>
      <div className={classes['wave-box']}>
        <div className={classes.actions}>
          <Button content="Get Started" link='/store'/>
        </div>
        <Wave className={classes.wave1} fill='#F5F5F5'
          paused={false}
          options={{
            height: +`${+windowSize > 768 ? 50 : 50}`,
            amplitude: +`${+windowSize > 768 ? 76 : 46}`,
            speed: 0.15,
            points: +`${+windowSize > 768 ? 4 : 3}`
          }} />

        <div className={classes.img}>
          <img src={'/assets/images/background/contact-us-bg.jpg'} alt="contacts-bg"/>
        </div>
      </div>

      <Outlet />
    </section>)
}

export default Contacts