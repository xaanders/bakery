import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Button from '../../common/components/UI/Button'
import Wave from 'react-wavify';

import { gInT, hours } from '../../common/components/Contact-data';
import map from '../../assets/images/map.jpg';

import classes from './Contacts.module.css';

function Contacts() {

  const [windowSize] = useRef([window.innerWidth]).current;

  return (
    <section id="contacts">
      <div className='contacts__container'>
        <div className={classes.box}>
          <div className={classes.info}>
            <div className={classes['contact-item']}>
              <h3>Contact Us</h3>
              <div className={classes['contact-info']}>
                {gInT.map(item => {
                  return <div className={classes.details} key={item.id}>
                    <img src={item.contactIcon} alt="icon" />
                    <span className={classes.body}>{item.body}</span>
                  </div>
                })}
              </div>

            </div>

            <div className={classes['contact-item']}>

              <h3>Hours</h3>
              <div className={classes['hours-info']}>
                {hours.map(item => {
                  return <div className={classes.hours} key={item.id}>
                    <span className={classes.day}>{item.fullDay}</span>
                    <span className={classes.time}>{item.time}</span>
                  </div>
                })}
              </div>
            </div>
          </div>

          <div className={classes.map}>
            <img src={map} alt="map" />
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
            amplitude: +`${+windowSize > 768 ? 76 : 56}`,
            speed: 0.15,
            points: +`${+windowSize > 768 ? 4 : 3}`
          }} />

        <div className={classes.img}>
        </div>
      </div>

      <Outlet />
    </section>)
}

export default Contacts