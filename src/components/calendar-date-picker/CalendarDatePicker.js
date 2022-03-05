import React from "react";
import "./index.sass";
import { ReactComponent as CalendarIcon } from "assets/img/misc/patricia_calendar.svg";

function CalendarDatePicker(props) {
  return (
    <div className={"calendar-date-picker"}>
      <CalendarIcon />
      <span className={"calendar-date-picker__text"}>{props.text} <span>01/02/2021</span></span>
      
    </div>
  );
}

export default CalendarDatePicker;
