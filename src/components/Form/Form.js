import React from "react";
import "./Form.css";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
const Form = (props) => {
  const navigate = useNavigate();
  let formValidity = false;
  const pageValue = props.pageValue;
  let firstClasses;
  let secondClasses;
  const validityFunction = (value) => value.trim() !== "";
  const {
    value: firstValue,
    isValid: firstValueIsValid,
    hasError: firstValueHasError,
    valueChangeHandler: firstValueChangeHandler,
    blurChangeHandler: firstValueBlurHandler,
    reset: firstValueReset,
  } = useInput(validityFunction);

  const {
    value: secondValue,
    isValid: secondValueIsValid,
    hasError: secondValueHasError,
    valueChangeHandler: secondValueChangeHandler,
    blurChangeHandler: secondValueBlurHandler,
    reset: secondValueReset,
  } = useInput(validityFunction);

    if (pageValue === "FirstPage") {
      firstClasses = firstValueHasError ? "invalid" : "";
      secondClasses = secondValueHasError ? "invalid" : "";

      if (firstValueIsValid && secondValueIsValid) {
        formValidity = true;
        props.getUser(secondValue);
      }
    } else {
      firstClasses = firstValueHasError ? "invalid" : "";
      if (firstValueIsValid) formValidity = true;
    }
  ;

  const clickHandler=(event)=>{
    event.preventDefault();
    navigate(props["nextPage"],{replace:true});
    props.onClickChange();
    firstValueReset();
    secondValueReset();
  }

  return (
    <form onSubmit= {clickHandler} className="form">
      <label>{props.label1}</label>
      <div className={firstClasses}>
        <input
          spellCheck="false"
          autoComplete="off"
          type="text"
          placeholder={props.placeholder1}
          id="fullName"
          onChange={firstValueChangeHandler}
          onBlur={firstValueBlurHandler}
          value={firstValue}
        ></input>
        <label>{props.label2}</label>
      </div>
      <div className={secondClasses}>
        <input
          spellCheck="false"
          autoComplete="off"
          type="text"
          placeholder={props.placeholder2}
          id="displayName"
          onChange={secondValueChangeHandler}
          onBlur={secondValueBlurHandler}
          value={secondValue}
        ></input>
      </div>
      <button
        disabled={!formValidity}
        type="submit"
        className="buttonStyle"
      >
        {props.button}
      </button>
    </form>
  );
};
export default Form;

