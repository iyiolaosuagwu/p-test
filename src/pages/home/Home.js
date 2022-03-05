import React, { useState } from "react";
import "./index.sass";
import Sidebar from "components/side-bar";
import CurrencySelector from "components/currency-selector";
import Aside from "components/aside/Aside";
import CurrencyCard from "components/currency-card";
import LinkCard from "components/link-card";
import { ReactComponent as RequestMoney } from "assets/img/link_card/patricia_request.svg";
import { ReactComponent as CardlessWithdrawal } from "assets/img/link_card/patricia_cardless_withdrawal.svg";
import Card from "components/card";
import CalendarDatePicker from "components/calendar-date-picker";
import { ReactComponent as DownloadIcon } from "assets/img/misc/patricia_download.svg";
import { ReactComponent as BankDepositIcon } from "assets/img/link_card/patricia_bank.svg";
import { ReactComponent as UssdIcon } from "assets/img/link_card/patricia_ussd.svg";
import { ReactComponent as CardDepositIcon } from "assets/img/link_card/patricia_card_deposit.svg";
import { ReactComponent as LearnIcon } from "assets/img/link_card/patricia_learn.svg";
import Activities from "components/activities";
import activities from "./activities";
import RecentActivity from "components/recent-activity";
import ColoredLinkCard from "components/colored-link-card/ColoredLinkCard";
import HamburgerMenu from "components/hamburger-menu";
import Nav from "../../components/nav";

function Home(props) {
  const [selected, setSelected] = useState(0);
  const recentActivities = activities.map((activity, index) => (
    <RecentActivity key={index} {...activity} />
  ));
  const [showSideBar, setShowSideBar] = useState(false);

  function CardTabs(props) {
    const checkedTabs = props.tabs;
    const tabs = checkedTabs.map((tab, index) => (
      <div
        onClick={() => setSelected(index)}
        key={index}
        className={"card-tabs__tab " + (selected === index ? "selected" : "")}
      >
        {tab}
      </div>
    ));
    return <div className={"card-tabs"}>{tabs}</div>;
  }

  return (
    <div>
      <div className={"mobile__nav"}>
        <HamburgerMenu currentShow={showSideBar} changeShow={setShowSideBar} />
        <Nav />
      </div>
      <div className={"content"}>
        <Sidebar
          show={showSideBar}
          closeSideBar={() => setShowSideBar(false)}
        />
        <div id={"wrapper"}>
          <div id={"main-content"}>
            <h1 className={"heading"}>Wallet</h1>
            <div className="mt8-2">
              <CurrencySelector className={"mt8-2"} />
            </div>
            <div className={"mt8-3"}>
              <CurrencyCard />
            </div>
            <div className="mt8-6">
              <div id={"special-flex"} className="flex">
                <div className={"flex-size-6"}>
                  <LinkCard icon={RequestMoney} text={"Request Money"} />
                </div>
                <div className={"flex-size-6"}>
                  <LinkCard
                    icon={CardlessWithdrawal}
                    text={"Cardless Withdrawal"}
                  />
                </div>
              </div>
            </div>
            <div className="mt8-3">
              <Card>
                <div className={"card-header"}>
                  <p>Recent Activity</p>
                  <div className={"card-header__actions"}>
                    <CalendarDatePicker text={"Start date: "} />
                    <DownloadIcon />
                  </div>
                </div>
                <div className={"card-body"}>
                  <Activities>{recentActivities}</Activities>
                </div>
              </Card>
            </div>
          </div>
          <Aside>
            <Card>
              <CardTabs tabs={["Deposite", "Transfer"]} />
              {selected === 0 ? (
                <div className={"card-body"}>
                  <div className={"centered"}>
                    <h2 className={"heading mt8-4"}>
                      Select a method to Fund Naira wallet below
                    </h2>
                  </div>
                  <div className={"mt8-4 column"}>
                    <LinkCard
                      text={"Bank Deposit"}
                      shadow
                      icon={BankDepositIcon}
                    />
                    <LinkCard text={"USSD Deposit"} shadow icon={UssdIcon} />
                    <LinkCard
                      text={"Card Deposit"}
                      shadow
                      icon={CardDepositIcon}
                    />
                    <ColoredLinkCard
                      icon={LearnIcon}
                      text={"Learn More about Funding your wallet"}
                    />
                  </div>
                  <div className="mt8-4" />
                </div>
              ) : (
                <div className={"card-body"}>
                  <div className={"centered"}>
                    <h2 className={"heading mt8-4"}>
                      Select a method to Transfer Naira from wallet below
                    </h2>
                  </div>
                  <div className={"mt8-4 column"}>
                    <LinkCard
                      text={"Bank Deposit"}
                      shadow
                      icon={BankDepositIcon}
                    />
                    <LinkCard text={"USSD Deposit"} shadow icon={UssdIcon} />
                    <ColoredLinkCard
                      icon={LearnIcon}
                      text={"Learn More about Funding your wallet"}
                    />
                  </div>
                  <div className="mt8-4" />
                </div>
              )}
            </Card>
          </Aside>
        </div>
      </div>
    </div>
  );
}

export default Home;
