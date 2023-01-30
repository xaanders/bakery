import React, { useReducer } from 'react'
import classes from './CheckoutForm.module.css';
import Input from './Input';

const guestDetails = [
    {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        check: (value) => value.trim().length > 6 && value.search(/\d/g)
    },
    {
        name: 'phone',
        label: 'Mobile Number',
        type: 'number',
        check: (value) => value.length > 6
    },
    {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        check: (value) => value.trim().length > 6 && value.includes('@')
    },
]
const cardInputs = [
    {
        name: "card-number",
        type: 'text',
        label: 'Card Number',
        minLength: "10",
        maxLength: "16",
        inputMode: "numeric",
        autoComplete: "card-number",
        placeholder: '1234-5678-9123-4567',
        check: (value) => value.trim().length > 10 && !value.search(/\d/g)
    },
    {
        name: "ex-date",
        type: "text",
        label: "Expiry Date",
        minLength: "5",
        maxLength: "5",
        inputMode: "numeric",
        autoComplete: "ex-date",
        placeholder: 'MM/YY',
        small: true,
        check: (value) => value.trim().length === 5 && !value.search(/\d/g)
    },
    {
        name: "card-code",
        type: "text",
        label: "CVV/CID",
        minLength: "3",
        maxLength: "3",
        inputMode: "numeric",
        autoComplete: "card-code",
        placeholder: '123',
        small: true,
        check: (value) => value.trim().length === 3 && !value.search(/\d/g)
    }
]

const formReducer = (state, action) => {
    if (action.type === "INPUT") {
        let items = { ...state, inputs: [...state.inputs] };
        const currentItem = items.inputs.find(item => item.inputName === action.item.inputName);
        let updatedItems;

        if (currentItem) {
            currentItem.isValid = action.item.isValid;

            updatedItems = { ...items };

        } else {
            updatedItems = {
                ...items,
                inputs: [...items.inputs, action.item]
            }
        }

        if (updatedItems.inputs.length === guestDetails.length + cardInputs.length) {
            let valid = true;

            updatedItems.inputs.forEach(item => {
                if (!item.isValid) {
                    valid = false;
                }
            });

            updatedItems = {
                formIsValid: valid,
                inputs: [...updatedItems.inputs]
            }
        }

        return updatedItems;
    } else {
        return state
    }
}

function CheckoutForm({ sendData }) {
    const [state, dispatch] = useReducer(formReducer, { formIsValid: false, inputs: [] });

    const confirmation = (e) => {
        e.preventDefault();
        sendData(state.inputs);
    }

    return (
        <div className={classes.info}>

            <div className={`${classes['details-item']} ${classes.details}`}>
                <div className={classes['title-box']}>
                    <span className={classes.number}>1</span>
                    <h5 className={classes['details-title']}>Guest Details</h5>
                </div>
                {guestDetails.map((input) => {
                    return (
                        <Input item={input} classes={classes} reducer={dispatch} key={input.name} />
                    );
                })}
            </div>

            <div className={`${classes['details-item']} ${classes.details}`}>
                <div className={classes['title-box']}>
                    <span className={classes.number}>2</span>
                    <h5 className={classes['details-title']}>Pick up Details</h5>
                </div>
                <div className={classes.inputs}>
                    <div className={classes.box}>
                        <label htmlFor="details">(Optional)</label>
                        <div className={classes['input-box']}>
                            <input type="text" id="details" name="pickup-details" className={classes['details-input']} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${classes['details-item']} ${classes.pay}`}>
                <div className={classes['title-box']}>
                    <span className={classes.number}>3</span>
                    <h5 className={classes['details-title']}>Payment Method</h5>
                </div>
                <div className={classes.inputs}>
                    {cardInputs.map(item => {
                        return item.name === "card-number" &&
                            <Input key={item.name}
                                item={item}
                                classes={classes}
                                reducer={dispatch}
                            />
                    })}


                    <div className={classes['card-details']}>
                        {cardInputs.map(item => {
                            return item.name !== "card-number" &&
                                <Input key={item.name}
                                    item={item}
                                    classes={classes}
                                    reducer={dispatch}
                                />
                        })}

                    </div>

                </div>

            </div>

            <div className={classes.actions}>
                <button className='btn btn-big' type="button" onClick={confirmation} disabled={!state.formIsValid}>CONFIRM INFORMATION</button>
            </div>
        </div>
    )
}

export default CheckoutForm