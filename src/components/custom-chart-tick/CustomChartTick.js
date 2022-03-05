import React from "react";
import "./index.sass";

function CustomChartTick({x, y, stroke, payload}) {

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor={"end"}
        fill={"#44A798"}
        fontSize={12}
        lineheight={16}
        fontFamily={"Graphik-Regular, sas-serif"}
      >
        {payload.value}
      </text>
    </g>
  );
}

export default CustomChartTick;
