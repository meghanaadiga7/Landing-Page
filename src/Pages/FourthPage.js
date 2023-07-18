import React,{useEffect} from "react";
import Logo from "../components/Logo/Logo";
import StepperComponent from "../components/Stepper/Stepper";
import Heading from "../components/Heading/Heading";
import Logo2 from "../components/Logo/Logo2";
import { useNavigate } from "react-router-dom"
import "../components/Form/Form.css";
const FourthPage = (props) => {
  
  return (
    <React.Fragment>
      <Logo></Logo>
      <StepperComponent active={props.active}></StepperComponent>
      <Logo2></Logo2>
      <Heading
        title={`Congratulations, ${props.userNameGot}`}
        subTitle={
          "You have completed onboarding, you can start using the Eden!"
        }
      ></Heading>
      <div className="buttonDiv">
        <button className="buttonStyle">Launch Eden</button>
      </div>
    </React.Fragment>
  );
};
export default FourthPage;
