import React from "react";
import "./index.sass";
import Currency from "components/currency";
import { ReactComponent as RoundedCaretIcon } from "assets/img/misc/rounded_caret.svg";

function CurrencySelector(props) {
  return (
    <div className={`currency-selector ${props.className}`}>
      <Currency />
      <div className={"currency-selector__selector"}>
        <div className="currency-selector__selector__wrapper">
          <h3 className={"heading"}>Naira Wallet</h3>
          <RoundedCaretIcon />
        </div>
        <p className={"heading"}>Lorem Ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default CurrencySelector;
