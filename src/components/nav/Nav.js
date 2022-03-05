import React from "react";
import "./index.sass";
import { ReactComponent as NotificationBell } from "assets/img/nav/patricia_notification.svg";
import profile_avatar from "assets/img/nav/patricia_profile_avatar.png";
import { ReactComponent as MenuIcon } from "assets/img/nav/patricia_hamburger_dots.svg";

function Nav(props) {
  return (
    <nav>
      <div className={"nav__profile"}>
        <div className={"nav__profile__bell"}>
          <span className={"nav__profile__bell__dot"} />
          <NotificationBell />
        </div>
        <img src={profile_avatar} alt={"Patricia Profile Avatar"} />
        <MenuIcon />
      </div>
    </nav>
  );
}

export default Nav;
