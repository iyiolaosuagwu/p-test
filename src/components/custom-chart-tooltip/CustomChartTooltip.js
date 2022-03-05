import React from "react";
import "./index.sass";

function CustomChartTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className={"custom-tooltip"}>
        <div className={"custom-tooltip__content"}>
          <p className={"label"}>24,000.63</p>
          <p className={"desc"}>Dec 18 9:35 AM</p>
        </div>
      </div>
    );
  }

  return null;
}

export default CustomChartTooltip;
