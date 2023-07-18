import React from "react";
import "./Heading.css";
const Heading = (props) => {
  return (
    <div className="heading">
      <h1>{props.title}</h1>
      <h4>{props.subTitle}</h4>
    </div>
  );
};
export default Heading;
