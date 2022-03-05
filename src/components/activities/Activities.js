import React from "react";
import "./index.sass";

function Activities(props) {
  return (
    <div className={"activities__wrapper"}>
      <table className={"activities"}>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default Activities;
