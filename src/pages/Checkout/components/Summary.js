import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Summary.module.css'
import Button from '../../../common/components/UI/Button';
import SummaryOrder from './SummaryOrder';



function Summary({submitBtn, items, totalPrice}) {
  const tax = 0.13;
  return (
    <div className={classes.summary}>
      <div className={classes['summary-title']}>
        <h4>Order Summary</h4>
      </div>
      <div className={classes['summary-details']}>
       <SummaryOrder items={items}/>

        <div className={classes['summary-total']}>
          <div className={`${classes.total} ${classes.subtotal}`}>
            <div>Subtotal</div>
            <div>{totalPrice.toFixed(2)}$</div>
          </div>
          <div className={`${classes.total} ${classes.subtotal} ${classes.breaker}`}>
            <div>Tax</div>
            <div>{(totalPrice * tax).toFixed(2)}$</div>
          </div>

          <div className={classes.total}>
            <div>Total</div>
            <div>{(totalPrice * (tax + 1)).toFixed(2)}$</div>
          </div>
        </div>


      </div>
      <div className={classes['actions-summary']}>
        <Link to="/store/">CONTINUE SHOPPING</Link>
        <Button size="btn-big" type="submit" disabled={!submitBtn}>CONFIRM & PAY</Button>
      </div>

    </div>
  )
}

export default Summary