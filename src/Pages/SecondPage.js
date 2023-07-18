import Logo from "../components/Logo/Logo";
import Heading from "../components/Heading/Heading";
import StepperComponent from "../components/Stepper/Stepper";
import Form from "../components/Form/Form";
import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom"
const SecondPage = (props) => {
 
  
  return (
    <React.Fragment>
      <Logo></Logo>
      <StepperComponent active={props.active}></StepperComponent>
      <Heading
        title={"Let's set up a home for all your work"}
        subTitle={"You can always create another workspace later."}
      ></Heading>
      <Form
        label1={"Workspace Name"}
        label2={`Workspace URL(Optional)`}
        placeholder1={""}
        placeholder2={""}
        button={"Create WorkSpace"}
        pageValue={"SecondPage"}
        nextPage={"/plan"}
        onClickChange={props.onClickChange}
      ></Form>
    </React.Fragment>
  );
};
export default SecondPage;
