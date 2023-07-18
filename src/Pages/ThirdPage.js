import React,{useEffect} from "react";
import Logo from "../components/Logo/Logo";
import StepperComponent from "../components/Stepper/Stepper";
import Heading from "../components/Heading/Heading";
import Cards from "../components/Cards/Cards";
import { useNavigate } from "react-router-dom"
const ThirdPage = (props) => {
  
  return (
    <React.Fragment>
      <Logo></Logo>
      <StepperComponent active={props.active}></StepperComponent>
      <Heading
        title={"How are you planning to use Eden?"}
        subTitle={"We'll streamline your setup experience accordingly."}
      ></Heading>
      <Cards
        onClickChange={props.onClickChange}
        button={"Create WorkSpace"}
        nextPage={"/done"}
      ></Cards>
    </React.Fragment>
  );
};
export default ThirdPage;
