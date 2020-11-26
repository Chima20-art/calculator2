import React from "react";
import App from "../App";

function button(props) {
  return (
    <div className="button" onClick={props.onClick}>
      {props.text}
    </div>
  );
}
export default button;
