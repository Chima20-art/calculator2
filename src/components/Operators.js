import React from "react";

function operator(props) {
  return (
    <div className="buttons2" onClick={props.onClick}>
      {props.text}
    </div>
  );
}
export default operator;
