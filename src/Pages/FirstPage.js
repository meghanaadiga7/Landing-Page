import Logo from "../components/Logo/Logo";
import StepperComponent from "../components/Stepper/Stepper";
import Heading from "../components/Heading/Heading";
import Form from "../components/Form/Form";
import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
const FirstPage = (props) => {
  
  return (
    <React.Fragment>
      <Logo></Logo>
      <StepperComponent active={props.active}></StepperComponent>
      <Heading
        title={"Welcome! First things first... "}
        subTitle={"You can always change them later."}
      ></Heading>
      <Form
        label1={"Full Name"}
        label2={"Display Name"}
        placeholder1={"Full Name"}
        placeholder2={"Display Name"}
        button={"Create WorkSpace"}
        pageValue={"FirstPage"}
        nextPage={"/workspace"}
        onClickChange={props.onClickChange}
        getUser={props.getUser}
      ></Form>
    </React.Fragment>
  );
};
export default FirstPage;
