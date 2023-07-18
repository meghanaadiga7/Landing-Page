import React from "react";
import Stepper from "react-stepper-horizontal";
import "./Stepper.css";

const StepperComponent = (props) => {
  return (
    <div className="step">
      <Stepper
        steps={[{ label: "" }, { label: "" }, { label: "" }, { label: "" }]}
        activeStep={props.active}
        activeColor="blueviolet"
        completeColor="blueviolet"
        defualtColor="whitesmoke"
        defualtBarColor="whitesmoke"
        completeBarColor="blueviolet"
      ></Stepper>
    </div>
  );
};
export default StepperComponent;
