import React from "react";
import "./index.sass";
import logo from "assets/img/sidebar/patricia_logo.svg";
import hamburgerIcon from "assets/img/misc/patricia_hamburger.svg";

function HamburgerMenu(props) {
  return (
    <div
      onClick={() => props.changeShow(!props.currentShow)}
      id={"hamburger-menu"}
    >
      <img src={hamburgerIcon} alt={""} height={20} />
      <img src={logo} alt={process.env.REACT_APP_NAME} />
    </div>
  );
}

export default HamburgerMenu;
