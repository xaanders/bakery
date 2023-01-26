import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { addCartHandler } from '../../../../api/api';
import Button from '../../../../common/components/UI/Button';
import Modal from '../../../../common/components/UI/modal/Modal'
import classes from './Description.module.css'

function Description({ onMessage }) {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const item = useSelector(state => state.allItems.find(item => item.name.toLowerCase() === params.itemName));

    function closeDescrHandler() {
        addCartHandler(dispatch, item);
        onMessage();
    }

    return (
        <Modal classType="description-modal">
            <div className={classes.box}>
                {item && <div className={classes.content}>
                    <div className={classes.img}>
                        <img className={classes['img-img']} src={item.img} alt={item.name} />
                    </div>
                    <div className={classes.info}>
                        <div className={classes.title}>
                            <h3>{item.name}</h3>
                        </div>
                        <div className={classes.description}>
                            <div className={classes.item}>
                                <h6 className={classes['descr-title']}>Outside</h6>
                                <p className={classes['descr-body']}>Whip cream decorated with ladyfingers around the sides, and cocoa dusted on top.</p>
                            </div>
                            <div className={classes.item}>
                                <h6 className={classes['descr-title']}>Inside</h6>
                                <p className={classes['descr-body']}>Ladyfingers dipped in spiked espresso, filled with layers of shaved chocolate, cocoa and mascarpone cheese.</p>
                            </div>
                        </div>
                    </div>
                </div>}

                <div className={classes.actions}>
                    <Button
                        name="add-to-cart"
                        size="btn-small"
                        onClick={closeDescrHandler}
                        closeModal="true">Add to cart</Button>
                </div>
            </div>
        </Modal>
    )
}

export default Description