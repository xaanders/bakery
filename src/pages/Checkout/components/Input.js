import React, { useRef, useState } from 'react'

function Input({ item, classes, reducer, options }) {
  const enteredValue = useRef();
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  let inputIsInValid = inputIsTouched && !inputIsValid;


  const blurHandler = () => {
    setInputIsTouched(true);
    setIsFocused(false);
    reducer({
      type: "INPUT", item: {
        inputName: item.name,
        isValid: inputIsValid,
        value: enteredValue.current.value
      }
    });
  }

  const inputHandler = () => {
    const validating = item.check(enteredValue.current.value);
    if (validating) {
      setInputIsValid(true);
    } else {
      setInputIsValid(false);
      return;
    }
  }
  const focusHandler = (e) => {
    setIsFocused(true)
  }

  const boxClasses = `${classes['input-box']} ${item.small ? classes['small-input'] : ''} ${isFocused ? classes.focus : ''} ${inputIsInValid ? classes.invalid : ''} ${inputIsValid ? classes.valid : ''}`
  return (
    <div className={classes.box}>
      <label htmlFor={item.name} className={isFocused ? classes.focus : ''}>{item.label}</label>
      <div className={boxClasses}>
        <input
          type={item.type}
          id={item.name}
          name={item.name}
          minLength={item.minLength}
          maxLength={item.maxLength}
          inputMode={item.inputMode}
          autoComplete={item.autoComplete}
          placeholder={item.placeholder}
          required
          onWheel={(e) => e.target.blur()}
          ref={enteredValue}
          onChange={inputHandler}
          onBlur={blurHandler}
          onFocus={focusHandler}
          className={`${!item.small ? classes['details-input'] : ''}`} />
        <div className={classes.img}>
          {inputIsInValid && !isFocused && <img src="/assets/icons/validation/no.svg" alt="no" />}
          {inputIsValid && !isFocused && <img src="/assets/icons/validation/yes.svg" alt="yes" />}
        </div>
      </div>
      <div className={classes['message-box']}>
        {inputIsInValid && !isFocused && <p className={classes.message}>Please, enter correct information</p>}
      </div>
    </div>
  )
}

export default Input