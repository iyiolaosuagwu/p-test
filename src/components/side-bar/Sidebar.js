import React from "react";
import logo from "assets/img/sidebar/patricia_logo.svg";
import { ReactComponent as HelpIcon } from "assets/img/sidebar/patricia_help_center.svg";
import SidebarLink from "./components/sidebar-link";
import "./index.sass";
import links from "./links";

function Sidebar(props) {
  const sidebarLinks = links.map((link, index) => (
    <SidebarLink key={index} {...link} />
  ));
  return (
    <div>
      <div id={"sidebar"} className={`${props.show ? "show-sidebar" : ""}`}>
        <div onClick={props.closeSideBar} className={"sidebar__close-btn"}>
          <span>
            <span className={"times"}>x</span>
          </span>
        </div>
        <div id={"logo-wrapper"}>
          <img src={logo} alt={process.env.REACT_APP_NAME} />
        </div>
        <div id="links">{sidebarLinks}</div>
        <div id="help-center">
          <SidebarLink className={"help-center--no-icon-fill"} to={"#"} text={"Help Center"} icon={HelpIcon} />
        </div>
      </div>
      <div onClick={props.closeSideBar} className={"overlay"} />
    </div>
  );
}

export default Sidebar;
