import React from "react";
import "./index.sass";
import { ReactComponent as ActionIcon } from "assets/img/link_card/patricia_link_card_arrow.svg";
import { Link } from "react-router-dom";

function LinkCard({ to = "#", icon, text, shadow = false }) {
  const LinkCardIcon = icon;
  return (
    <Link className={"link-card-link"} to={to}>
      <div className={"link-card" + (shadow ? " shadow" : "")}>
        <div className={"link-card__text"}>
          <LinkCardIcon />
          <p>{text}</p>
        </div>
        <div className="link-card__icon">
          <ActionIcon className={"link-card__icon__svg"} />
        </div>
      </div>
    </Link>
  );
}

export default LinkCard;