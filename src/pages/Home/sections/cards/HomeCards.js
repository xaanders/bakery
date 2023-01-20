import React from 'react'
import Container from '../../../../common/components/UI/Container'
import classes from './HomeCards.module.css';
import Cards from './components/Cards';


function HomeCards() {
    return (
        <section id="home-cards">
            <Container classes="whycards__container">
                <div className={classes['content-box']}>
                    <div className={classes.question}>
                        <h2 className={classes.title}>Why should you choose us?</h2>
                    </div>
                    <Cards />
                </div>
            </Container>
        </section>
    )
}

export default HomeCards