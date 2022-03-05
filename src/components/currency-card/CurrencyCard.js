import React, { useState } from "react";
import "./index.sass";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import CustomChartTick from "components/custom-chart-tick/CustomChartTick";
import CustomChartTooltip from "components/custom-chart-tooltip";
import data, { available } from "./sample.data";

function CurrencyCard(props) {
  const [chartMode, setChartMode] = useState(available.YEAR);
  return (
    <div className={"currency-card shadow-card"}>
      <div className={"currency-card__balance-section"}>
        <div>
          <p className={"currency-card__sub-text"}>Total Balance</p>
          <h1 className={"currency-card__balance heading"}>₦89,153,001.73</h1>
          <p className={"currency-card__book-balance"}>
            Book Balance: <span className="naira">₦</span>450,000.093
          </p>
        </div>
      </div>
      <div className={"currency-card__chart-section__wrapper"}>
        <div className="currency-card__chart-section">
          <div className={"currency-card__chart__section__range"}>
            <p
              className={chartMode === available.DAY ? "selected" : ""}
              onClick={() => setChartMode(available.DAY)}
            >
              Today
            </p>
            <p
              className={chartMode === available.WEEK ? "selected" : ""}
              onClick={() => setChartMode(available.WEEK)}
            >
              Week
            </p>
            <p
              className={chartMode === available.MONTH ? "selected" : ""}
              onClick={() => setChartMode(available.MONTH)}
            >
              Month
            </p>
            <p
              className={chartMode === available.YEAR ? "selected" : ""}
              onClick={() => setChartMode(available.YEAR)}
            >
              Year
            </p>
          </div>
          <ResponsiveContainer width={"100%"} height={200}>
            <LineChart
              data={data[chartMode]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                axisLine={false}
                tickLine={false}
                dataKey="name"
                tick={<CustomChartTick />}
              />
              <Tooltip content={<CustomChartTooltip />} />
              <Line
                dot={false}
                strokeWidth={3}
                type="monotone"
                dataKey="pv"
                stroke="#DEF5F2"
                activeDot={{
                  r: 8,
                  fill: "#2DCA73",
                  stroke: "#ffffff",
                  strokeWidth: 3,
                }}
              />
              <Line
                dot={false}
                strokeWidth={3}
                type="monotone"
                dataKey="uv"
                stroke="#63BDAF"
                activeDot={{
                  r: 8,
                  fill: "#2DCA73",
                  stroke: "#ffffff",
                  strokeWidth: 3,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="currency-card__inflow-outflow">
          <div className={"currency-card__inflow-outflow__container"}>
            <div>
              <p className={"currency-card__inflow-outflow-title"}>Outflow</p>
              <p className={"currency-card__inflow-outflow-value"}>20,000</p>
            </div>
            <div>
              <p className={"currency-card__inflow-outflow-title"}>Inflow</p>
              <p className={"currency-card__inflow-outflow-value"}>
                <span className="naira">₦</span>20,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyCard;
