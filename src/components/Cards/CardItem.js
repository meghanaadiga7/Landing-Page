import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CardItem = (props) => {
  let formValidity = false;
  let classes = "flex-child";
  const clickHandler = (event) => {
    const valueSelected = event.target.value;
    classes = "flex-child invalid";
    if (valueSelected === "For Myself" || valueSelected === "With my team") {
      formValidity = true;
    }

    props.clickHandle(formValidity);
  };

  return (
    <button className={classes} value={props.getValue} onClick={clickHandler}>
      <FontAwesomeIcon className={"icon"} icon={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.para}</p>
    </button>
  );
};
export default CardItem;
