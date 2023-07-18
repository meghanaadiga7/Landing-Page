import React from "react";
import CardItem from "./CardItem";
import "./Card.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cards = (props) => {
  const [formValidity, setFormValidity] = useState(false);
  const navigate=useNavigate();
  const clickHandle = (value) => {
    if (value) {
      setFormValidity(true);
  }
}
  

  const clickHandler=()=>{
    props.onClickChange();
    navigate(props["nextPage"],{replace:true});
  }

  return (
    <React.Fragment>
      <div className="flex-container">
        <CardItem
          icon={faUser}
          getValue="For Myself"
          clickHandle={clickHandle}
          title={"For myself"}
          para={"Write better, Think more clearly.Stay organized."}
        ></CardItem>
        <CardItem
          icon={faUsers}
          getValue="With my team"
          title={"With my team"}
          clickHandle={clickHandle}
          para={"Wikis,docs, tasks & projects, all in one place."}
        ></CardItem>
      </div>
      <div className="buttonDiv">
        <button
          disabled={!formValidity}
          onClick={clickHandler}
          className="buttonStyle"
        >
          {props.button}
        </button>
      </div>
    </React.Fragment>
  );
};
export default Cards;
