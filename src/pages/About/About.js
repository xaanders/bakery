import React from 'react'
import { Outlet } from 'react-router-dom'
import Button from '../../common/components/UI/Button'
import Container from '../../common/components/UI/Container'
import classes from './About.module.css'
import AboutItems from './components/AboutItems'


function About() {

  return (
    <React.Fragment>
      <section id="about">
        <Container classes="about__container">
          <div className={classes.box}>
            <AboutItems />
          </div>

          <div className={classes.actions}>
            <Button className={classes['link-button']} size='btn-big' link='/store'>Go to store</Button>
          </div>

        </Container>
      </section>
      <Outlet />
    </React.Fragment >)
}

export default About