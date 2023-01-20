import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../common/components/UI/Container'
import classes from './About.module.css'

const about = [
  {
    img: require('../../assets/images/about/crew.jpg'),
    classes: classes.what,
    title: 'What are we doing?',
    body: 'I adore seeing how people enjoy food that I cooked by myself. Our bakery has just one location with a big kitchen inside and we cook almost all the bakery according to the Italian recipes. Also, you can enjoy fragrant coffee or tea with the freshest croissant sitting inside on the table. I promise you will never regret experiencing our products!'
  },
  {
    img: require('../../assets/images/about/shop.jpg'),
    classes: classes.who,
    title: 'Who are we?',
    body: "Hi there! My name is Mark and I am a huge fan of cooking and especially baking. Thanks to my grandmother whose name is Valeria. She has taught me everything that I know till today. I’ve baked since 10 years old and baking is my first and biggest passion. So because of all that, I laughed at the bakery which has my grandmother's name."
  }
]
function About() {
  return (
    <React.Fragment>
      <section id="about">
        <Container classes="about__container">
          <div className={classes.box}>
            {about.map((item) => {
              return (
                <div className={item.classes}>
                  <div className={classes.img}>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className={classes.info}>
                    <h3 className={classes.title}>{item.title}</h3>
                    <p className={classes.text}>{item.body}</p>
                  </div>
                </div>
              );
            })}

          </div>
        </Container>
      </section>
      <Outlet />
    </React.Fragment >)
}

export default About