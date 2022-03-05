import React from "react";
import "./index.sass";
import Currency from "components/currency";
import { capitalize } from "../../utils/helpers";

function RecentActivity(props) {
  return (
    <tr className={"recent-activity"}>
      <td>
          <div>
          <Currency background={"#DEF5F2"} foreground={"#006156"} />
          </div>
      </td>
      <td>
        <div className={"recent-activity__description"}>
          {props.description}
        </div>
      </td>
      <td>
        <div className={"recent-activity__amount"}>{props.amount}</div>
      </td>
      <td>
        <div className={"recent-activity__date"}>{props.date}</div>
      </td>
      <td className={"recent-activity__status-td"}>
        <div className={"recent-activity__status " + props.status}>
          {capitalize(props.status)}
        </div>
      </td>
    </tr>
  );
}

export default RecentActivity;
