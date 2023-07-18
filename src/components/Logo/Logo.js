import React from "react";
import "./Logo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
const Logo = () => {
  return (
    <div className="logo">
      <FontAwesomeIcon className="icon" icon={faLeaf} />
      <h3>Eden</h3>
    </div>
  );
};
export default Logo;
