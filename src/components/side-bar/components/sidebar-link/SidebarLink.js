import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./index.sass";

function SidebarLink(props) {
  const SidebarIcon = props.icon;
  return (
    <Link
      isActive={() => {
        return props.active;
      }}
      className={`sidebar-link ${props.className}`}
      to={props.to}
    >
      <SidebarIcon className={"sidebar__icon"} width={"24px"} fill={"grey"} />
      <span className={"sidebar-link__text"}>{props.text}</span>
    </Link>
  );
}

export default SidebarLink;
