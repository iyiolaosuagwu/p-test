import React from "react";
import { ReactComponent as ActionIcon } from "assets/img/link_card/patricia_link_card_arrow.svg";
import { Link } from "react-router-dom";
import "./index.sass";

function ColoredLinkCard({ to = "#", ...props }) {
  const LinkIcon = props.icon;
  return (
    <Link to={to} className={"colored-link-card-link"}>
      <div className={"colored-link-card"}>
        <div className={"colored-link-card__text"}>
          <div className={"colored-link-card__text__icon__wrapper"}>
            <div className={"colored-link-card__text__icon"}>
              <LinkIcon />
            </div>
          </div>
          <span>{props.text}</span>
        </div>
        <div className="link-card__icon">
          <ActionIcon className={"link-card__icon__svg"} />
        </div>
      </div>
    </Link>
  );
}

export default ColoredLinkCard;
