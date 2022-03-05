import React from "react";
import "./index.sass";
import { ReactComponent as NairaIcon } from "assets/img/currencies/naira.svg";

function Currency({
  currency = "₦",
  background = "#006156",
  foreground = "#fff",
}) {
  return (
    <div
      className={"currency"}
      style={{ backgroundColor: background, color: foreground }}
    >
      <NairaIcon fill={foreground} />
    </div>
  );
}

export default Currency;
