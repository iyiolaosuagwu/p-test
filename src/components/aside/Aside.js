import React from "react";
import "./index.sass";

function Aside(props) {
  return (
    <div id={"aside"}>
      <div className={"mt8-16"}>{props.children}</div>
    </div>
  );
}

export default Aside;
